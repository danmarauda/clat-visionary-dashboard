
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import App from './App.tsx';
import './index.css';
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { getCopilotApiKey } from './integrations/supabase/client.ts';

function Root() {
  const [apiKey, setApiKey] = useState<string | null>("pk_PLACEHOLDER_REPLACE_WITH_YOUR_KEY");
  
  useEffect(() => {
    const fetchApiKey = async () => {
      const key = await getCopilotApiKey();
      if (key) {
        setApiKey(key);
      }
    };
    
    fetchApiKey();
  }, []);
  
  if (!apiKey) {
    return <div>Loading CopilotKit...</div>
  }
  
  return (
    <CopilotKit publicApiKey={apiKey}>
      <App />
    </CopilotKit>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
