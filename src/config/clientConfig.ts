import { ClientConfig } from './types';
import { defaultConfig } from './defaultConfig';

const CONFIG_STORAGE_KEY = 'alias-hq-client-config';

export const loadClientConfig = (): ClientConfig => {
  try {
    const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load client config:', error);
  }
  return defaultConfig;
};

export const saveClientConfig = (config: ClientConfig): void => {
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Failed to save client config:', error);
  }
};

export const resetClientConfig = (): ClientConfig => {
  localStorage.removeItem(CONFIG_STORAGE_KEY);
  return defaultConfig;
};

export const exportClientConfig = (config: ClientConfig): string => {
  return JSON.stringify(config, null, 2);
};

export const importClientConfig = (jsonString: string): ClientConfig => {
  try {
    const imported = JSON.parse(jsonString);
    // Basic validation
    if (!imported.id || !imported.branding || !imported.modules) {
      throw new Error('Invalid config format');
    }
    return imported;
  } catch (error) {
    throw new Error('Failed to import config: Invalid JSON format');
  }
};
