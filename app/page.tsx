"use client";

import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Droplets, Zap, Home as HomeIcon, Waves, Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { useRef } from "react";

const pillars = [
  {
    id: "01",
    title: "Pool & Water Systems — Pool Maintenance Dubrovnik",
    desc: "Comprehensive stewardship of your aquatic assets, ensuring technical precision and crystal-clear perfection.",
    items: [
      "Water chemistry testing & balancing (clarity, hygiene, comfort)",
      "Filtration/circulation servicing (filters, pumps, valves, flow/pressure)",
      "Equipment servicing (heaters/heat pumps, chlorination/dosing systems, controls)",
      "Leak investigation & performance troubleshooting",
      "Seasonal opening & winterisation",
    ],
    icon: Droplets,
  },
  {
    id: "02",
    title: "Core Home Systems — HVAC Servicing Dubrovnik / Air Conditioning Maintenance",
    desc: "Optimizing the mechanical heart of your villa for maximum efficiency and climate resilience.",
    items: [
      "HVAC servicing & performance tuning (filters, drains, airflow, calibration)",
      "Plumbing inspections & leak prevention (wet areas, valves, pressure)",
      "Hot water system maintenance (boilers/heat pumps/cylinders; descaling as needed)",
      "Electrical fault triage + coordination of certified compliance works",
    ],
    icon: Zap,
  },
  {
    id: "03",
    title: "Coastal Property Maintenance / Corrosion Control",
    desc: "Specialized protection against Mediterranean elements and technical infrastructure oversight.",
    items: [
      "Roof/terrace water-ingress inspections & prevention",
      "Gutters, drains & stormwater flow checks/clearing",
      "Door/window hardware, seals & corrosion-sensitive components upkeep",
      "Facade/stone condition monitoring + specialist coordination",
      "Salt-air protection, corrosion control, and marine-grade recommendations",
      "Humidity monitoring & mould-prevention actions (ventilation/dehumidifier strategy)",
      "Safety checks + emergency property response Dubrovnik (isolation/shutoffs, stabilisation, documented call-outs)",
    ],
    icon: Shield,
  },
];

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

    return (
        <main className="bg-deep-black text-text-ivory selection:bg-brand-teal selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden p-0">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/heroimage.png"
                        alt="Villa Care Hero"
                        className="w-full h-full object-cover brightness-[0.85] gradient-mask"
                    />
                    <div className="absolute inset-0 hero-gradient" />
                </motion.div>

                <div className="relative z-10 text-center max-w-5xl px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1.2 }}
                        className="text-accent-rose text-[0.7rem] uppercase tracking-[0.6em] mb-6 font-semibold"
                    >
                        Engineering the art of effortless ownership
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-balance"
                    >
                        VILLA CARE <br />
                        <span className="text-brand-teal">COLLECTIVE</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 1.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <button className="px-10 py-4 bg-brand-teal text-text-ivory border border-text-ivory/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-teal/80 transition-all flex items-center gap-3">
                            Book A Technical Audit <ArrowRight size={14} />
                        </button>
                        <button className="px-10 py-4 border border-text-ivory/20 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-text-ivory hover:text-deep-black transition-all">
                            Discover Our Approach
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[0.6rem] uppercase tracking-widest text-text-ivory/40">Scroll to explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-brand-teal to-transparent" />
                </motion.div>
            </section>

            {/* SERVICES PILLARS SECTION */}
            <section id="services" className="relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-accent-rose text-xs tracking-[0.4em] mb-4">Functional Excellence</h2>
                            <h3 className="text-4xl md:text-6xl font-bold mb-6">Our Technical Pillars</h3>
                            <p className="text-text-ivory/60 text-lg leading-relaxed">
                                Invisible, hyper-technical, and uncompromising. We don't just maintain; we steward your asset with engineering precision.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="frosted-glass p-8 rounded-2xl hover:border-accent-rose/30 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                                        <pillar.icon size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-accent-rose/50">{pillar.id}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-4 tracking-wider">{pillar.title}</h4>
                                <p className="text-sm text-text-ivory/78 mb-8 leading-relaxed">
                                    {pillar.desc}
                                </p>
                                <ul className="space-y-3">
                                    {pillar.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-[0.65rem] uppercase tracking-widest text-text-ivory/55">
                                            <CheckCircle2 size={12} className="text-brand-teal" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPROACH / STEWARDSHIP SECTION */}
            <section id="approach" className="bg-brand-teal/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-accent-rose text-xs tracking-[0.4em] mb-4">Precision Stewardship</h2>
                        <h3 className="text-4xl md:text-6xl font-bold mb-8">The Asset Register</h3>
                        <p className="text-text-ivory/60 text-lg mb-8 leading-relaxed">
                            We provide a comprehensive technical logbook for your property. Every intervention, check, and upgrade is captured in high-fidelity photo logs and measured notes.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Quarterly performance reporting",
                                "Vendor performance audits",
                                "Measured notes and technical logs",
                                "Planned preventive scheduling",
                            ].map((point) => (
                                <div key={point} className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-full border border-accent-rose/30 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-rose" />
                                    </div>
                                    <span className="text-sm uppercase tracking-widest text-text-ivory/80">{point}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-12 px-8 py-4 border border-text-ivory/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-teal transition-all">
                            Learn More About Reporting
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-3xl overflow-hidden border border-text-ivory/10"
                    >
                        <img
                            src="/heroimage.png"
                            alt="Technical Dashboard"
                            className="w-full h-full object-cover grayscale opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="frosted-glass p-10 rounded-2xl max-w-sm text-center">
                                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-accent-rose mb-4">Live Dashboard</p>
                                <p className="text-xl font-bold mb-2">Total Control</p>
                                <p className="text-xs text-text-ivory/50">Access your property's technical log from anywhere in the world.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
                    <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Your estate, <br /> <span className="text-brand-teal italic">engineered.</span></h3>
                    <p className="text-xl text-text-ivory/60 mb-12 max-w-2xl mx-auto font-light">
                        Secure your sanctuary with a private technical audit. Discover the hidden vulnerabilities and performance gaps in your property.
                    </p>
                    <button className="px-16 py-6 bg-text-ivory text-deep-black rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all shadow-[0_0_50px_rgba(195,185,150,0.2)]">
                        Schedule a Consultation
                    </button>
                </div>

                {/* Background elements */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-text-ivory/10 to-transparent -rotate-12" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-rose/10 to-transparent rotate-6" />
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-text-ivory/5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-xl font-bold tracking-[0.2em] uppercase">Villa Care</span>
                        <span className="text-[0.5rem] tracking-[0.4em] text-accent-rose uppercase mt-1">Collective</span>
                    </div>
                    <div className="flex gap-10 text-[0.6rem] uppercase tracking-widest text-text-ivory/40">
                        <span>© 2026 Villa Care Collective</span>
                        <a href="#" className="hover:text-text-ivory transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-text-ivory transition-colors">Terms of Service</a>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-8 h-8 rounded-full border border-text-ivory/10 flex items-center justify-center hover:border-accent-rose transition-colors cursor-pointer">
                            <span className="text-[0.6rem]">IN</span>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-text-ivory/10 flex items-center justify-center hover:border-accent-rose transition-colors cursor-pointer">
                            <span className="text-[0.6rem]">IG</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
