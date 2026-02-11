import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500',
                        'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
                        'transition-all duration-200',
                        error ? 'border-red-500' : 'border-slate-700',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
