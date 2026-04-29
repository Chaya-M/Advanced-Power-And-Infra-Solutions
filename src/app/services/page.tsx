"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Phone, ShieldCheck, Truck, Zap } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

const detailedServices = [
    {
        title: "DG SET SALES & INSTALLATION",
        tagline: "Expert supply and end-to-end installation of world-class diesel generators.",
        points: [
            { label: "Authorized Partner", text: "Proudly supplying Mahindra Powerol DG Sets." },
            { label: "Brand Expertise", text: "We also supply and support Kirloskar, Cummins, Tata, Ashok Leyland, and Caterpillar." },
            { label: "The APIS Advantage", text: "Technical expertise in load calculation and sizing to ensure you get the right capacity." },
            { label: "Acoustic Enclosures", text: "All sets come with low noise enclosures (ನಮ್ಮ ಜನರೇಟರ್ ಶಬ್ದ ಕಡಿಮೆ, ಶಕ್ತಿ ಹೆಚ್ಚು!)." },
            { label: "Regulatory Support", text: "Assistance with Electrical Inspectorate and KSPCB approvals." }
        ],
        icon: Zap,
        color: "energy-yellow"
    },
    {
        title: "DG SET RENTAL SERVICES",
        tagline: "Reliable temporary power solutions for projects of all scales.",
        points: [
            { label: "Flexible Contracts", text: "Short-term and long-term rentals ranging from 3 months to 2 years." },
            { label: "Proven Scale", text: "Currently managing over 30+ active rental contracts across Bengaluru." },
            { label: "Ideal For", text: "Construction sites, Metro contractors (Coastal Infra), and large-scale events." }
        ],
        icon: Truck,
        color: "blue-400"
    },
    {
        title: "MAINTENANCE & AMC",
        tagline: "Ensuring zero downtime with proactive care and expert repairs.",
        points: [
            { label: "Preventive Maintenance", text: "Routine checks to stop breakdowns before they happen." },
            { label: "24/7 Breakdown Support", text: "Immediate response team of 10+ technical experts." },
            { label: "Repair Facility", text: "Dedicated Bengaluru-based facility for major overhauls and quick turnarounds." },
            { label: "Specialized Expertise", text: "Full maintenance for Fire Engines and complex industrial systems." },
            { label: "Track Record", text: "Over 100+ active AMCs currently under our care." }
        ],
        icon: ShieldCheck,
        color: "emerald-400"
    }
];

