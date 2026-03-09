"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Zap, Settings, Award, Users2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Team() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="bg-industrial-blue py-24 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter"
                    >
                        Meet the <span className="text-energy-yellow">Experts</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Highly skilled engineers and dedicated professionals driving our mission since {COMPANY_INFO.established}.
                    </p>
                </div>
            </section>

            {/* Team Composition */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-industrial-blue mb-8 uppercase tracking-widest">Technical Strength</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                Our greatest asset is our team of 10+ technical and service engineers. Every member is trained to handle complex diesel generator systems with precision and care.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Service Accuracy", icon: ShieldCheck, value: "100%" },
                                    { title: "Average Response Time", icon: Zap, value: "< 4 Hours" },
                                    { title: "Team Experience", icon: Award, value: "15+ Years" },
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 italic">
                                        <div className="flex items-center gap-4">
                                            <stat.icon className="text-energy-yellow w-6 h-6" />
                                            <span className="font-bold text-industrial-blue">{stat.title}</span>
                                        </div>
                                        <span className="text-2xl font-black text-industrial-blue">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-industrial-blue rounded-[3rem] p-12 flex flex-col justify-end text-white">
                                <div className="mb-auto">
                                    <Users2 className="w-20 h-20 text-energy-yellow opacity-20" />
                                </div>
                                <h3 className="text-3xl font-black italic mb-4">Dedicated Support</h3>
                                <p className="text-slate-300">
                                    Our technicians work 24/7 to ensure that your business stays powered up, no matter the situation. From routine check-ups to emergency repairs, we've got you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Pillars */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h3 className="text-3xl font-black italic mb-4 tracking-tighter uppercase">Our Professionals</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                role: "Leadership & Strategy",
                                desc: "Experienced managers focused on long-term client relationships and operational excellence.",
                                icon: Users
                            },
                            {
                                role: "Field Engineers",
                                desc: "On-site experts ensuring perfect installation, commissioning, and preventive maintenance.",
                                icon: Settings
                            },
                            {
                                role: "Response Team",
                                desc: "Critical support technicians available 24/7 for emergency breakdown services.",
                                icon: Zap
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                                <pillar.icon className="w-12 h-12 text-energy-yellow mb-8 group-hover:scale-110 transition-transform" />
                                <h4 className="text-2xl font-black mb-4 tracking-tight italic">{pillar.role}</h4>
                                <p className="text-slate-400 leading-relaxed font-bold text-sm uppercase tracking-widest">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
