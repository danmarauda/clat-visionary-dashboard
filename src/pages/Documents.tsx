import React from 'react';
import { FileText, Search, Lock, FolderTree, ArrowRight } from 'lucide-react';

const Documents: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center py-6">
        <h2 className="text-4xl font-light leading-tight tracking-wide">Organized Knowledge.</h2>
        <h2 className="text-4xl font-light leading-tight tracking-wide">Seamless Access.</h2>
        <div className="my-4">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-module-documents">Documents</h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground mt-8">
          Advanced document and knowledge management platform for storing, organizing, and sharing organizational information.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <a href="/projects" className="group inline-flex items-center gap-2 text-module-documents font-medium hover:underline">
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Previous: Projects
        </a>
        <a href="/collaboration" className="group inline-flex items-center gap-2 text-module-documents font-medium hover:underline">
          Next: Collaboration
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Documents;