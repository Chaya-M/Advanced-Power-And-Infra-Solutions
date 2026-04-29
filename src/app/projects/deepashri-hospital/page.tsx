"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Zap, 
    ArrowLeft, 
    CheckCircle2, 
    Clock, 
    ShieldCheck, 
    Activity,
    Settings,
    MapPin,
    ArrowRight,
    Quote,
    Hospital
} from "lucide-react";

export default function DeepashriHospitalCaseStudy() {
    return (
        <div className="min-h-screen bg-black">
            {/* Case Study Hero */}
            <section className="bg-black pt-20 pb-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-full" 
                        style={{ 
                            backgroundImage: `radial-gradient(#2D6A4F 1px, transparent 0)`, 
                            backgroundSize: "40px 40px" 
                        }}>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2D6A4F]/20 border border-[#2D6A4F]/40 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse"></div>
                                Healthcare Success
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase leading-[0.9]">
                                Deepashri <br />
                                <span className="text-black">Hospital</span>
                            </h1>
                            <div className="flex items-center gap-4 text-slate-400 mb-6">
                                <MapPin size={20} className="text-[#2D6A4F]" />
                                <span className="text-lg font-bold uppercase tracking-widest">Bangalore, Karnataka</span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Project Type</div>
                                    <div className="text-xl font-bold text-white">Healthcare</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Criticality</div>
                                    <div className="text-xl font-bold text-white">Life Support</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Status</div>
                                    <div className="text-xl font-bold text-[#67f3b2]">Completed</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image 
                                src="/healthcare_project_bg.png"
                                alt="Deepashri Hospital Facility"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Challenges */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6" style={{ color: '#000000', opacity: 1 }}>
                            Technical <span className="text-red-600" style={{ color: '#dc2626' }}>Challenges</span>
                        </h2>
                        <div className="h-1 w-20 bg-red-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Zero Interruption Demand",
                                desc: "Expanding a hospital block required integrating new power systems without a single second of downtime for existing life support units.",
                                icon: Activity
                            },
                            {
                                title: "Legacy Integration",
                                desc: "Managing the transition from older, less efficient units to a new, high-capacity centralized backup system.",
                                icon: Settings
                            },
                            {
                                title: "Strict Compliance",
                                desc: "Ensuring all installations met stringent healthcare safety standards and regulatory electrical inspector requirements.",
                                icon: ShieldCheck
                            }
                        ].map((challenge, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-300 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#2D6A4F]/10 flex items-center justify-center mb-8 group-hover:bg-[#2D6A4F] transition-colors">
                                    <challenge.icon size={28} className="text-[#2D6A4F] group-hover:text-white" />
                                </div>
                                <h4 className="text-xl font-black mb-4 uppercase tracking-tight" style={{ color: '#000000', opacity: 1 }}>
                                    {challenge.title}
                                </h4>
                                <p className="text-sm leading-relaxed font-bold" style={{ color: '#1a1a1a', opacity: 1 }}>
                                    {challenge.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-16 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-slate-50 flex items-center justify-center">
                                <Hospital size={120} className="text-[#2D6A4F]/20" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/10 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#2D6A4F]/10 blur-[100px] rounded-full -z-10"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6" style={{ color: '#000000', opacity: 1 }}>
                                The <span className="text-[#2D6A4F]" style={{ color: '#2D6A4F' }}>Solution</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "40 KV Dedicated Infrastructure",
                                        desc: "Installed a high-reliability generator system dedicated to the new hospital block expansion."
                                    },
                                    {
                                        title: "Strategic Buy-Back Program",
                                        desc: "Implemented a flexible buy-back option for legacy units, significantly reducing the capital cost of the upgrade."
                                    },
                                    {
                                        title: "Automated Transition Control",
                                        desc: "Advanced switching systems that ensure millisecond response times during utility power failures."
                                    }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="mt-1">
                                            <CheckCircle2 size={24} className="text-[#2D6A4F]" />
                                        </div>
                                        <div>
                                            <h5 className="text-lg font-black uppercase mb-2" style={{ color: '#000000', opacity: 1 }}>{item.title}</h5>
                                            <p className="text-sm leading-relaxed font-bold" style={{ color: '#1a1a1a', opacity: 1 }}>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results & Impact */}
            <section className="py-12 bg-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                            Results & <span className="text-black">Impact</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { value: "100%", label: "System Uptime", desc: "Absolute stability for life support equipment." },
                            { value: "25%", label: "Cost Savings", desc: "Achieved through the legacy unit buy-back program." },
                            { value: "Zero", label: "Patient Risk", desc: "No power interruptions during critical operations." }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-5xl font-black text-[#67f3b2] mb-4 tracking-tighter">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-bold uppercase tracking-widest mb-4">{stat.label}</div>
                                <p className="text-slate-500 text-sm">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonial */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="mb-6 flex justify-center text-[#2D6A4F]/20">
                        <Quote size={80} />
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-bold text-[#1B4332] leading-tight mb-8">
                        "Infrastructure Care provided a seamless transition during our block expansion. Their technical expertise ensured our life support systems never flickered."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-1 bg-red-600 mb-6"></div>
                        <div className="font-black text-xl uppercase tracking-widest text-[#1B4332]">Operations Manager</div>
                        <div className="text-slate-400 font-bold uppercase tracking-widest text-sm mt-2">Deepashri Hospital</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-4xl font-black text-black uppercase mb-8">Ensuring Continuous Care?</h3>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-4 bg-[#1B4332] text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-600 transition-all shadow-2xl active:scale-95"
                    >
                        Request Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
