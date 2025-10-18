import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClientConfig } from '@/config/types';
import { loadClientConfig, saveClientConfig } from '@/config/clientConfig';

interface ClientConfigContextType {
  config: ClientConfig;
  updateConfig: (config: ClientConfig) => void;
  resetConfig: () => void;
}

const ClientConfigContext = createContext<ClientConfigContextType | undefined>(undefined);

export const ClientConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ClientConfig>(() => loadClientConfig());

  const updateConfig = (newConfig: ClientConfig) => {
    setConfig(newConfig);
    saveClientConfig(newConfig);
  };

  const resetConfig = () => {
    const { defaultConfig } = require('@/config/defaultConfig');
    setConfig(defaultConfig);
    saveClientConfig(defaultConfig);
  };

  return (
    <ClientConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ClientConfigContext.Provider>
  );
};

export const useClientConfig = () => {
  const context = useContext(ClientConfigContext);
  if (!context) {
    throw new Error('useClientConfig must be used within ClientConfigProvider');
  }
  return context;
};
