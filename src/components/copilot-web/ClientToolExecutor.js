import React from 'react';

// Component to display client-side tool execution results
const ClientToolExecutor = ({ toolResults }) => {
  if (!toolResults || toolResults.length === 0) {
    return null;
  }

  return (
    <div className="client-tool-results">
      {toolResults.map((result, index) => (
        <div key={index} className={`tool-result ${result.success ? 'success' : 'error'}`}>
          <div className="tool-header">
            <span className="tool-icon">
              {result.success ? '🔧' : '❌'}
            </span>
            <span className="tool-name">{result.tool}</span>
            <span className={`tool-status ${result.success ? 'success' : 'error'}`}>
              {result.success ? 'Executed' : 'Failed'}
            </span>
          </div>
          
          <div className="tool-content">
            {result.success ? (
              <div className="tool-success">
                <p><strong>Result:</strong> {result.result}</p>
                {result.parameters && Object.keys(result.parameters).length > 0 && (
                  <div className="tool-parameters">
                    <p><strong>Parameters:</strong></p>
                    <pre>{JSON.stringify(result.parameters, null, 2)}</pre>
                  </div>
                )}
              </div>
            ) : (
              <div className="tool-error">
                <p><strong>Error:</strong> {result.error}</p>
                {result.parameters && Object.keys(result.parameters).length > 0 && (
                  <div className="tool-parameters">
                    <p><strong>Attempted Parameters:</strong></p>
                    <pre>{JSON.stringify(result.parameters, null, 2)}</pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientToolExecutor;