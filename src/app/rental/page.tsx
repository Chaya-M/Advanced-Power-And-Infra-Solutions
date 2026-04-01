"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck, Clock, Shield, CheckCircle2, Phone, MessageCircle, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Rental() {
    return (
<<<<<<< HEAD
        <div className="pt-24 min-h-screen bg-industrial-dark">
            <section className="industrial-mesh py-24 text-white border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 text-glow">Generator Rental</h1>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
                        Flexible short-term and long-term rental solutions for construction sites, events, and emergency backup.
=======
        <div className="pt-32 min-h-screen bg-transparent">
            <section className="bg-industrial-blue py-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic"
                    >
                        Generator <span className="text-energy-yellow">Rental</span>
                    </motion.h1>
                    <p className="text-base text-slate-300 max-w-3xl mx-auto opacity-80 font-medium font-medium">
                        Flexible short-term and long-term rental solutions for construction sites, industrial events, and emergency backup infrastructure.
>>>>>>> 799de29 (updates)
                    </p>
                </div>
            </section>

            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
                        <div>
<<<<<<< HEAD
                            <h2 className="text-3xl font-bold mb-8 text-white">Why Rent With Us?</h2>
                            <div className="space-y-8">
=======
                            <div className="mb-12">
                                <motion.span className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20">
                                    Why AIP Rental?
                                </motion.span>
                                <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Why Rent <span className="text-energy-yellow underline decoration-4 underline-offset-8">With Us?</span></h2>
                            </div>
                            
                            <div className="space-y-10">
>>>>>>> 799de29 (updates)
                                {[
                                    { title: "Immediate Availability", icon: Clock },
                                    { title: "Well-Maintained Units", icon: Shield },
                                    { title: "Professional Installation", icon: Truck },
                                ].map((item, idx) => (
<<<<<<< HEAD
                                    <div key={idx} className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-energy-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-white/40">Our rental fleet is ready for deployment across Bangalore at short notice.</p>
=======
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                            <item.icon size={24} className="text-energy-yellow group-hover:text-industrial-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black uppercase tracking-widest text-[8px] mb-2 opacity-60 italic">{item.title}</h4>
                                            <p className="text-base font-bold text-slate-300 leading-tight">Our fleet is mission-ready for rapid deployment across Bangalore at a moment's notice.</p>
>>>>>>> 799de29 (updates)
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

<<<<<<< HEAD
                        <div className="glass-panel p-10 rounded-3xl border border-white/5 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">Request Rental Quote</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Duration</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none" placeholder="e.g. 15 days" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Capacity (KVA)</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none" placeholder="e.g. 100 KVA" required />
                                </div>
                                <button className="w-full bg-energy-yellow text-industrial-blue py-4 rounded-xl font-black text-lg hover:bg-yellow-500 transition-colors shadow-[0_0_20px_rgba(249,168,37,0.3)]">
=======
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-panel p-10 md:p-14 rounded-[3.5rem] border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-energy-yellow/5 rounded-bl-[4rem]"></div>
                            <h3 className="text-xl md:text-2xl font-black text-white mb-10 tracking-tighter uppercase italic">
                                Request Rental <span className="text-energy-yellow">Quote</span>
                            </h3>
                            <form className="space-y-8 relative z-10">
                                <div className="space-y-3">
                                    <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Company Name</label>
                                    <input type="text" className="w-full px-6 py-3.5 rounded-[1.2rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all placeholder:text-white/10" placeholder="e.g. Acme Corp" required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Duration</label>
                                        <input type="text" className="w-full px-6 py-3.5 rounded-[1.2rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all placeholder:text-white/10" placeholder="e.g. 15 days" required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Capacity (KVA)</label>
                                        <input type="text" className="w-full px-6 py-3.5 rounded-[1.2rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all placeholder:text-white/10" placeholder="e.g. 100 KVA" required />
                                    </div>
                                </div>
                                <button className="w-full bg-energy-yellow text-industrial-blue py-5 rounded-[1.5rem] font-black text-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-energy-yellow/20 uppercase tracking-widest italic leading-none">
>>>>>>> 799de29 (updates)
                                    Send Rental Enquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* CTA Section */}
            <section className="bg-industrial-dark py-20 text-white border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black italic mb-10 text-glow uppercase tracking-tighter">Instant Booking via WhatsApp</h2>
=======
            {/* CTA Section - Themed */}
            <section className="bg-transparent py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #25D366 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-10 tracking-tighter uppercase italic">Instant Booking via <span className="text-[#25D366]">WhatsApp</span></h2>
>>>>>>> 799de29 (updates)
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
<<<<<<< HEAD
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
=======
                            className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-[#128C7E] transition-all transform shadow-2xl shadow-green-500/20 italic tracking-tighter"
>>>>>>> 799de29 (updates)
                        >
                            <MessageCircle className="w-6 h-6 fill-white" />
                            CHAT ON WHATSAPP
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    );
}
