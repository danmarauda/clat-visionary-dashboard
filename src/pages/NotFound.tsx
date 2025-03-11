
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <div className="space-y-6 max-w-md animate-fadeIn">
        <div className="flex flex-col items-center">
          <div className="text-9xl font-bold text-primary/30">404</div>
          <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
          <p className="text-muted-foreground mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="pt-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
