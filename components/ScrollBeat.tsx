"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ScrollBeatProps {
    title: string;
    subtitle?: string;
    details?: string[];
    cta?: string;
    scrollRange: [number, number];
    children?: ReactNode;
}

export default function ScrollBeat({ title, subtitle, details, cta, scrollRange }: ScrollBeatProps) {
    const { scrollYProgress } = useScroll();

    // Opacity: fade in, hold, fade out
    const opacity = useTransform(
        scrollYProgress,
        [scrollRange[0], scrollRange[0] + 0.05, scrollRange[1] - 0.05, scrollRange[1]],
        [0, 1, 1, 0]
    );

    // Y movement: slide up slightly
    const y = useTransform(
        scrollYProgress,
        [scrollRange[0], scrollRange[0] + 0.05, scrollRange[1] - 0.05, scrollRange[1]],
        [20, 0, 0, -20]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="snap-section max-w-4xl mx-auto px-6 flex flex-col items-center text-center justify-center h-screen"
        >
            <div className="frosted-glass p-8 md:p-12 rounded-2xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-text-ivory uppercase tracking-[0.2em]">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-text-ivory/80 mb-6 italic">
                        {subtitle}
                    </p>
                )}
                {details && (
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-text-ivory/60 uppercase tracking-widest">
                        {details.map((detail, i) => (
                            <span key={i} className="flex items-center">
                                {detail}
                                {i < details.length - 1 && <span className="mx-3 text-accent-rose">•</span>}
                            </span>
                        ))}
                    </div>
                )}
                {cta && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-10 px-8 py-4 bg-brand-teal text-text-ivory border border-text-ivory/20 rounded-full font-bold uppercase tracking-widest text-sm"
                    >
                        {cta}
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
