
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

createRoot(document.getElementById("root")!).render(
  <CopilotKit publicApiKey="pk_PLACEHOLDER_REPLACE_WITH_YOUR_KEY">
    <App />
  </CopilotKit>
);
