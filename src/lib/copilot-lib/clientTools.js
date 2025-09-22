// Client-side tool registry for ALIAS AI assistant
// These tools allow the AI to control the UI directly

class ClientToolRegistry {
  constructor() {
    this.tools = new Map();
    this.callbacks = new Map();
    this.registerDefaultTools();
  }

  // Register a tool with its implementation
  registerTool(name, definition, implementation) {
    this.tools.set(name, {
      name,
      definition,
      implementation
    });
  }

  // Register callback functions from React components
  registerCallback(name, callback) {
    this.callbacks.set(name, callback);
  }

  // Execute a tool
  async executeTool(name, parameters = {}) {
    const tool = this.tools.get(name);
    if (!tool) {
      throw new Error(`Tool '${name}' not found`);
    }

    try {
      const result = await tool.implementation(parameters, this.callbacks);
      return {
        success: true,
        tool: name,
        result,
        parameters
      };
    } catch (error) {
      return {
        success: false,
        tool: name,
        error: error.message,
        parameters
      };
    }
  }

  // Get all available tools
  getAvailableTools() {
    return Array.from(this.tools.values()).map(tool => ({
      name: tool.name,
      definition: tool.definition
    }));
  }

  // Register default tools
  registerDefaultTools() {
    // Navigation Tools
    this.registerTool('switchTab', {
      description: 'Switch to a different tab in the interface',
      parameters: {
        tab: {
          type: 'string',
          enum: ['chat', 'memory', 'connections'],
          description: 'The tab to switch to'
        }
      },
      required: ['tab']
    }, async (params, callbacks) => {
      const { setActiveTab } = callbacks.get('navigation') || {};
      if (setActiveTab) {
        setActiveTab(params.tab);
        return `Switched to ${params.tab} tab`;
      }
      throw new Error('Navigation callback not registered');
    });

    this.registerTool('switchTheme', {
      description: 'Switch between light and dark theme',
      parameters: {
        theme: {
          type: 'string',
          enum: ['light', 'dark', 'toggle'],
          description: 'Theme to switch to, or "toggle" to switch between themes'
        }
      }
    }, async (params, callbacks) => {
      const { toggleTheme, setTheme } = callbacks.get('theme') || {};
      if (params.theme === 'toggle' && toggleTheme) {
        toggleTheme();
        return 'Theme toggled';
      } else if (setTheme) {
        setTheme(params.theme);
        return `Theme switched to ${params.theme}`;
      }
      throw new Error('Theme callback not registered');
    });

    // Chat Management Tools
    this.registerTool('clearChat', {
      description: 'Clear the current chat conversation',
      parameters: {}
    }, async (params, callbacks) => {
      const { clearChat } = callbacks.get('chat') || {};
      if (clearChat) {
        clearChat();
        return 'Chat cleared successfully';
      }
      throw new Error('Chat callback not registered');
    });

    this.registerTool('sendMessage', {
      description: 'Send a message in the chat',
      parameters: {
        message: {
          type: 'string',
          description: 'The message to send'
        }
      },
      required: ['message']
    }, async (params, callbacks) => {
      const { sendMessage } = callbacks.get('chat') || {};
      if (sendMessage) {
        await sendMessage(params.message);
        return `Message sent: ${params.message}`;
      }
      throw new Error('Chat callback not registered');
    });

    // Memory Management Tools
    this.registerTool('flushMemory', {
      description: 'Flush current conversation to long-term memory',
      parameters: {}
    }, async (params, callbacks) => {
      const { flushMemory } = callbacks.get('memory') || {};
      if (flushMemory) {
        await flushMemory();
        return 'Memory flushed to long-term storage';
      }
      throw new Error('Memory callback not registered');
    });

    this.registerTool('resetMemory', {
      description: 'Reset user memory and start fresh',
      parameters: {}
    }, async (params, callbacks) => {
      const { resetMemory } = callbacks.get('memory') || {};
      if (resetMemory) {
        resetMemory();
        return 'Memory reset - starting fresh';
      }
      throw new Error('Memory callback not registered');
    });

    this.registerTool('getMemoryStatus', {
      description: 'Get current memory status and user profile information',
      parameters: {}
    }, async (params, callbacks) => {
      const { getMemoryStatus } = callbacks.get('memory') || {};
      if (getMemoryStatus) {
        const status = getMemoryStatus();
        return status;
      }
      throw new Error('Memory callback not registered');
    });

    // UI Control Tools
    this.registerTool('showToast', {
      description: 'Show a notification toast message',
      parameters: {
        message: {
          type: 'string',
          description: 'The message to display'
        },
        type: {
          type: 'string',
          enum: ['success', 'error', 'info', 'warning'],
          description: 'Type of toast message'
        }
      },
      required: ['message']
    }, async (params, callbacks) => {
      const { showToast } = callbacks.get('ui') || {};
      if (showToast) {
        showToast(params.message, params.type || 'info');
        return `Toast shown: ${params.message}`;
      }
      throw new Error('UI callback not registered');
    });

    this.registerTool('scrollToElement', {
      description: 'Scroll to a specific element or section',
      parameters: {
        target: {
          type: 'string',
          enum: ['top', 'bottom', 'input', 'messages'],
          description: 'Element to scroll to'
        }
      },
      required: ['target']
    }, async (params, callbacks) => {
      const { scrollTo } = callbacks.get('ui') || {};
      if (scrollTo) {
        scrollTo(params.target);
        return `Scrolled to ${params.target}`;
      }
      throw new Error('UI callback not registered');
    });

    // Information Tools
    this.registerTool('getAppStatus', {
      description: 'Get current application status and configuration',
      parameters: {}
    }, async (params, callbacks) => {
      const { getAppStatus } = callbacks.get('app') || {};
      if (getAppStatus) {
        const status = await getAppStatus();
        return status;
      }
      throw new Error('App callback not registered');
    });

    this.registerTool('getConnectionsInfo', {
      description: 'Get information about API connections',
      parameters: {}
    }, async (params, callbacks) => {
      const { getConnectionsInfo } = callbacks.get('app') || {};
      if (getConnectionsInfo) {
        const info = await getConnectionsInfo();
        return info;
      }
      throw new Error('App callback not registered');
    });

    // Advanced UI Tools
    this.registerTool('highlightElement', {
      description: 'Highlight a UI element temporarily',
      parameters: {
        element: {
          type: 'string',
          description: 'CSS selector or element identifier to highlight'
        },
        duration: {
          type: 'number',
          description: 'Duration in milliseconds to highlight (default: 2000)'
        }
      },
      required: ['element']
    }, async (params, callbacks) => {
      const { highlightElement } = callbacks.get('ui') || {};
      if (highlightElement) {
        highlightElement(params.element, params.duration || 2000);
        return `Highlighted element: ${params.element}`;
      }
      throw new Error('UI callback not registered');
    });

    this.registerTool('openExternalLink', {
      description: 'Open an external link in a new tab',
      parameters: {
        url: {
          type: 'string',
          description: 'URL to open'
        },
        description: {
          type: 'string',
          description: 'Description of what the link contains'
        }
      },
      required: ['url']
    }, async (params, callbacks) => {
      window.open(params.url, '_blank', 'noopener,noreferrer');
      return `Opened link: ${params.description || params.url}`;
    });

    // Help and Guidance Tools
    this.registerTool('showHelp', {
      description: 'Show help information for specific features',
      parameters: {
        topic: {
          type: 'string',
          enum: ['memory', 'connections', 'chat', 'general'],
          description: 'Help topic to display'
        }
      }
    }, async (params, callbacks) => {
      const { showHelp } = callbacks.get('ui') || {};
      if (showHelp) {
        showHelp(params.topic || 'general');
        return `Showing help for: ${params.topic || 'general'}`;
      }
      throw new Error('UI callback not registered');
    });
  }
}

