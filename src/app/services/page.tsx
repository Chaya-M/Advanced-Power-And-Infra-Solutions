"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Settings,
    Truck,
    Wrench,
    ShieldCheck,
    Package,
    RefreshCcw,
    ArrowRight,
    Zap,
    CheckCircle2,
    Phone
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

const serviceIcons = {
    sales: Package,
    rental: Truck,
    installation: Zap,
    maintenance: Settings,
    amc: ShieldCheck,
    repair: Wrench,
    buyback: RefreshCcw
};

export default function Services() {
    return (
        <div className="pt-32 min-h-screen bg-transparent">
            <section className="bg-industrial-blue py-12 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic"
                    >
                        Our <span className="text-energy-yellow">Services</span>
                    </motion.h1>
                    <p className="text-base text-slate-300 max-w-2xl mx-auto opacity-80 font-medium font-medium">
                        Comprehensive diesel generator solutions tailored for every mission-critical power requirement.
                    </p>
                </div>
            </section>

            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="space-y-24">
                        {SERVICES.map((service, idx) => {
                            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Settings;
                            return (
                                <motion.div
                                    key={service.slug}
                                    id={service.slug}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col lg:flex-row gap-16 items-center scroll-mt-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className="lg:w-1/2">
                                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-energy-yellow group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                            <Icon size={32} />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">
                                            {service.title}
                                        </h2>
                                        <p className="text-base text-slate-400 mb-8 leading-relaxed font-medium">
                                            {service.description}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                            {[
                                                "Expert technical support",
                                                "Genuine spare parts",
                                                "Quick response time",
                                                "Reliable performance"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-slate-300 font-black text-[10px] uppercase tracking-widest items-center">
                                                    <CheckCircle2 className="w-4 h-4 text-energy-yellow shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-6">
                                            <Link
                                                href="/contact"
                                                className="bg-energy-yellow text-industrial-blue px-10 py-4 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 italic"
                                            >
                                                Enquire Now
                                            </Link>
                                            {service.slug === 'rental' && (
                                                <Link
                                                    href="/rental"
                                                    className="border-2 border-white/10 text-white px-10 py-4 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white hover:text-industrial-blue transition-all italic"
                                                >
                                                    Rental Details
                                                </Link>
                                            )}
                                            {service.slug === 'sales' && (
                                                <Link
                                                    href="/sales"
                                                    className="border-2 border-white/10 text-white px-10 py-4 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white hover:text-industrial-blue transition-all italic"
                                                >
                                                    Sales Details
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <div className="aspect-[4/3] glass-panel rounded-[3rem] border-white/5 relative overflow-hidden flex items-center justify-center group">
                                            <div className="absolute inset-0 bg-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                            <Icon className="w-32 h-32 text-energy-yellow/10 group-hover:scale-110 group-hover:text-energy-yellow/20 transition-all duration-700" />
                                            {/* Decorative blueprint accent */}
                                            <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-energy-yellow/20 rounded-br-2xl pointer-events-none"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Capacity Range Section - Technical Design */}
            <section className="py-24 bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <div className="mb-12">
                        <motion.span className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20">
                            Power Scales
                        </motion.span>
                        <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Capacity Range for All <span className="text-energy-yellow">Sectors</span></h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-panel border-white/5 p-10 rounded-[3rem] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <span className="text-4xl md:text-7xl font-black text-white italic block mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-energy-yellow transition-colors duration-500">
                            {COMPANY_INFO.capacityRange}
                        </span>
                        <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
                            We supply and service generators for diverse needs—from small commercial units to high-output industrial power plants.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                        {["Apartments", "Factories", "Hospitals", "Construction"].map((sector, i) => (
                            <motion.div 
                                key={sector} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-energy-yellow/30 hover:bg-white/10 transition-all duration-300"
                            >
                                <span className="font-black text-xs uppercase tracking-widest text-slate-300">{sector}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA - High Impact */}
            <section className="py-24 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tighter italic">Need specialized <span className="text-energy-yellow underline decoration-4 underline-offset-8">power advice?</span></h2>
                    <p className="text-base text-slate-400 mb-12 font-medium">
                        Our technical engineering team is ready to assist you in choosing the right generator solution for your project requirements.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`tel:${COMPANY_INFO.phone[0]}`}
                        className="inline-flex items-center gap-4 bg-energy-yellow text-industrial-blue px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-white transition-all shadow-2xl shadow-energy-yellow/20 italic tracking-tighter"
                    >
                        <Phone className="w-6 h-6" />
                        CALL +91 96860 98702
                    </motion.a>
                </div>
            </section>
        </div>
    );
}
