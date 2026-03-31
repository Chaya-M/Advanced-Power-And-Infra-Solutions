"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="pt-24 min-h-screen bg-industrial-dark text-white">
            <section className="industrial-mesh py-20 text-white text-center border-b border-white/5">
                <h1 className="text-4xl md:text-5xl font-black text-glow">Get in Touch</h1>
                <p className="text-white/50 mt-4 italic">We're here to solve your power infrastructure needs.</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight uppercase">Contact Information</h2>
                        <div className="space-y-12">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <MapPin className="w-7 h-7 text-energy-yellow group-hover:text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 text-wrap">Head Office Address</h4>
                                    <p className="text-white/50 text-lg leading-relaxed">{COMPANY_INFO.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <Phone className="w-7 h-7 text-energy-yellow group-hover:text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Phone Numbers</h4>
                                    <div className="flex flex-col text-white/50 text-lg">
                                        {COMPANY_INFO.phone.map(p => (
                                            <a key={p} href={`tel:${p}`} className="hover:text-energy-yellow transition-colors font-semibold">{p}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-energy-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <Mail className="w-7 h-7 text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Email Address</h4>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/50 text-lg hover:text-energy-yellow transition-colors font-semibold break-all">
                                        {COMPANY_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-energy-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <Clock className="w-7 h-7 text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Operation Hours</h4>
                                    <p className="text-white/50 text-lg">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-energy-yellow font-black mt-2 text-glow">24/7 Breakdown Support</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <a
                                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl"
                            >
                                <MessageCircle className="w-6 h-6 fill-white" />
                                Quick Enquiry on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="glass-panel p-12 rounded-[2.5rem] shadow-2xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-energy-yellow/5 skew-x-12 translate-x-12 -translate-y-12"></div>
                        <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">Request a Service</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Your Name</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none transition-all" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Phone Number</label>
                                    <input type="tel" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none transition-all" placeholder="+91 98765 43210" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Service Required</label>
                                <select className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none transition-all">
                                    <option className="bg-industrial-dark">Generator Sales</option>
                                    <option className="bg-industrial-dark">Generator Rental</option>
                                    <option className="bg-industrial-dark">AMC / Maintenance</option>
                                    <option className="bg-industrial-dark">Generator Repair</option>
                                    <option className="bg-industrial-dark">Used Buyback</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Message</label>
                                <textarea className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-energy-yellow outline-none transition-all min-h-[150px]" placeholder="Tell us about your requirements..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-energy-yellow text-industrial-blue py-5 rounded-xl font-black text-xl hover:bg-yellow-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-energy-yellow/10">
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section Placeholder */}
            <section className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-white">
                        <MapPin className="w-12 h-12 text-industrial-blue mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-industrial-blue">Visit Our Head Office</h4>
                        <p className="text-slate-600 mt-2">Kengeri, Bangalore - 560056</p>
                        <a href="https://maps.google.com" target="_blank" className="mt-4 inline-block text-industrial-blue font-bold border-b-2 border-industrial-blue">Get Directions</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