// Create global instance
export const clientTools = new ClientToolRegistry();

// Helper function to detect tool calls in AI responses
export function extractToolCalls(message) {
  const toolCallPattern = /\[TOOL:(\w+)(?:\s+(.+?))?\]/g;
  const calls = [];
  let match;

  while ((match = toolCallPattern.exec(message)) !== null) {
    const toolName = match[1];
    let parameters = {};
    
    if (match[2]) {
      try {
        parameters = JSON.parse(match[2]);
      } catch (e) {
        // If JSON parsing fails, treat as simple key-value
        const paramStr = match[2];
        if (paramStr.includes('=')) {
          parameters = {};
          paramStr.split(',').forEach(pair => {
            const [key, value] = pair.split('=');
            if (key && value) {
              parameters[key.trim()] = value.trim().replace(/['"]/g, '');
            }
          });
        }
      }
    }

    calls.push({
      tool: toolName,
      parameters,
      originalText: match[0]
    });
  }

  return calls;
}

// Helper function to execute tool calls from AI responses
export async function executeToolCalls(message) {
  const toolCalls = extractToolCalls(message);
  const results = [];

  for (const call of toolCalls) {
    try {
      const result = await clientTools.executeTool(call.tool, call.parameters);
      results.push(result);
    } catch (error) {
      results.push({
        success: false,
        tool: call.tool,
        error: error.message,
        parameters: call.parameters
      });
    }
  }

  return results;
}

export default clientTools;