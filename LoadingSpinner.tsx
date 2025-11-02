
import React from 'react';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
      </div>
    );
};
