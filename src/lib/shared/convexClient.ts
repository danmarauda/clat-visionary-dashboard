import { ConvexReactClient } from "convex/react";

// Create Convex client for React applications
function createConvexClient() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.REACT_APP_CONVEX_URL;
  
  if (!convexUrl) {
    console.warn("Convex URL not found. Using development URL.");
    return new ConvexReactClient("https://your-deployment-url.convex.cloud");
  }

  return new ConvexReactClient(convexUrl);
}

export const convex = createConvexClient();

// Export hooks for easy use
export { useQuery, useMutation, useAction } from "convex/react";

// Type definitions for common Convex operations
export type ConvexError = {
  message: string;
  code?: string;
};

export type ConvexResponse<T> = {
  data?: T;
  error?: ConvexError;
};

// Utility functions
export const handleConvexError = (error: any): string => {
  if (error?.message) {
    return error.message;
  }
  return "An unexpected error occurred";
};

export const isConvexError = (error: any): error is ConvexError => {
  return error && typeof error.message === "string";
};