const industries = [
    { title: "Builders & Developers", desc: "Solving space and height constraints with custom foundation modifications." },
    { title: "Healthcare & Education", desc: "Specialized support for Hospitals, Diagnostic Centers, and Colleges (BGS, RR Medical)." },
    { title: "Industrial", desc: "RMC Plants, Stone Crushers, and Factories." },
    { title: "Residential", desc: "Apartment Associations (Preventive Maintenance experts)." }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-industrial-dark text-white">
            <section className="relative overflow-hidden rounded-none industrial-mesh">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
                <div className="absolute top-20 -left-16 h-72 w-72 rounded-full bg-industrial-blue/40 blur-[110px]" />
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-energy-yellow/10 blur-[120px]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-energy-yellow"
                        >
                            <Clock3 className="h-4 w-4" />
                            Complete Generator Solutions
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 text-[1.6rem] font-black uppercase leading-none tracking-tighter sm:text-[2.8rem] lg:text-[3.2rem] flex flex-wrap items-center gap-y-2"
                        >
                            <span className="text-white">SALES</span>
                            <span className="mx-2 text-energy-yellow hidden sm:inline">•</span>
                            <span className="text-white ml-2 sm:ml-0">RENTALS</span>
                            <span className="mx-2 text-energy-yellow hidden sm:inline">•</span>
                            <span className="text-white ml-2 sm:ml-0">AMC</span>
                            <span className="mx-2 text-energy-yellow hidden sm:inline">•</span>
                            <span className="text-transparent bg-gradient-to-r from-energy-yellow to-yellow-100 bg-clip-text ml-2 sm:ml-0">
                                INSTALLATION
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="max-w-3xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg"
                        >
                            Everything important now lives on one page. Explore generator sales, rental options, installation,
                            preventive maintenance, AMC support, and repair services from one place.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="rounded-none bg-white px-8 py-4 font-black uppercase tracking-wide text-industrial-blue transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                            >
                                Get a Quote
                            </Link>
                            <a
                                href={`tel:${COMPANY_INFO.phone[0]}`}
                                className="rounded-none border border-white/10 bg-white/5 px-8 py-4 font-black uppercase tracking-wide text-white transition-all hover:bg-white/10"
                            >
                                Call Now
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-10 !bg-[#F8F9F4] border-y border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {detailedServices.map((service, idx) => {
                            const isGreen = idx === 1;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`group relative rounded-none border ${isGreen ? 'border-[#1B4332] bg-[#1B4332] text-white' : 'border-slate-200 bg-white text-black'} p-5 sm:p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500`}
                                >
                                    <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${isGreen ? 'bg-white/10' : 'bg-energy-yellow/5'} blur-3xl transition-all group-hover:opacity-80`} />
                                    
                                    <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2">
                                        <div>
                                            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-none ${isGreen ? 'bg-white/20 text-white' : 'bg-white/5 border border-white/10 text-energy-yellow'} shadow-xl`}>
                                                <service.icon className="h-8 w-8" />
                                            </div>
                                            <h2 className="mb-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                                                {service.title}
                                            </h2>
                                            <p className={`text-base font-black leading-relaxed italic ${isGreen ? 'text-white/90' : 'text-[#1B4332]/70'}`}>
                                                {service.tagline}
                                            </p>
                                            <div className="mt-8 flex flex-wrap gap-4">
                                                <Link href="/contact" className={`text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2 group/link ${isGreen ? 'text-white border-b-2 border-white' : 'text-red-600 border-b-2 border-red-600'}`}>
                                                    Enquire Now <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            {service.points.map((point, pIdx) => (
                                                <div key={pIdx} className="flex gap-4">
                                                    <div className="mt-1">
                                                        <CheckCircle2 className={`h-5 w-5 ${isGreen ? 'text-white' : 'text-energy-yellow'}`} />
                                                    </div>
                                                    <div>
                                                        <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isGreen ? 'text-white/70' : 'text-white/50'}`}>{point.label}</h4>
                                                        <p className={`text-sm font-bold leading-relaxed ${isGreen ? 'text-white' : 'text-slate-600'}`}>{point.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Buyback Section */}
            <section className="py-6 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[#1B4332]/10" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="rounded-none border-2 border-[#2D6A4F] bg-black/40 p-5 md:p-8 backdrop-blur-3xl relative overflow-hidden max-w-6xl mx-auto"
                    >
                        {/* Technical accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6A4F]/10 blur-[100px] rounded-full" />
                        
                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 rounded-lg bg-[#2D6A4F]/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#2D6A4F] mb-8 mx-auto">
                                <Zap className="h-3 w-3" /> Unique Feature
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-8">
                                DG SET <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">BUYBACK</span> PROGRAM
                            </h2>
                            <p className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-8">
                                Upgrade your power without the hassle of old equipment.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { label: "Top Value", text: "We offer competitive prices for your used DG sets in any condition." },
                                    { label: "Hassle-Free", text: "We handle the complete dismantling and removal (as seen in RR Medical College)." },
                                    { label: "Environmentally Sound", text: "Safe disposal and recycling of old units." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3 text-center">
                                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#2D6A4F]">{item.label}</h4>
                                        <p className="text-sm text-slate-400 font-bold leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-6 !bg-[#F8F9F4] text-black rounded-none border-y border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4 block">Our Reach</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-[#1B4332]">
                            Industries <span className="text-[#1B4332]/60">We Empower</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-4 md:p-6 rounded-none border-2 border-[#1B4332]/20 bg-white hover:bg-slate-50 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="mb-4 h-1 w-12 bg-red-600 transition-all group-hover:w-full" />
                                <h3 className="text-base font-black uppercase tracking-tight mb-2 text-slate-900">{industry.title}</h3>
                                <p className="text-xs text-slate-500 font-bold leading-relaxed">{industry.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-6 bg-black">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-none bg-industrial-blue p-6 shadow-[0_30px_90px_rgba(11,60,93,0.35)] sm:p-10">
                        <div className="mb-8 max-w-3xl">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-energy-yellow">All Services</span>
                            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                                Everything included in our service scope
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                                The dedicated `sales` and `rental` pages are now consolidated here so customers can compare and
                                enquire faster from one service hub.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className="rounded-none border-2 border-[#1B4332]/10 bg-white p-3 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-none bg-[#1B4332] text-white">
                                        <service.icon className="h-4 w-4" />
                                    </div>
                                    <h3 className="mb-1 text-sm font-black uppercase tracking-tight text-slate-900">{service.title}</h3>
                                    <p className="text-[10px] leading-relaxed text-slate-600 font-bold">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 !bg-[#F8F9F4] border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-none border-2 border-[#1B4332]/20 bg-white p-4 md:p-6 relative overflow-hidden shadow-xl max-w-6xl mx-auto">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-energy-yellow/5 blur-[120px] rounded-full" />
                        
                        <div className="max-w-3xl mx-auto text-center relative z-10">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-energy-yellow">Quick Enquiry</span>
                            <h3 className="mt-0 text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1B4332] leading-none">
                                Need sales or rental <span className="text-red-600 underline decoration-4 underline-offset-8">support fast?</span>
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-slate-600 font-medium italic">
                                Speak with our team for generator availability, site support, maintenance planning, or an immediate project quote.
                            </p>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {COMPANY_INFO.phone.map((phone) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone}`}
                                        className="flex items-center justify-between rounded-none bg-[#1B4332] border border-[#1B4332]/10 px-8 py-6 font-black text-xl text-white transition-all hover:bg-red-600 hover:scale-[1.02]"
                                    >
                                        <span className="flex items-center gap-4">
                                            <Phone className="h-5 w-5 text-energy-yellow group-hover:text-industrial-blue" />
                                            {phone}
                                        </span>
                                        <ArrowRight className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                            
                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-energy-yellow border-b-2 border-energy-yellow pb-2 hover:gap-5 transition-all"
                                >
                                    Send Detailed Enquiry
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
