"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <section className="bg-industrial-blue py-20 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-black">Get in Touch</h1>
                <p className="text-slate-400 mt-4">We're here to solve your power infrastructure needs.</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-industrial-blue mb-10">Contact Information</h2>
                        <div className="space-y-12">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-energy-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <MapPin className="w-7 h-7 text-industrial-blue group-hover:text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-industrial-blue mb-2 text-wrap">Head Office Address</h4>
                                    <p className="text-slate-600 text-lg">{COMPANY_INFO.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-energy-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <Phone className="w-7 h-7 text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-industrial-blue mb-2">Phone Numbers</h4>
                                    <div className="flex flex-col text-slate-600 text-lg">
                                        {COMPANY_INFO.phone.map(p => (
                                            <a key={p} href={`tel:${p}`} className="hover:text-industrial-blue transition-colors font-semibold">{p}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-energy-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <Mail className="w-7 h-7 text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-industrial-blue mb-2">Email Address</h4>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-600 text-lg hover:text-industrial-blue transition-colors font-semibold break-all">
                                        {COMPANY_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-energy-yellow/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-energy-yellow transition-colors">
                                    <Clock className="w-7 h-7 text-industrial-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-industrial-blue mb-2">Operation Hours</h4>
                                    <p className="text-slate-600 text-lg">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-slate-500 font-bold mt-2">24/7 Breakdown Support</p>
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

                    {/* Contact Form */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
                        <h3 className="text-3xl font-black text-industrial-blue mb-10">Request a Service</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Your Name</label>
                                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-energy-yellow outline-none transition-all" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Phone Number</label>
                                    <input type="tel" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-energy-yellow outline-none transition-all" placeholder="+91 98765 43210" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Service Required</label>
                                <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-energy-yellow outline-none transition-all">
                                    <option>Generator Sales</option>
                                    <option>Generator Rental</option>
                                    <option>AMC / Maintenance</option>
                                    <option>Generator Repair</option>
                                    <option>Used Buyback</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-3">Message</label>
                                <textarea className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-energy-yellow outline-none transition-all min-h-[150px]" placeholder="Tell us about your requirements..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-industrial-blue text-white py-5 rounded-xl font-black text-xl hover:bg-industrial-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-industrial-blue/20">
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
