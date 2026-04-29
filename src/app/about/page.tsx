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
        <div className="pt-20 min-h-screen bg-black">
            {/* Page Header - Pure Black */}
            <section className="bg-black pt-10 pb-6 text-white relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12 text-energy-yellow" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase"
                    >
                        About <span className="text-energy-yellow">APIS Solutions</span>
                    </motion.h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium tracking-wide">
                        {COMPANY_INFO.tagline}
                    </p>
                </div>
            </section>

            {/* Origin Story - Light Theme */}
            <section className="py-12 relative overflow-hidden !bg-[#F8F9F4] border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="!text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Engineering Legacy</h2>
                            <h3 className="text-3xl md:text-5xl font-black !text-[#1B4332] tracking-tighter uppercase mb-4 leading-none">
                                Powering Bangalore <br />
                                <span className="text-red-600 italic underline decoration-4 underline-offset-8">Since {COMPANY_INFO.established}</span>
                            </h3>
                            <div className="space-y-4 !text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Advanced Power And Infra Solutions was established in 2009 with a single mission: to provide <span className="!text-[#1B4332] font-bold">reliable and efficient backup power</span> solutions to the growing industrial infrastructure of Bangalore.
                                </p>
                                <p>
                                    As dealers of <span className="!text-[#1B4332] font-bold">Cummins, Tata, KOEL, Caterpillar, TMTL, and Ashok Leyland</span>, we have grown from a small service team to a leading provider of mission-critical power solutions, serving over 450+ high-profile clients.
                                </p>
                                <p>
                                    Our expertise spans the entire lifecycle of a diesel generator—from elite sales and installation to high-performance maintenance and strategic buyback services.
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-6">
                                <div className="flex flex-col bg-industrial-blue p-6 rounded-3xl shadow-2xl border border-white/5">
                                    <span className="text-5xl font-black text-white italic">15+</span>
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-2">Years of Excellence</span>
                                </div>
                                <div className="flex flex-col bg-industrial-blue p-6 rounded-3xl shadow-2xl border border-white/5">
                                    <span className="text-5xl font-black text-white italic">450+</span>
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-2">Strategic Clients</span>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-[4/3] bg-industrial-blue rounded-none border border-white/5 shadow-2xl relative overflow-hidden flex items-center justify-center group"
                            >
                                <div className="relative z-10 w-full h-full p-8">
                                    <Image 
                                        src="/images/partners.png"
                                        alt="Our Trusted Brands"
                                        fill
                                        className="object-contain p-8 grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-red-600/20 rounded-br-[4rem] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founder - Pure Black */}
            <section className="py-12 bg-black text-white overflow-hidden relative border-y border-white/5">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-energy-yellow/5 skew-x-12 translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.2em] text-sm mb-4">Meet the Founder</h2>
                            <h3 className="text-3xl md:text-5xl font-black mb-4 italic tracking-tighter">M S MURTHY</h3>
                            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-medium">
                                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-none border border-white/10">
                                    <Award className="w-8 h-8 text-energy-yellow shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-white mb-1 text-xl">Academic Excellence</p>
                                        <p className="text-base opacity-70">B.E – Mechanical Engineering Graduate from Bangalore University.</p>
                                    </div>
                                </div>
                                <p>
                                    With over <span className="text-white font-bold text-xl underline decoration-energy-yellow underline-offset-4">15 years</span> of deep technical experience in marketing Diesel Generator Sets, M S Murthy has built a career defined by excellence and expertise.
                                </p>
                                <p>
                                    He started his career as an Assistant Marketing Manager at <span className="text-white font-bold">M/s Professional Diesel Power Engineers (Mahindra’s OEM)</span> and continued to excel in key leadership roles at industry giants like <span className="text-white font-bold">M/s GMMCO LIMITED (CATERPILLAR Dealer)</span> and <span className="text-white font-bold">M/s POWERICA LIMITED (CUMMINS OEM)</span>.
                                </p>
                                <div className="p-8 bg-energy-yellow rounded-none mt-6 shadow-[0_20px_60px_rgba(249,168,37,0.3)]">
                                    <p className="!text-black font-black text-2xl leading-tight uppercase tracking-tight">
                                        "Founded APIS Solutions in 2009 to provide a Single Point of Contact for customers looking to escape the long chain of service routes."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-[4/5] rounded-none overflow-hidden border-8 border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative group"
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
                                    <p className="text-3xl font-black italic text-white leading-tight">The Visionary<br />Behind APIS</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team - Light Theme */}
            <section className="py-12 !bg-[#F8F9F4] relative overflow-hidden border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6"
                        >
                            <Users size={12} className="animate-pulse" />
                            Technical Intelligence
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black !text-[#1B4332] tracking-tighter uppercase mb-6 leading-none">
                            Our Elite <span className="text-red-600 italic underline decoration-8 underline-offset-[12px]">Team</span>
                        </h2>
                        <p className="text-[#1B4332] max-w-2xl mx-auto font-bold text-base uppercase tracking-widest">
                            Combining decades of field experience with advanced engineering precision.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                <div className="bg-black p-8 rounded-none border-2 border-[#1B4332] group-hover:border-red-600/50 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden relative shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                    <div className="w-16 h-16 rounded-none bg-white/5 text-red-600 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                        <team.icon size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter italic">{team.role}</h4>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-500">{team.desc}</p>
                                    
                                    <div className="mt-8 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-50"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-screen-2xl mx-auto mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[16/7] md:aspect-[21/7] rounded-none overflow-hidden border-[12px] border-white shadow-2xl relative group">
                                <Image 
                                    src={teamImg}
                                    alt="APIS Solutions Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-red-600/30 rounded-bl-[3rem] pointer-events-none"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-4 border-t-4 border-red-600/30 rounded-tr-[3rem] pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
