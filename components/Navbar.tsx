"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 md:px-12 ${isScrolled ? "py-4 frosted-glass mt-0 mx-0 rounded-none shadow-2xl" : "py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex flex-col">
                    <span className="text-2xl font-bold tracking-[0.2em] text-text-ivory uppercase leading-none">
                        Villa Care
                    </span>
                    <span className="text-[0.6rem] tracking-[0.5em] text-accent-rose uppercase font-medium mt-1">
                        Collective
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    {["Services", "Approach", "Reporting", "Consultation"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs uppercase tracking-widest text-text-ivory/70 hover:text-accent-rose transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-brand-teal text-text-ivory border border-text-ivory/20 rounded-full text-[0.6rem] uppercase tracking-widest font-bold hover:bg-brand-teal/80 transition-all"
                >
                    Book An Audit
                </motion.button>
            </div>
        </motion.nav>
    );
}
