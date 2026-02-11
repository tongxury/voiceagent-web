import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50",
                    "w-64 p-3",
                    "bg-white rounded-lg shadow-lg border border-gray-100",
                    "text-sm text-gray-600 leading-relaxed text-center",
                    "after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2",
                    "after:border-8 after:border-transparent after:border-b-white",
                    "animate-in fade-in zoom-in-95 duration-200",
                    className
                )}>
                    {/* Triangle/Arrow - slightly complex to do pure CSS border with shadow, stick to simple for now or use svg */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                    <div className="relative z-10">
                        {content}
                    </div>
                </div>
            )}
        </div>
    );
};
