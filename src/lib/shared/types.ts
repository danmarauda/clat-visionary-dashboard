// Shared TypeScript types for ALIAS

export interface User {
  _id: string;
  userId: string;
  name?: string;
  email?: string;
  preferences?: {
    theme: string;
    language: string;
    memoryEnabled: boolean;
  };
  memobaseUserId?: string;
  createdAt: number;
  updatedAt: number;
}

export interface ChatSession {
  _id: string;
  sessionId: string;
  userId: string;
  title: string;
  status: "active" | "archived";
  createdAt: number;
  updatedAt: number;
}

export interface Message {
  _id: string;
  messageId: string;
  sessionId: string;
  userId: string;
  role: "user" | "assistant" | "system";
  content: string;
  metadata?: {
    hasMemory?: boolean;
    toolCalls?: ToolCall[];
    clientTools?: ClientTool[];
    model?: string;
    tokens?: number;
  };
  createdAt: number;
}

export interface ToolCall {
  toolName: string;
  parameters: any;
  result: any;
  success: boolean;
}

export interface ClientTool {
  tool: string;
  parameters: any;
  result: any;
  success: boolean;
}

export interface ApiConnection {
  _id: string;
  userId: string;
  connectionId: string;
  platform: string;
  name: string;
  description?: string;
  status: "active" | "inactive" | "error";
  configuration?: any;
  lastUsed?: number;
  createdAt: number;
  updatedAt: number;
}

export interface MemorySnapshot {
  _id: string;
  userId: string;
  snapshotId: string;
  memoryContext: string;
  conversationCount: number;
  lastFlushedAt: number;
  createdAt: number;
}

export interface Agent {
  _id: string;
  agentId: string;
  userId: string;
  name: string;
  description?: string;
  systemPrompt: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  isPublic: boolean;
  tags?: string[];
  usageCount: number;
  createdAt: number;
  updatedAt: number;
}

export interface Notification {
  _id: string;
  userId: string;
  notificationId: string;
  type: "memory_update" | "api_connection" | "tool_execution" | "system_message";
  title: string;
  message: string;
  data?: any;
  isRead: boolean;
  createdAt: number;
}

export interface SystemConfig {
  _id: string;
  key: string;
  value: any;
  description?: string;
  updatedAt: number;
}

// Chat related types
export interface ChatStats {
  totalSessions: number;
  activeSessions: number;
  totalMessages: number;
  userMessages: number;
  assistantMessages: number;
  memoryEnhancedMessages: number;
  lastActivity: number | null;
}

export interface MemoryStats {
  hasMemory: boolean;
  snapshotCount: number;
  totalConversations: number;
  lastFlushDate: number | null;
  memoryAge: number;
  latestContext?: string;
}

export interface NotificationCounts {
  total: number;
  unread: number;
  byType: Record<string, number>;
}

// API responses
export interface PicaConnectionResponse {
  success: boolean;
  connections: Array<{
    name: string;
    platform: string;
    description: string;
  }>;
  count: number;
  error?: string;
}

export interface PicaActionResponse {
  success: boolean;
  platform: string;
  action: string;
  data?: any;
  error?: string;
}

export interface MemobaseIntegrationResponse {
  success: boolean;
  operation: "flush" | "retrieve" | "clear";
  message?: string;
  memoryContext?: string;
  hasMemory?: boolean;
  error?: string;
}

// Client-side tool types
export interface ClientToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, any>;
  required?: string[];
}

export interface ClientToolResult {
  success: boolean;
  tool: string;
  result?: any;
  error?: string;
  parameters: any;
}

// App configuration
export interface AppConfig {
  app_name: string;
  version: string;
  features: {
    chat: boolean;
    memory: boolean;
    pica_integration: boolean;
    api_connections: boolean;
    tool_execution: boolean;
    long_term_memory: boolean;
  };
  integrations: {
    pica_configured: boolean;
    memobase_available: boolean;
    convex_enabled: boolean;
  };
}

// Mobile-specific types
export interface MobileSession {
  sessionId: string;
  lastSyncAt: number;
  pendingMessages: Message[];
  offlineMode: boolean;
}

export interface PushNotification {
  title: string;
  body: string;
  data?: any;
  scheduledFor?: number;
}

// Real-time subscription types
export interface SessionSubscription {
  session: ChatSession | null;
  messages: Message[];
  lastUpdated: number;
}

export interface NotificationSubscription {
  notifications: Notification[];
  counts: NotificationCounts;
  lastUpdated: number;
}