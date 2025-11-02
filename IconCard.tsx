
import React from 'react';

interface IconCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <div className="flex-shrink-0 mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-base text-slate-600">{description}</p>
        </div>
    );
};
