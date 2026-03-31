"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck, Clock, Shield, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Rental() {
    return (
        <div className="pt-24 min-h-screen bg-industrial-dark">
            <section className="industrial-mesh py-24 text-white border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 text-glow">Generator Rental</h1>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
                        Flexible short-term and long-term rental solutions for construction sites, events, and emergency backup.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-white">Why Rent With Us?</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Immediate Availability", icon: Clock },
                                    { title: "Well-Maintained Units", icon: Shield },
                                    { title: "Professional Installation", icon: Truck },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-energy-yellow" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-white/40">Our rental fleet is ready for deployment across Bangalore at short notice.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

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
                                    Send Rental Enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-industrial-dark py-20 text-white border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black italic mb-10 text-glow uppercase tracking-tighter">Instant Booking via WhatsApp</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
                        >
                            <MessageCircle className="w-6 h-6 fill-white" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
