"use client";

import React from "react";
import { Package, ShieldCheck, Zap, ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

export default function Sales() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-8">Generator Sales</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Authorized Mahindra Powerol Dealer providing high-efficiency diesel generator sets from 5 KVA to 1010 KVA.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-industrial-blue">Mahindra Powerol Authorized Dealer</h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
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
                                    <div key={feature} className="flex gap-3 items-center text-slate-700 font-bold">
                                        <ShieldCheck className="w-5 h-5 text-energy-yellow" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-industrial-blue p-12 rounded-[3rem] text-white">
                            <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Speak to a Sales Specialist</h3>
                            <p className="text-slate-300 mb-10">
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
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-extrabold text-industrial-blue mb-16">Available Capacity Ranges</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { range: "5-20 KVA", application: "Homes & Small Shops" },
                            { range: "25-125 KVA", application: "Offices & Apartments" },
                            { range: "160-320 KVA", application: "Hospitals & Malls" },
                            { range: "400-625 KVA", application: "Industrial Units" },
                            { range: "750-1010 KVA", application: "Infrastructure Projects" }
                        ].map((range, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-xl transition-all">
                                <Zap className="w-10 h-10 text-energy-yellow mb-6" />
                                <h4 className="text-2xl font-black text-industrial-blue mb-2">{range.range}</h4>
                                <p className="text-slate-500 mb-6">Ideal for: {range.application}</p>
                                <Link href="/contact" className="text-industrial-blue font-bold flex items-center gap-2 group-hover:text-energy-yellow">
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
