"use client";

import React from "react";
import { Package, ShieldCheck, Zap, ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

export default function Sales() {
    return (
        <div className="pt-24 min-h-screen bg-industrial-dark">
            <section className="industrial-mesh py-24 text-white relative overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 text-glow">Generator Sales</h1>
                    <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
                        Authorized Mahindra Powerol Dealer providing high-efficiency diesel generator sets from 5 KVA to 1010 KVA.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-white">Mahindra Powerol Authorized Dealer</h2>
                            <p className="text-lg text-white/50 mb-10 leading-relaxed">
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
                                    <div key={feature} className="flex gap-3 items-center text-white/70 font-bold">
                                        <ShieldCheck className="w-5 h-5 text-energy-yellow" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-industrial-blue/20 border border-white/5 p-12 rounded-[3rem] text-white backdrop-blur-xl">
                            <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Speak to a Sales Specialist</h3>
                            <p className="text-white/40 mb-10 italic">
                                Get help choosing the right generator for your specific load requirements.
                            </p>
                            <div className="space-y-6">
                                <a href={`tel:${COMPANY_INFO.phone[0]}`} className="flex items-center gap-4 text-2xl font-black text-energy-yellow hover:text-white transition-colors">
                                    <Phone className="w-8 h-8" />
                                    {COMPANY_INFO.phone[0]}
                                </a>
                                <a href={`tel:${COMPANY_INFO.phone[1]}`} className="flex items-center gap-4 text-2xl font-black hover:text-energy-yellow transition-colors">
                                    <Phone className="w-8 h-8" />
                                    {COMPANY_INFO.phone[1]}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid Placeholder */}
            <section className="py-24 bg-industrial-blue/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-extrabold text-white mb-16 tracking-tight">Available Capacity Ranges</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { range: "5-20 KVA", application: "Homes & Small Shops" },
                            { range: "25-125 KVA", application: "Offices & Apartments" },
                            { range: "160-320 KVA", application: "Hospitals & Malls" },
                            { range: "400-625 KVA", application: "Industrial Units" },
                            { range: "750-1010 KVA", application: "Infrastructure Projects" }
                        ].map((range, idx) => (
                            <div key={idx} className="bg-industrial-dark p-8 rounded-2xl shadow-sm border border-white/5 group hover:border-energy-yellow/30 hover:shadow-2xl transition-all">
                                <Zap className="w-10 h-10 text-energy-yellow mb-6" />
                                <h4 className="text-2xl font-black text-white mb-2">{range.range}</h4>
                                <p className="text-white/40 mb-6">Ideal for: {range.application}</p>
                                <Link href="/contact" className="text-energy-yellow/70 font-bold flex items-center gap-2 group-hover:text-energy-yellow">
                                    Get Pricing <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
