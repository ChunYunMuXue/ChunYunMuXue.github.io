'use client';

import { motion } from 'framer-motion';

export interface AwardItem {
    title: string;
    subtitle?: string;
    date?: string;
    content?: string;
}

interface AwardsProps {
    items: AwardItem[];
    title?: string;
}

export default function Awards({ items, title = 'Awards' }: AwardsProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-baseline gap-3">
                        <span className="text-xs text-neutral-500 w-14 flex-shrink-0">
                            {item.date}
                        </span>
                        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                            <span className="font-medium text-neutral-800 dark:text-white">
                                {item.title}
                            </span>
                            {item.subtitle ? ` - ${item.subtitle}` : ''}
                            {item.content ? ` - ${item.content}` : ''}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
