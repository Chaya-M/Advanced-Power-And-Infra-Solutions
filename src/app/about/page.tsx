"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, Award, Zap, Settings } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

import founderImg from "./founder.jpeg";
import teamImg from "./team.jpeg";

export default function About() {
    return (
        <div className="pt-32 min-h-screen">
            {/* Page Header */}
            <section className="bg-industrial-blue py-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12 text-energy-yellow" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black mb-2"
                    >
                        About APIS Solutions
                    </motion.h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto opacity-80">
                        {COMPANY_INFO.tagline}
                    </p>
                </div>
            </section>

            {/* Origin Story - Modernized Technical Layout */}
            <section className="py-10 relative overflow-hidden bg-transparent">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Engineering Legacy</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
                                Powering Bangalore <br />
                                <span className="text-energy-yellow italic underline decoration-4 underline-offset-8">Since {COMPANY_INFO.established}</span>
                            </h3>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                                <p>
                                    Advanced Power And Infra Solutions was established in 2009 with a single mission: to provide <span className="text-white font-bold">reliable and efficient backup power</span> solutions to the growing industrial infrastructure of Bangalore.
                                </p>
                                <p>
                                    As dealers of <span className="text-white font-bold">Cummins, Tata, KOEL, Caterpillar, TMTL, and Ashok Leyland</span>, we have grown from a small service team to a leading provider of mission-critical power solutions, serving over 450+ high-profile clients.
                                </p>
                                <p>
                                    Our expertise spans the entire lifecycle of a diesel generator—from elite sales and installation to high-performance maintenance and strategic buyback services.
                                </p>
                            </div>
                            <div className="mt-12 flex flex-wrap gap-12">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black text-white italic">15+</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Years of Excellence</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black text-energy-yellow italic">450+</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Strategic Clients</span>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-[4/3] glass-panel rounded-[2rem] border-white/5 relative overflow-hidden flex items-center justify-center group"
                            >
                                <div className="absolute inset-0 bg-white opacity-90"></div>
                                <div className="relative z-10 w-full h-full p-4">
                                    <Image 
                                        src="/images/partners.png"
                                        alt="Our Trusted Brands"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </motion.div>
                            
                            {/* Decorative blueprint accent */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-energy-yellow/20 rounded-br-[4rem] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-10 bg-industrial-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-energy-yellow/5 skew-x-12 translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.2em] text-sm mb-4">Meet the Founder</h2>
                            <h3 className="text-3xl md:text-4xl font-black mb-6 italic">M S Murthy</h3>
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <Award className="w-8 h-8 text-energy-yellow shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-white mb-1">Academic Excellence</p>
                                        <p>B.E – Mechanical Engineering Graduate from Bangalore University.</p>
                                    </div>
                                </div>
                                <p>
                                    With over <span className="text-white font-bold text-xl">15 years</span> of deep technical experience in marketing Diesel Generator Sets, M S Murthy has built a career defined by excellence and expertise.
                                </p>
                                <p>
                                    He started his career as an Assistant Marketing Manager at <span className="text-white font-bold">M/s Professional Diesel Power Engineers (Mahindra’s OEM)</span> and continued to excel in key leadership roles at industry giants like <span className="text-white font-bold">M/s GMMCO LIMITED (CATERPILLAR Dealer)</span> and <span className="text-white font-bold">M/s POWERICA LIMITED (CUMMINS OEM)</span>.
                                </p>
                                <div className="p-8 bg-energy-yellow rounded-3xl mt-12">
                                    <p className="text-industrial-blue font-black text-2xl leading-tight">
                                        "Founded APIS Solutions in 2009 to provide a Single Point of Contact for customers looking to escape the long chain of service routes."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative group"
                            >
                                <Image 
                                    src={founderImg}
                                    alt="M S Murthy - Founder of APIS Solutions"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="h-2 w-20 bg-energy-yellow mb-4"></div>
                                    <p className="text-3xl font-black italic text-white">The Visionary<br />Behind APIS</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team - Redesigned Technical Expert Roster */}
            <section className="py-12 bg-transparent relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="mb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-energy-yellow/10 border border-energy-yellow/20 text-energy-yellow text-[8px] font-black uppercase tracking-[0.4em] mb-6"
                        >
                            <Users size={10} className="animate-pulse" />
                            Technical Intelligence
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
                            Our Elite <span className="text-energy-yellow italic underline decoration-8 underline-offset-[12px]">Team</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-medium text-sm">
                            Combining decades of field experience with advanced engineering precision.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { role: "Leadership", desc: "Visionary management guiding our growth since 2009.", icon: Award },
                            { role: "Technical Lead", desc: "Expert in DG set installation and commissioning.", icon: Settings },
                            { role: "Service Engineers", desc: "Quick response team for routine and emergency maintenance.", icon: Zap },
                            { role: "Support Staff", desc: "Ensuring smooth operations and client communications.", icon: Shield }
                        ].map((team, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-full"
                            >
                                <div className="glass-panel p-6 rounded-[2.5rem] border-white/5 group-hover:border-energy-yellow/30 transition-all duration-500 h-full flex flex-col items-start text-left overflow-hidden relative">
                                    {/* Blueprint background pattern on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #F9A825 1px, transparent 0)`, backgroundSize: "10px 10px" }}></div>
                                    
                                    {/* Scanline animation */}
                                    <div className="absolute inset-x-0 top-0 h-[1px] bg-energy-yellow/50 blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-[scanline_3s_linear_infinite] pointer-events-none"></div>

                                    <div className="w-12 h-12 rounded-xl bg-white/5 text-energy-yellow flex items-center justify-center mb-6 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                        <team.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-black text-white mb-3 uppercase tracking-tighter italic">{team.role}</h4>
                                    <p className="text-slate-400 text-xs font-medium leading-relaxed group-hover:text-white transition-colors duration-500">{team.desc}</p>
                                    
                                    {/* Corner accents */}
                                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-40 transition-opacity">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 bg-energy-yellow rounded-full"></div>
                                            <div className="w-1 h-1 bg-energy-yellow rounded-full"></div>
                                            <div className="w-1 h-1 bg-energy-yellow rounded-full opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scanline {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(300px); }
                    }
                `}</style>


                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[16/7] md:aspect-[21/7] rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl relative group">
                            <Image 
                                src={teamImg}
                                alt="APIS Solutions Team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/40 via-transparent to-transparent"></div>
                        </div>
                        {/* Decorative HUD accent */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-energy-yellow/30 rounded-bl-[2rem] pointer-events-none"></div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-energy-yellow/30 rounded-tr-[2rem] pointer-events-none"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
