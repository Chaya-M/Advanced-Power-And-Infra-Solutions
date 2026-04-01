"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, CheckCircle2, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function About() {
    return (
<<<<<<< HEAD
        <div className="pt-24 min-h-screen bg-industrial-dark text-white">
            {/* Page Header */}
            <section className="industrial-mesh py-20 text-white relative overflow-hidden border-b border-white/5">
=======
        <div className="pt-32 min-h-screen">
            {/* Page Header */}
            <section className="bg-industrial-blue py-8 text-white relative overflow-hidden">
>>>>>>> 799de29 (updates)
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12 text-energy-yellow" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                        className="text-4xl md:text-6xl font-black mb-6 text-glow"
                    >
                        About AIP Solutions
                    </motion.h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto">
=======
                        className="text-3xl md:text-5xl font-black mb-2"
                    >
                        About AIP Solutions
                    </motion.h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto opacity-80">
>>>>>>> 799de29 (updates)
                        {COMPANY_INFO.tagline}
                    </p>
                </div>
            </section>

            {/* Origin Story - Modernized Technical Layout */}
            <section className="py-16 relative overflow-hidden bg-transparent">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
<<<<<<< HEAD
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.2em] text-sm mb-4">Our History</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                                Powering Bangalore Since {COMPANY_INFO.established}
                            </h3>
                            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
=======
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Engineering Legacy</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
                                Powering Bangalore <br />
                                <span className="text-energy-yellow italic underline decoration-4 underline-offset-8">Since {COMPANY_INFO.established}</span>
                            </h3>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
>>>>>>> 799de29 (updates)
                                <p>
                                    Advanced Power And Infra Solutions was established in 2009 with a single mission: to provide <span className="text-white font-bold">reliable and efficient backup power</span> solutions to the growing industrial infrastructure of Bangalore.
                                </p>
                                <p>
                                    As an authorized dealer for <span className="text-white font-bold">Mahindra Powerol Diesel Generator Sets</span>, we have grown from a small service team to a leading provider of mission-critical power solutions, serving over 450+ high-profile clients.
                                </p>
                                <p>
                                    Our expertise spans the entire lifecycle of a diesel generator—from elite sales and installation to high-performance maintenance and strategic buyback services.
                                </p>
                            </div>
                            <div className="mt-12 flex flex-wrap gap-12">
                                <div className="flex flex-col">
<<<<<<< HEAD
                                    <span className="text-4xl font-black text-white">15+</span>
                                    <span className="text-sm font-bold text-white/30 uppercase tracking-widest">Years Experience</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-white">450+</span>
                                    <span className="text-sm font-bold text-white/30 uppercase tracking-widest">Clients Served</span>
=======
                                    <span className="text-5xl font-black text-white italic">15+</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Years of Excellence</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black text-energy-yellow italic">450+</span>
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Strategic Clients</span>
>>>>>>> 799de29 (updates)
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-square glass-panel rounded-[4rem] border-white/5 relative overflow-hidden flex items-center justify-center group"
                            >
                                <div className="absolute inset-0 bg-energy-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="text-center relative z-10">
                                    <motion.div
<<<<<<< HEAD
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="p-8 glass-panel shadow-2xl rounded-2xl border border-white/5"
                                    >
                                        <Shield className="w-16 h-16 text-energy-yellow mx-auto mb-4" />
                                        <h4 className="text-xl font-bold text-white">Authorized Dealer</h4>
                                        <p className="text-white/40 text-sm">Mahindra Powerol</p>
=======
                                        className="p-10 bg-white/5 shadow-2xl rounded-[3rem] border border-white/10 backdrop-blur-3xl group-hover:border-energy-yellow/30 transition-all duration-700"
                                    >
                                        <Shield className="w-20 h-20 text-energy-yellow mx-auto mb-6 drop-shadow-[0_0_15px_rgba(249,168,37,0.4)]" />
                                        <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Authorized Dealer</h4>
                                        <p className="text-energy-yellow font-bold text-sm tracking-widest uppercase mt-2">Mahindra Powerol</p>
>>>>>>> 799de29 (updates)
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                            {/* Decorative blueprint accent */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-energy-yellow/20 rounded-br-[4rem] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-16 bg-industrial-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-energy-yellow/5 skew-x-12 translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.2em] text-sm mb-4">Meet the Founder</h2>
<<<<<<< HEAD
                            <h3 className="text-4xl md:text-5xl font-black mb-8 italic">Mr. Murthy</h3>
                            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
