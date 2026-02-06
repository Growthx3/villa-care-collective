"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function VillaBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress for a cinematic feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Background Transformations
    const scale = useTransform(smoothProgress, [0, 0.4, 0.7, 1], [1, 1.1, 1.05, 1.2]);
    const blur = useTransform(smoothProgress, [0, 0.2, 0.3, 0.5, 0.6, 0.8, 0.9, 1], [0, 2, 0, 4, 0, 2, 5, 0]);
    const brightness = useTransform(smoothProgress, [0, 0.1, 0.5, 0.8, 1], [1, 0.6, 0.8, 0.4, 0.7]);
    const yParallax = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-deep-black">
            <motion.div
                className="relative w-full h-full"
                style={{ scale, filter: `blur(${blur}px) brightness(${brightness})`, y: yParallax }}
            >
                <img
                    src="/heroimage.png"
                    alt="Luxury Villa"
                    className="w-full h-full object-cover"
                />
                {/* Subtle vignette/overlay to match #050505 */}
                <div className="absolute inset-0 bg-gradient-to-b from-deep-black/40 via-transparent to-deep-black/80" />
                <div className="noise-overlay" />
            </motion.div>
        </div>
    );
}
