"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Zap, Settings, Award, Users2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Team() {
    return (
        <div className="pt-32 min-h-screen bg-transparent">
            <section className="bg-industrial-blue py-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase italic"
                    >
                        Meet the <span className="text-energy-yellow">Experts</span>
                    </motion.h1>
                    <p className="text-base text-slate-300 max-w-2xl mx-auto opacity-80 font-medium font-medium">
                        Highly skilled engineers and dedicated power professionals driving our mission since {COMPANY_INFO.established}.
                    </p>
                </div>
            </section>

            {/* Team Composition */}
            <section className="py-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.span className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20">
                                Engineering Workforce
                            </motion.span>
                            <h2 className="text-xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">Technical <span className="text-energy-yellow underline decoration-4 underline-offset-8">Strength</span></h2>
                            <p className="text-base text-slate-400 leading-relaxed mb-6 font-medium">
                                Our greatest asset is our team of 10+ technical and service engineers. Every member is trained to handle complex diesel generator systems with military precision and care.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Service Accuracy", icon: ShieldCheck, value: "100%" },
                                    { title: "Average Response Time", icon: Zap, value: "< 4 Hours" },
                                    { title: "Team Experience", icon: Award, value: "15+ Years" },
                                ].map((stat, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center justify-between p-4 glass-panel border-white/5 rounded-2xl italic group hover:border-energy-yellow/20 transition-all duration-500"
                                    >
                                        <div className="flex items-center gap-4">
                                            <stat.icon className="text-energy-yellow w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="font-black text-[10px] uppercase tracking-widest text-white italic">{stat.title}</span>
                                        </div>
                                        <span className="text-xl font-black text-white group-hover:text-energy-yellow transition-colors">{stat.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-[4/5] glass-panel border-white/5 rounded-[4rem] p-8 flex flex-col justify-end text-white relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="mb-auto">
                                    <Users2 className="w-16 h-16 text-energy-yellow/10 group-hover:text-energy-yellow/20 group-hover:scale-110 transition-all duration-700" />
                                </div>
                                <h3 className="text-2xl font-black italic mb-4 uppercase tracking-tighter">Dedicated <span className="text-energy-yellow">Support</span></h3>
                                <p className="text-slate-400 text-sm font-medium">
                                    Our technicians work 24/7 to ensure that your business stays powered up, no matter the situation. From routine check-ups to emergency repairs, we've got you covered.
                                </p>
                                <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-white/5 rounded-tr-[3rem]"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Pillars - Professional Categories */}
            <section className="py-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10">
                        <motion.span className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20">
                            Expertise Nodes
                        </motion.span>
                        <h3 className="text-xl md:text-3xl font-black italic mb-4 tracking-tighter uppercase text-white">Our Power <span className="text-energy-yellow">Professionals</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel border-white/5 p-8 rounded-[3rem] hover:border-energy-yellow/30 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-energy-yellow/5 rounded-full blur-3xl group-hover:bg-energy-yellow/10 transition-all"></div>
                                <pillar.icon className="w-12 h-12 text-energy-yellow mb-8 group-hover:scale-110 group-hover:text-white transition-all duration-500" />
                                <h4 className="text-lg font-black mb-4 tracking-tight italic uppercase text-white">{pillar.role}</h4>
                                <p className="text-slate-400 leading-relaxed font-black text-[8px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
