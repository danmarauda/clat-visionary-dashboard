import React from 'react';
import { motion } from 'framer-motion';

const MemoryIndicator = ({ enabled, hasProfile, userId }) => {
  if (!enabled) {
    return (
      <div className="memory-indicator disabled">
        <div className="status-indicator disabled"></div>
        <span>Memory Disabled</span>
      </div>
    );
  }

  return (
    <motion.div 
      className="memory-indicator enabled"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="memory-status">
        <motion.div 
          className="status-indicator active"
          animate={{ 
            scale: hasProfile ? [1, 1.2, 1] : 1,
            opacity: hasProfile ? [1, 0.7, 1] : 1
          }}
          transition={{ 
            duration: 2, 
            repeat: hasProfile ? Infinity : 0 
          }}
        ></motion.div>
        <div className="memory-info">
          <span className="memory-title">
            🧠 Memory {hasProfile ? 'Active' : 'Learning'}
          </span>
          <span className="memory-subtitle">
            {hasProfile ? 'Personalized responses enabled' : 'Building your profile...'}
          </span>
        </div>
      </div>
      
      {userId && (
        <div className="user-id-display">
          <span className="user-label">ID:</span>
          <span className="user-value">{userId.slice(-8)}</span>
        </div>
      )}
    </motion.div>
  );
};

export default MemoryIndicator;