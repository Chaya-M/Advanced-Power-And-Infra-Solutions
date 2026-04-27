"use client";

import React, { useState } from "react";
import { CLIENTS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Zap, ShieldCheck, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        name: "Industrial Power Setup",
        client: "Arvind Mills Ltd",
        description: "Installation and AMC for a 500 KVA DG set.",
        category: "Industrial"
    },
    {
        name: "Emergency Backup System",
        client: "Vegus Hospital",
        description: "Critical power solutions for healthcare operations.",
        category: "Healthcare"
    },
    {
        name: "Campus Power Solution",
        client: "Alkem Laboratories",
        description: "Multi-unit generator installation for laboratory facility.",
        category: "Laboratories"
    },
    {
        name: "Educational Facility Power",
        client: "Baldwin School",
        description: "Reliable standby power for school campus.",
        category: "Educational"
    },
    {
        name: "Ready-Mix Plant Power",
        client: "Sigma Concretes",
        description: "Heavy-duty generator rental for continuous operations.",
        category: "Construction"
    },
    {
        name: "Resort Infrastructure",
        client: "Indus Sports Resorts Pvt Ltd",
        description: "Complete power infrastructure for a luxury resort.",
        category: "Hospitality"
    }
];

const ClientSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 15; // Adjusted to balance withProjects (30 total / 15 = 2 pages)
    const totalPages = Math.ceil(CLIENTS.length / itemsPerPage);

    const next = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

    const currentClients = CLIENTS.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

    return (
        <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-7xl mx-auto min-h-[160px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="contents"
                    >
                        {currentClients.map((client, idx) => (
                            <motion.div 
                                key={client} 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (idx % itemsPerPage) * 0.02 }}
                                className="flex items-center gap-3 p-2 px-3 glass-panel rounded-xl border-white/5 hover:border-energy-yellow/30 transition-all group"
                            >
                                <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                    <CheckCircle size={10} className="text-energy-yellow group-hover:text-industrial-blue" />
                                </div>
                                <span className="font-black text-[7px] uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors truncate">{client}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <button 
                    onClick={prev}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-energy-yellow hover:text-industrial-blue transition-all group active:scale-95 shadow-lg"
                >
                    <ArrowLeft size={16} />
                </button>
                <div className="flex items-center gap-1.5 px-4">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-energy-yellow shadow-[0_0_10px_#F9A825]' : 'w-1.5 bg-white/10'}`} 
                        />
                    ))}
                </div>
                <button 
                    onClick={next}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-energy-yellow hover:text-industrial-blue transition-all group active:scale-95 shadow-lg"
                >
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Adjusted to balance with Clients (6 total / 3 = 2 pages)
    const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);

    const next = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

    const currentProjects = PROJECTS.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[480px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="contents"
                    >
                        {currentProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-panel rounded-[3rem] overflow-hidden border-white/5 group transition-all duration-500"
                            >
                                <div className="aspect-video bg-white/5 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <Zap className="w-16 h-16 text-white/5 group-hover:text-energy-yellow/20 group-hover:scale-125 transition-all duration-700" />
                                    <div className="absolute top-5 left-5 bg-energy-yellow text-industrial-blue text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full italic shadow-lg">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter italic">{project.name}</h4>
                                    <p className="text-energy-yellow font-black text-[8px] uppercase tracking-widest mb-3">{project.client}</p>
                                    <p className="text-[10px] leading-relaxed mb-6 font-medium text-slate-400 opacity-80">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-3 text-white/40 text-[8px] font-black uppercase tracking-[0.2em] border-t border-white/5 pt-4">
                                        <MapPin className="w-3.5 h-3.5 text-energy-yellow" />
                                        BANGALORE_NODE_ACTIVE
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-6 mt-10">
                <button 
                    onClick={prev}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-energy-yellow hover:text-industrial-blue transition-all group active:scale-95 shadow-lg"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-3 px-4">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-10 bg-energy-yellow shadow-[0_0_10px_#F9A825]' : 'w-2 bg-white/10'}`} 
                        />
                    ))}
                </div>
                <button 
                    onClick={next}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-energy-yellow hover:text-industrial-blue transition-all group active:scale-95 shadow-lg"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <div className="pt-32 min-h-screen bg-transparent">
            {/* Page Header */}
            <section className="bg-industrial-blue py-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic"
                    >
                        Success <span className="text-energy-yellow">Projects</span>
                    </motion.h1>
                    <p className="text-base text-slate-300 max-w-3xl leading-relaxed opacity-80 font-medium">
                        Showcasing our precision installations and the market-leading organizations that trust APIS Solutions for their mission-critical power.
                    </p>
                </div>
            </section>

            {/* Featured Projects Grid */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16">
                        <motion.span className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20">
                            Case Studies
                        </motion.span>
                        <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic flex items-center gap-4">
                            <Zap className="text-energy-yellow" size={28} />
                            Featured <span className="text-energy-yellow underline decoration-4 underline-offset-8">Installations</span>
                        </h2>
                    </div>
                    
                    <ProjectSlider />
                </div>
            </section>

            {/* Client List - High impact technical indicators */}
            <section className="py-24 bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20">
                            Authorized Trust
                        </motion.span>
                        <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Leading Organizations <span className="text-energy-yellow">We Serve</span></h3>
                        <p className="text-sm text-slate-400 mt-4 font-medium">A testament to our commitment to precision engineering and mission-critical reliability.</p>
                    </div>

                    <ClientSlider />
                </div>
            </section>

            {/* Final CTA - Industrial Power Branding */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-energy-yellow"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #061621 1px, transparent 0)`, backgroundSize: "30px 30px" }}></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-2xl md:text-5xl font-black text-industrial-blue mb-8 italic uppercase tracking-tighter leading-none">Your Next Power Strategy <br /> <span className="underline decoration-industrial-blue/30 underline-offset-8">Starts Here</span></h2>
                    <p className="text-base text-industrial-blue/80 mb-12 font-black uppercase tracking-[0.3em]">
                        ENGINEERING EXCELLENCE AT SCALE
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className="bg-industrial-blue text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-white hover:text-industrial-blue transition-all shadow-2xl shadow-industrial-blue/40 inline-block uppercase italic tracking-tighter">
                            Initiate Collaboration
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
