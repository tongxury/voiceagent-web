import { type ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface AccordionItemProps {
    title: string;
    content: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export function AccordionItem({ title, content, isOpen = false, onToggle }: AccordionItemProps) {
    return (
        <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/30 backdrop-blur-sm">
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors duration-200"
            >
                <span className="font-medium text-white">{title}</span>
                <ChevronDown
                    className={cn(
                        'w-5 h-5 text-slate-400 transition-transform duration-300',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>
            <div
                className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="px-6 py-4 text-slate-300 border-t border-slate-700">
                    {content}
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: Array<{ title: string; content: ReactNode }>;
    allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndexes(prev => prev.includes(index) ? [] : [index]);
        }
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
