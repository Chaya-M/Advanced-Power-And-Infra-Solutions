"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck, Clock, Shield, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Rental() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="bg-industrial-blue py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-8">Generator Rental</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Flexible short-term and long-term rental solutions for construction sites, events, and emergency backup.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-industrial-blue">Why Rent With Us?</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Immediate Availability", icon: Clock },
                                    { title: "Well-Maintained Units", icon: Shield },
                                    { title: "Professional Installation", icon: Truck },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="w-12 h-12 bg-energy-yellow/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-industrial-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-industrial-blue mb-2">{item.title}</h4>
                                            <p className="text-slate-600">Our rental fleet is ready for deployment across Bangalore at short notice.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-industrial-blue">Request Rental Quote</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-industrial-blue outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Duration (Days/Months)</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-industrial-blue outline-none" placeholder="e.g. 15 days" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Required Capacity (KVA)</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-industrial-blue outline-none" placeholder="e.g. 100 KVA" required />
                                </div>
                                <button className="w-full bg-energy-yellow text-industrial-blue py-4 rounded-xl font-black text-lg hover:bg-yellow-500 transition-colors">
                                    Send Rental Enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10">Instant Booking via WhatsApp</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#128C7E] transition-all transform hover:scale-105"
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
