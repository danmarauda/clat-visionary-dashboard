
import { useState, useEffect } from 'react';

export const useWelcomeModal = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('eclat_has_visited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('eclat_has_visited', 'true');
    }
  }, []);

  const closeWelcomeModal = () => setShowWelcome(false);

  return {
    showWelcome,
    closeWelcomeModal
  };
};