=======
                            <h3 className="text-3xl md:text-4xl font-black mb-6 italic">Mr. Murthy</h3>
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
>>>>>>> 799de29 (updates)
                                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <Award className="w-8 h-8 text-energy-yellow shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-white mb-1">Academic Excellence</p>
                                        <p>B.E – Mechanical Engineering Graduate from Bangalore University (2000 Batch).</p>
                                    </div>
                                </div>
                                <p>
                                    With over <span className="text-white font-bold text-xl">15 years</span> of deep technical experience in marketing Diesel Generator Sets, Mr. Murthy has built a career defined by excellence and expertise.
                                </p>
                                <p>
                                    He started his career as an Assistant Marketing Manager at <span className="text-white font-bold">M/s Professional Diesel Power Engineers (Mahindra’s OEM)</span> and continued to excel in key leadership roles at industry giants like <span className="text-white font-bold">M/s GMMCO LIMITED (CATERPILLAR Dealer)</span> and <span className="text-white font-bold">M/s POWERICA LIMITED (CUMMINS OEM)</span>.
                                </p>
                                <div className="p-8 bg-energy-yellow rounded-3xl mt-12">
                                    <p className="text-industrial-blue font-black text-2xl leading-tight">
                                        "Founded AIP Solutions in 2009 to provide a Single Point of Contact for customers looking to escape the long chain of service routes."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-[4/5] bg-white/5 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative"
                            >
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <Users className="w-32 h-32 text-energy-yellow" />
                                </div>
                                {/* Placeholder for founder image if available */}
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="h-2 w-20 bg-energy-yellow mb-4"></div>
                                    <p className="text-3xl font-black italic">The Visionary<br />Behind AIP</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* Core Values */}
            <section className="py-24 bg-industrial-blue/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">Our Core Values</h3>
=======
            {/* Core Values - Simplified HUD Design */}
            <section className="py-16 bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="mb-12">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20"
                        >
                            Our Foundation
                        </motion.span>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">
                            Our Core <span className="text-energy-yellow italic underline decoration-4 underline-offset-8">Values</span>
                        </h2>
>>>>>>> 799de29 (updates)
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Reliability", desc: "We deliver power on time, ensuring your operations never stop.", icon: Shield },
                            { title: "Excellence", desc: "15+ years of technical expertise in every generator we service.", icon: Award },
                            { title: "Customer First", desc: "24/7 support and customized solutions for every client.", icon: Target }
                        ].map((value, idx) => (
<<<<<<< HEAD
                            <div key={idx} className="bg-industrial-dark p-10 rounded-2xl shadow-sm border border-white/5 group hover:border-energy-yellow/30 transition-all">
                                <value.icon className="w-12 h-12 text-energy-yellow mb-6" />
                                <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                                <p className="text-white/50 leading-relaxed">{value.desc}</p>
                            </div>
=======
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel p-10 rounded-[3rem] border-white/5 hover:border-energy-yellow/30 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-8 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                    <value.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{value.title}</h4>
                                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-white transition-colors duration-500">{value.desc}</p>
                            </motion.div>
>>>>>>> 799de29 (updates)
                        ))}
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* Team */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.2em] text-sm mb-4">Our Team</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Technical Expertise You Can Trust</h3>
                        </div>
                        <p className="md:w-1/3 text-lg text-white/50 mt-6 md:mt-0 italic underline decoration-energy-yellow/30 underline-offset-8">
                            Our team consists of 10 highly skilled technical and service engineers dedicated to providing top-notch maintenance and repair services.
                        </p>
=======
            {/* Team - Simplified HUD Design */}
            <section className="py-16 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-12">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block border border-energy-yellow/20"
                        >
                            The Experts Behind AIP
                        </motion.span>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">
                            Our Elite <span className="text-energy-yellow italic underline decoration-4 underline-offset-8">Team</span>
                        </h2>
>>>>>>> 799de29 (updates)
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { role: "Leadership", desc: "Visionary management guiding our growth since 2009." },
                            { role: "Technical Lead", desc: "Expert in DG set installation and commissioning." },
                            { role: "Service Engineers", desc: "Quick response team for routine and emergency maintenance." },
                            { role: "Support Staff", desc: "Ensuring smooth operations and client communications." }
                        ].map((team, idx) => (
<<<<<<< HEAD
                            <div key={idx} className="group">
                                <div className="aspect-video bg-white/5 border border-white/5 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                                    <Users className="w-12 h-12 text-white/10 group-hover:scale-110 transition-transform group-hover:text-energy-yellow/20" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{team.role}</h4>
                                <p className="text-white/40 text-sm leading-relaxed">{team.desc}</p>
                            </div>
=======
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel p-10 rounded-[3rem] border-white/5 hover:border-energy-yellow/30 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-8 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-all duration-500">
                                    <Users size={32} />
                                </div>
                                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{team.role}</h4>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-500">{team.desc}</p>
                            </motion.div>
>>>>>>> 799de29 (updates)
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
