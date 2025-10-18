import { ResearchProfile } from '../types/ResearchProfile';
import { eclatOSProfile } from './eclatOS';

// Registry of all client profiles
export const clientProfiles: Record<string, ResearchProfile> = {
  'eclat-os': eclatOSProfile,
  // Add more clients here as needed
};

// Get a specific client profile
export const getClientProfile = (clientId: string): ResearchProfile | null => {
  return clientProfiles[clientId] || null;
};

// Get all client IDs
export const getAllClientIds = (): string[] => {
  return Object.keys(clientProfiles);
};

// Default client ID
export const DEFAULT_CLIENT_ID = 'eclat-os';
