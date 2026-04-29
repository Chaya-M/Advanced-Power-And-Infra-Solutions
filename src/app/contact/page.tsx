"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="pt-24 md:pt-32 min-h-screen bg-transparent">
            {/* Page Header */}
            <section className="bg-black py-8 text-white relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-4xl font-black mb-4 tracking-tighter uppercase text-white"
                    >
                        GET IN TOUCH
                    </motion.h1>
                    <p className="text-base text-white max-w-2xl mx-auto font-medium">
                        Your mission-critical power infrastructure starts with a single conversation.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 relative z-10">
                {/* Blueprint Background Accent */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
                    {/* Contact Info */}
                    <div>
                        <div className="mb-8">
                            <motion.span
                                className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20"
                            >
                                Direct Channels
                            </motion.span>
                            <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic">
                                Contact <span className="text-energy-yellow underline decoration-4 underline-offset-8">Information</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-6">
                            {[
                                { title: "Head Office Address", icon: MapPin, value: COMPANY_INFO.address, type: 'text' },
                                { title: "Phone Numbers", icon: Phone, value: COMPANY_INFO.phone, type: 'phone' },
                                { title: "Email Address", icon: Mail, value: COMPANY_INFO.email, type: 'email' },
                                { title: "Operation Hours", icon: Clock, value: "Mon - Sat: 9:00 AM - 7:00 PM", subValue: "24/7 Breakdown Support", type: 'text' }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                        <item.icon size={26} className="text-energy-yellow group-hover:text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-widest text-[8px] mb-2 opacity-60 italic">{item.title}</h4>
                                        {item.type === 'phone' ? (
                                            <div className="flex flex-col">
                                                {(item.value as string[]).map(p => (
                                                    <a key={p} href={`tel:${p}`} className="text-lg font-black text-white hover:text-energy-yellow transition-colors tracking-tighter italic">{p}</a>
                                                ))}
                                            </div>
                                        ) : item.type === 'email' ? (
                                            <a href={`mailto:${item.value}`} className="text-lg font-black text-white hover:text-energy-yellow transition-colors tracking-tighter italic break-all">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div className="space-y-1">
                                                <p className="text-base font-bold text-slate-300 leading-tight">{item.value}</p>
                                                {item.subValue && <p className="text-energy-yellow font-black text-[8px] uppercase tracking-[0.2em]">{item.subValue}</p>}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-[1.2rem] md:rounded-[1.5rem] font-black text-base md:text-lg hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-2xl shadow-green-500/20 italic tracking-tighter leading-none"
                            >
                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                                QUICK ENQUIRY ON WHATSAPP
                            </motion.a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-panel p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-energy-yellow/5 rounded-bl-[4rem]"></div>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-8 tracking-tighter uppercase italic">
                            Request a <span className="text-energy-yellow">Service</span>
                        </h3>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Full Name</label>
                                    <input type="text" className="w-full px-6 py-3.5 rounded-[1.2rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all placeholder:text-white/10" placeholder="e.g. John Doe" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-3.5 rounded-[1.2rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all placeholder:text-white/10" placeholder="+91 98765 43210" required />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Service Required</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-3.5 rounded-[1.2rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all appearance-none">
                                        <option className="bg-[#061621]">Generator Sales</option>
                                        <option className="bg-[#061621]">Generator Rental</option>
                                        <option className="bg-[#061621]">AMC / Maintenance</option>
                                        <option className="bg-[#061621]">Generator Repair</option>
                                        <option className="bg-[#061621]">Used Buyback</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-energy-yellow">
                                        <Zap size={14} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Your Message</label>
                                <textarea className="w-full px-6 py-4 rounded-[1.5rem] bg-white/5 border border-white/10 text-sm text-white focus:border-energy-yellow/50 focus:ring-4 focus:ring-energy-yellow/5 outline-none transition-all min-h-[140px] placeholder:text-white/10 resize-none font-medium" placeholder="Briefly describe your power requirements..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#1B4332] text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-red-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-[#1B4332]/20 uppercase tracking-widest italic leading-none">
                                Submit Enquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section - Modern Technical Style */}
            <section className="h-[350px] w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-industrial-dark grayscale contrast-125 opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
                    {/* Placeholder for map - in real app this would be an iframe */}
                    <div className="w-full h-full bg-[#0a1a25] flex items-center justify-center">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "30px 30px" }}></div>
                        <MapPin className="w-32 h-32 text-energy-yellow/20 italic" />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-12 flex justify-center">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="glass-panel px-6 py-5 md:px-8 md:py-6 rounded-[1.5rem] md:rounded-[2.5rem] border-white/10 text-center shadow-2xl backdrop-blur-2xl mx-4"
                    >
                        <div className="w-10 h-10 bg-energy-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(249,168,37,0.5)]">
                            <MapPin className="w-5 h-5 text-industrial-blue" />
                        </div>
                        <h4 className="text-lg font-black text-white italic tracking-tighter uppercase mb-2">Visit Our Head Office</h4>
                        <p className="text-sm text-slate-400 font-medium mb-6 italic tracking-tight max-w-[280px] mx-auto">
                            {COMPANY_INFO.address}
                        </p>
                        <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            className="text-energy-yellow font-black uppercase tracking-[0.2em] text-[8px] border-b-2 border-energy-yellow/20 hover:border-energy-yellow transition-all pb-1 inline-block"
                        >
                            Get Digital Directions
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
