"use client";

import React from "react";
import { Package, ShieldCheck, Zap, ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sales() {
    return (
        <div className="pt-32 min-h-screen bg-transparent">
            <section className="bg-industrial-blue py-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic"
                    >
                        Authorized <span className="text-energy-yellow">Sales Hub</span>
                    </motion.h1>
                    <p className="text-base text-slate-300 max-w-2xl mx-auto opacity-80 font-medium">
                        Direct procurement of Mahindra Powerol Diesel Generators. We provide end-to-end sales support from selection to installation.
                    </p>
                </div>
            </section>

            <section className="py-16 relative overflow-hidden bg-transparent">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="glass-panel p-10 rounded-[3rem] border-white/5">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-8 inline-block border border-energy-yellow/20"
                            >
                                Procurement Excellence
                            </motion.span>
                            <h2 className="text-xl md:text-3xl font-black mb-8 text-white uppercase tracking-tighter">
                                Why Buy From <span className="text-energy-yellow underline decoration-4 underline-offset-8">APIS?</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                                We offer a wide range of diesel generators designed for maximum efficiency and durability. As authorized dealers, we ensure you get genuine products with full manufacturer warranty and service support.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Genuine Spare Parts",
                                    "Official Warranty",
                                    "Expert Installation",
                                    "Performance Testing",
                                    "AMC Support",
                                    "Free Site Survey"
                                ].map(feature => (
                                    <div key={feature} className="flex gap-3 items-center text-slate-300 font-black text-xs uppercase tracking-widest">
                                        <ShieldCheck className="w-5 h-5 text-energy-yellow" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass-panel p-12 rounded-[3.5rem] border-energy-yellow/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <h3 className="text-lg font-black mb-8 border-b border-white/10 pb-6 text-white uppercase tracking-tighter italic">
                                Direct Consultation Lines
                            </h3>
                            <p className="text-slate-400 mb-12 font-medium opacity-80">
                                Get help choosing the right generator for your specific load requirements with our expert engineering team.
                            </p>
                            <div className="space-y-8 relative z-10">
                                <a href={`tel:${COMPANY_INFO.phone[0]}`} className="flex items-center gap-5 text-xl md:text-2xl font-black text-energy-yellow hover:text-white transition-all transform hover:translate-x-2">
                                    <div className="w-12 h-12 rounded-2xl bg-energy-yellow/10 flex items-center justify-center border border-energy-yellow/20 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    {COMPANY_INFO.phone[0]}
                                </a>
                                <a href={`tel:${COMPANY_INFO.phone[1]}`} className="flex items-center gap-5 text-xl md:text-2xl font-black text-white hover:text-energy-yellow transition-all transform hover:translate-x-2">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    {COMPANY_INFO.phone[1]}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20"
                        >
                            Performance Range
                        </motion.span>
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter italic">
                             Available <span className="text-energy-yellow underline decoration-4 underline-offset-8">Capacity Ranges</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { range: "5-20 KVA", application: "Homes & Small Shops" },
                            { range: "25-125 KVA", application: "Offices & Apartments" },
                            { range: "160-320 KVA", application: "Hospitals & Malls" },
                            { range: "400-625 KVA", application: "Industrial Units" },
                            { range: "750-1010 KVA", application: "Infrastructure Projects" }
                        ].map((range, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel p-10 rounded-[3rem] border-white/5 group hover:border-energy-yellow/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-8 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                    <Zap size={32} />
                                </div>
                                <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter italic">{range.range}</h4>
                                <p className="text-slate-400 font-bold text-[8px] uppercase tracking-widest mb-8 opacity-60 italic">Ideal for: {range.application}</p>
                                <Link 
                                    href="/contact" 
                                    className="text-energy-yellow font-black uppercase tracking-widest text-[8px] flex items-center gap-3 group-hover:text-white transition-colors"
                                >
                                    GET QUOTATION <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
