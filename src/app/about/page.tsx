"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, CheckCircle2, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function About() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Page Header */}
            <section className="bg-industrial-blue py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Zap className="w-96 h-96 -bottom-20 -right-20 absolute rotate-12" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        About AIP Solutions
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        {COMPANY_INFO.tagline}
                    </p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Our History</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-industrial-blue mb-8">
                                Powering Bangalore Since {COMPANY_INFO.established}
                            </h3>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Advanced Power And Infra Solutions was established in 2009 with a single mission: to provide reliable and efficient backup power solutions to the growing infrastructure of Bangalore.
                                </p>
                                <p>
                                    As an authorized dealer for Mahindra Powerol Diesel Generator Sets, we have grown from a small service team to a leading provider of power solutions, serving over 450 clients across various sectors.
                                </p>
                                <p>
                                    Our expertise spans the entire lifecycle of a diesel generator—from sales and installation to long-term maintenance and buyback services.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-industrial-blue">15+</span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-industrial-blue">450+</span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Clients Served</span>
                                </div>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <Zap className="w-full h-full text-industrial-blue/5" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="p-8 bg-white shadow-2xl rounded-2xl border border-slate-100"
                                    >
                                        <Shield className="w-16 h-16 text-energy-yellow mx-auto mb-4" />
                                        <h4 className="text-xl font-bold text-industrial-blue">Authorized Dealer</h4>
                                        <p className="text-slate-500 text-sm">Mahindra Powerol</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-24 bg-industrial-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-energy-yellow/5 skew-x-12 translate-x-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-energy-yellow font-black uppercase tracking-[0.2em] text-sm mb-4">Meet the Founder</h2>
                            <h3 className="text-4xl md:text-5xl font-black mb-8 italic">Mr. Murthy</h3>
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
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
                                className="aspect-[4/5] bg-slate-800 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative"
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

            {/* Core Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-industrial-blue">Our Core Values</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Reliability",
                                desc: "We deliver power on time, ensuring your operations never stop.",
                                icon: Shield
                            },
                            {
                                title: "Excellence",
                                desc: "10+ years of technical expertise in every generator we service.",
                                icon: Award
                            },
                            {
                                title: "Customer First",
                                desc: "24/7 support and customized solutions for every client.",
                                icon: Target
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
                                <value.icon className="w-12 h-12 text-blue-600 mb-6" />
                                <h4 className="text-2xl font-bold text-industrial-blue mb-4">{value.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Our Team</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-industrial-blue">Technical Expertise You Can Trust</h3>
                        </div>
                        <p className="md:w-1/3 text-lg text-slate-600 mt-6 md:mt-0">
                            Our team consists of 10 highly skilled technical and service engineers dedicated to providing top-notch maintenance and repair services.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { role: "Leadership", desc: "Visionary management guiding our growth since 2009." },
                            { role: "Technical Lead", desc: "Expert in DG set installation and commissioning." },
                            { role: "Service Engineers", desc: "Quick response team for routine and emergency maintenance." },
                            { role: "Support Staff", desc: "Ensuring smooth operations and client communications." }
                        ].map((team, idx) => (
                            <div key={idx} className="group">
                                <div className="aspect-video bg-slate-100 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                                    <Users className="w-12 h-12 text-slate-300 group-hover:scale-110 transition-transform" />
                                </div>
                                <h4 className="text-xl font-bold text-industrial-blue mb-2">{team.role}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{team.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
