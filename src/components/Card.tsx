import { type ReactNode } from 'react';
import { cn } from '../lib/utils';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                'bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50',
                hover && 'transition-all duration-300 hover:bg-slate-800/70 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20',
                className
            )}
        >
            {children}
        </div>
    );
}
