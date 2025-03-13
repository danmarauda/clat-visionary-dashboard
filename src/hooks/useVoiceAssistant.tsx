
import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Interface for what the hook returns
interface VoiceAssistantHook {
  isListening: boolean;
  toggleVoiceAssistant: () => void;
  processVoiceCommand: (command: string) => void;
}

// Class for WebRTC connection - simplified version adapted from the template
class WebRTCService {
  private peerConnection: RTCPeerConnection | null = null;
  private audioStream: MediaStream | null = null;
  private dataChannel: RTCDataChannel | null = null;
  private audioElement: HTMLAudioElement;

  constructor() {
    this.audioElement = document.createElement('audio');
    this.audioElement.autoplay = true;
  }

  async setupConnection(token: string): Promise<boolean> {
    try {
      this.peerConnection = new RTCPeerConnection();
      await this.setupAudio();
      this.setupDataChannel();

      const offer = await this.peerConnection.createOffer();
      await this.peerConnection.setLocalDescription(offer);

      const response = await fetch('https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17', {
        method: 'POST',
        body: offer.sdp,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/sdp'
        }
      });

      const answer = {
        type: 'answer' as RTCSdpType,
        sdp: await response.text()
      };

      await this.peerConnection.setRemoteDescription(answer);
      return true;
    } catch (error) {
      console.error('WebRTC setup error:', error);
      throw error;
    }
  }

  async setupAudio() {
    this.peerConnection!.ontrack = (event) => {
      this.audioElement.srcObject = event.streams[0];
    };
    
    this.audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.peerConnection!.addTrack(this.audioStream.getTracks()[0]);
  }

  setupDataChannel(): RTCDataChannel {
    this.dataChannel = this.peerConnection!.createDataChannel('oai-events');
    return this.dataChannel;
  }

  stop() {
    if (this.peerConnection) {
      this.peerConnection.close();
      this.peerConnection = null;
    }
    
    if (this.audioStream) {
      this.audioStream.getTracks().forEach(track => track.stop());
      this.audioStream = null;
    }
    
    if (this.dataChannel) {
      this.dataChannel.close();
      this.dataChannel = null;
    }
  }

  sendMessage(message: any) {
    if (this.dataChannel?.readyState === 'open') {
      this.dataChannel.send(JSON.stringify(message));
    }
  }
}

const useVoiceAssistant = (): VoiceAssistantHook => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  const webrtcServiceRef = useRef<WebRTCService | null>(null);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (webrtcServiceRef.current) {
        webrtcServiceRef.current.stop();
      }
    };
  }, []);

  const toggleVoiceAssistant = useCallback(async () => {
    setIsListening(prev => {
      const newState = !prev;
      
      if (newState) {
        // Start the voice recognition
        toast.info("Voice assistant activating", {
          description: "Connecting to voice service...",
          duration: 3000,
        });
        
        // Initialize the WebRTC connection
        initializeVoiceAssistant().catch(error => {
          console.error("Failed to initialize voice assistant:", error);
          toast.error("Voice assistant failed to activate", {
            description: "Could not connect to the voice service",
          });
          setIsListening(false);
        });
      } else {
        // Stop the voice recognition
        if (webrtcServiceRef.current) {
          webrtcServiceRef.current.stop();
          webrtcServiceRef.current = null;
        }
        toast.info("Voice assistant deactivated");
      }
      
      return newState;
    });
  }, []);

  // Initialize the voice assistant
  const initializeVoiceAssistant = async () => {
    try {
      // This is a mock implementation - in a real app, we would get a token from a backend
      const mockToken = "mock_token_for_demo";
      
      // Create WebRTC service
      webrtcServiceRef.current = new WebRTCService();
      
      // In a real implementation, this would connect to your backend to get a session token
      // For demo purposes, we'll just show a toast with a mock message
      toast.success("Voice assistant activated", {
        description: "Try saying 'Go to Dashboard' or 'Open Gallery'",
        duration: 5000,
      });
      
      // Automatically turn off after 15 seconds for demo purposes
      setTimeout(() => {
        if (isListening) {
          setIsListening(false);
          if (webrtcServiceRef.current) {
            webrtcServiceRef.current.stop();
            webrtcServiceRef.current = null;
          }
          toast.info("Voice assistant deactivated due to inactivity");
        }
      }, 15000);

    } catch (error) {
      console.error("Error initializing voice assistant:", error);
      throw error;
    }
  };

  // Process voice commands - this would be connected to the data channel in a real implementation
  const processVoiceCommand = useCallback((command: string) => {
    // Convert to lowercase for easier matching
    const lowerCommand = command.toLowerCase();
    
    // Navigation commands
    if (lowerCommand.includes('go to') || lowerCommand.includes('open')) {
      const pages = {
        'home': '/',
        'dashboard': '/dashboard',
        'gallery': '/gallery',
        'executive summary': '/executive-summary',
        'ai': '/ai-analytics',
        'analytics': '/analytics-os',
        'building': '/building-os',
        'users': '/user-profiles',
        'data': '/data-integrations',
        'reporting': '/reporting',
        'security': '/security',
        'gantt': '/gantt-chart',
        // Add more page mappings here
      };
      
      for (const [keyword, path] of Object.entries(pages)) {
        if (lowerCommand.includes(keyword)) {
          navigate(path);
          toast.success(`Navigating to ${keyword}`);
          return;
        }
      }
    }
    
    // Modal commands
    if (lowerCommand.includes('show welcome') || lowerCommand.includes('open welcome')) {
      localStorage.removeItem('eclat_has_visited');
      window.location.reload();
      return;
    }
    
    // If no command was recognized
    toast.error("Sorry, I didn't understand that command");
  }, [navigate]);

  return {
    isListening,
    toggleVoiceAssistant,
    processVoiceCommand,
  };
};

export default useVoiceAssistant;
