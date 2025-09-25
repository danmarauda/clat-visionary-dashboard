// Convex client placeholder - dependencies not installed
// This file is currently unused and dependencies are not available

export const convex = null;

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