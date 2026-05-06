'use client';

import { motion } from 'framer-motion';

export interface ServiceItem {
    title: string;
    subtitle?: string;
    date?: string;
    content?: string;
}

interface ServicesProps {
    items: ServiceItem[];
    title?: string;
}

export default function Services({ items, title = 'Services' }: ServicesProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <span className="text-xs text-neutral-500 mt-1 w-20 flex-shrink-0">
                            {item.date}
                        </span>
                        <p className="text-sm leading-relaxed text-neutral-700 dark:text-white">
                            {item.content || item.subtitle || item.title}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
