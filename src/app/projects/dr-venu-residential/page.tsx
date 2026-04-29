"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Zap, 
    ArrowLeft, 
    CheckCircle2, 
    ShieldCheck, 
    MapPin,
    ArrowRight,
    Quote,
    Building,
    Power,
    FileCheck,
    AlertCircle
} from "lucide-react";

export default function ResidentialCaseStudy() {
    return (
        <div className="pt-24 min-h-screen bg-[#FDFDFB]">
            {/* Case Study Hero */}
            <section className="bg-white pt-16 pb-12 text-[#1B4332] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1B4332] transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#1B4332] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                <MapPin size={12} />
                                Koramangala, Bangalore
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9]" style={{ color: '#000000' }}>
                                Dr. Venu <br />
                                <span>Residential Project</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium mb-8">
                                A technical case study on achieving 100% license approval and seamless electrical integration for a high-end luxury residential complex.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-8 border border-slate-300 bg-white shadow-sm">
                                    <div className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Impact Metric</div>
                                    <div className="text-3xl font-black text-[#1B4332]">100% Approval</div>
                                    <div className="text-sm text-slate-500 mt-1 uppercase font-bold tracking-tight">Regulatory License Success</div>
                                </div>
                                <div className="p-8 border border-slate-300 bg-white shadow-sm">
                                    <div className="text-[10px] font-black text-[#2D6A4F] uppercase tracking-widest mb-2">Reliability</div>
                                    <div className="text-3xl font-black text-[#1B4332]">Zero Downtime</div>
                                    <div className="text-sm text-slate-500 mt-1 uppercase font-bold tracking-tight">Continuous Power Delivery</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl">
                                <Image 
                                    src="/residential_project_bg.png"
                                    alt="Residential Infrastructure"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-[#1B4332] p-8">
                                    <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Primary Asset</div>
                                    <div className="text-2xl font-black text-white uppercase tracking-tight">Residential Infrastructure</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Challenge */}
            <section className="py-16 bg-[#1B4332] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                                The <span className="text-black">Challenge</span>
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed mb-10">
                                Managing a complex electrical load for a luxury 5-floor residential building required more than just wiring. The project faced stringent regulatory hurdles and required a dual-layered backup strategy to meet luxury standards.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "High-density load management across multi-level residential units",
                                    "Complex safety licensing and statutory compliance requirements",
                                    "Integration of existing heritage assets with modern power systems"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight text-white/80">
                                        <AlertCircle size={18} className="text-red-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    title: "Main Grid",
                                    spec: "40 KV Supply",
                                    desc: "Primary residential grid installation and load balancing across 5 floors.",
                                    icon: Power
                                },
                                {
                                    title: "Secondary",
                                    spec: "25 KV Unit",
                                    desc: "Refurbished and serviced existing unit for emergency backup protocols.",
                                    icon: Zap
                                },
                                {
                                    title: "Compliance",
                                    spec: "Fully Licensed",
                                    desc: "Safety approved and statutory protocols finalized for residential occupancy.",
                                    icon: FileCheck
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 border-l-4 border-red-600 flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 bg-[#F8F9F4] flex items-center justify-center shrink-0">
                                        <item.icon size={24} className="text-[#1B4332]" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                                        <div className="text-xl font-black text-[#1B4332] uppercase mb-2">{item.spec}</div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Field Documentation */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1B4332] uppercase tracking-tighter leading-none mb-6">
                        Field <span className="text-black">Documentation</span>
                    </h2>
                    <div className="h-1 w-20 bg-[#1B4332] mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-sm group shadow-xl">
                            <Image 
                                src="/images/cummins.png"
                                alt="Technical Installation"
                                fill
                                className="object-contain p-8 bg-slate-50 transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-sm group shadow-xl">
                            <Image 
                                src="/residential_project_bg.png"
                                alt="Structural Integration"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 bg-[#F8F9F4] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="mb-8 flex justify-center text-red-600">
                        <Quote size={60} fill="currentColor" />
                    </div>
                    <blockquote className="text-3xl md:text-5xl font-black text-[#1B4332] leading-tight mb-8 uppercase tracking-tighter">
                        "Efficient execution and handled all the bureaucracy for us."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="font-black text-xl uppercase tracking-widest text-[#1B4332]">Dr. Venu</div>
                        <div className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">Residential Project Lead, Koramangala</div>
                    </div>
                </div>
            </section>

            {/* Footer-like CTA */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-4xl font-black uppercase mb-8" style={{ color: '#000000', opacity: 1 }}>Ready to Power Your Success Story?</h3>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-4 bg-[#1B4332] text-white px-12 py-6 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-red-600 transition-all shadow-2xl active:scale-95"
                    >
                        Request Similar Solution <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
