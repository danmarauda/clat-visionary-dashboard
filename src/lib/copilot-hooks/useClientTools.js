import { useCallback, useEffect } from 'react';
import { clientTools } from '../lib/clientTools';

// Hook to register client-side tool callbacks from React components
export function useClientTools(category, callbacks) {
  const registerCallbacks = useCallback(() => {
    if (callbacks && Object.keys(callbacks).length > 0) {
      clientTools.registerCallback(category, callbacks);
    }
  }, [category, callbacks]);

  useEffect(() => {
    registerCallbacks();
  }, [registerCallbacks]);

  // Return function to execute tools
  const executeTool = useCallback(async (toolName, parameters) => {
    return await clientTools.executeTool(toolName, parameters);
  }, []);

  // Return available tools
  const getAvailableTools = useCallback(() => {
    return clientTools.getAvailableTools();
  }, []);

  return {
    executeTool,
    getAvailableTools
  };
}

// Hook for UI-related tools
export function useUITools(callbacks) {
  return useClientTools('ui', callbacks);
}

// Hook for navigation tools
export function useNavigationTools(callbacks) {
  return useClientTools('navigation', callbacks);
}

// Hook for chat tools
export function useChatTools(callbacks) {
  return useClientTools('chat', callbacks);
}

// Hook for memory tools  
export function useMemoryTools(callbacks) {
  return useClientTools('memory', callbacks);
}

// Hook for app-level tools
export function useAppTools(callbacks) {
  return useClientTools('app', callbacks);
}