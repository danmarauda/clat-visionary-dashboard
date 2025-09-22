import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PicaToolCard = ({ toolCall }) => {
  const [expanded, setExpanded] = useState(false);

  if (!toolCall || !toolCall.result) {
    return null;
  }

  const { tool_name, result } = toolCall;

  const renderConnectionsResult = () => {
    if (tool_name === 'getAvailableConnections' && result.connections) {
      return (
        <div className="tool-result">
          <div className="tool-header">
            <span className="tool-icon">🔌</span>
            <span className="tool-title">Available Connections</span>
            <span className="tool-count">{result.connections.length} found</span>
          </div>
          
          <div className="connections-grid">
            {result.connections.slice(0, expanded ? undefined : 4).map((connection, index) => (
              <div key={index} className="connection-item">
                <div className="connection-name">{connection.name}</div>
                {connection.description && (
                  <div className="connection-desc">{connection.description}</div>
                )}
              </div>
            ))}
          </div>
          
          {result.connections.length > 4 && (
            <button 
              className="expand-button"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : `Show All ${result.connections.length}`}
            </button>
          )}
        </div>
      );
    }
    return null;
  };

  const renderActionsResult = () => {
    if (tool_name === 'getAvailableActions' && result.actions) {
      return (
        <div className="tool-result">
          <div className="tool-header">
            <span className="tool-icon">⚡</span>
            <span className="tool-title">{result.platform} Actions</span>
            <span className="tool-count">{result.actions.length} available</span>
          </div>
          
          <div className="actions-grid">
            {result.actions.slice(0, expanded ? undefined : 3).map((action, index) => (
              <div key={index} className="action-item">
                <div className="action-name">{action.title || action.name}</div>
                {action.description && (
                  <div className="action-desc">{action.description}</div>
                )}
              </div>
            ))}
          </div>
          
          {result.actions.length > 3 && (
            <button 
              className="expand-button"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : `Show All ${result.actions.length}`}
            </button>
          )}
        </div>
      );
    }
    return null;
  };

  const renderExecuteResult = () => {
    if (tool_name === 'execute') {
      const success = result.success;
      return (
        <div className={`tool-result execute-result ${success ? 'success' : 'error'}`}>
          <div className="tool-header">
            <span className="tool-icon">{success ? '✅' : '❌'}</span>
            <span className="tool-title">
              {result.action} via {result.platform}
            </span>
            <span className={`status-badge ${success ? 'success' : 'error'}`}>
              {success ? 'Success' : 'Failed'}
            </span>
          </div>
          
          {result.data && (
            <div className="execution-data">
              <button 
                className="expand-button"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Hide Details' : 'Show Details'}
              </button>
              
              {expanded && (
                <pre className="data-preview">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              )}
            </div>
          )}
          
          {result.error && (
            <div className="error-message">
              <strong>Error:</strong> {result.error}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="pica-tool-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {renderConnectionsResult()}
      {renderActionsResult()}
      {renderExecuteResult()}
    </motion.div>
  );
};

export default PicaToolCard;