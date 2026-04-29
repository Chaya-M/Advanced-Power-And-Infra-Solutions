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
            <section className="relative overflow-hidden rounded-b-[4rem] sm:rounded-b-[6rem] industrial-mesh">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
                <div className="absolute top-20 -left-16 h-72 w-72 rounded-full bg-industrial-blue/40 blur-[110px]" />
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-energy-yellow/10 blur-[120px]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
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
                            className="mb-6 text-[2.3rem] font-black uppercase leading-[0.95] tracking-tight sm:text-[3.2rem] lg:text-[4rem]"
                        >
                            Sales, Rentals, Installation
                            <br />
                            <span className="text-transparent bg-gradient-to-r from-energy-yellow to-yellow-100 bg-clip-text">
                                and Lifetime Support
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
                                className="rounded-2xl bg-energy-yellow px-8 py-4 font-black uppercase tracking-wide text-industrial-blue transition-all hover:scale-105 active:scale-95"
                            >
                                Get a Quote
                            </Link>
                            <a
                                href={`tel:${COMPANY_INFO.phone[0]}`}
                                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-black uppercase tracking-wide text-white transition-all hover:bg-white/10"
                            >
                                Call Now
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20">
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
                                    className={`group relative rounded-[3rem] border ${isGreen ? 'border-[#2D6A4F]/40 bg-[#1B4332]/90' : 'border-white/5 bg-gradient-to-br from-white/5 to-transparent'} p-8 sm:p-12 overflow-hidden backdrop-blur-md`}
                                >
                                    <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${isGreen ? 'bg-white/10' : 'bg-energy-yellow/5'} blur-3xl transition-all group-hover:opacity-80`} />
                                    
                                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                                        <div>
                                            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${isGreen ? 'bg-white/20 text-white' : 'bg-white/5 border border-white/10 text-energy-yellow'} shadow-xl`}>
                                                <service.icon className="h-8 w-8" />
                                            </div>
                                            <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                                                {service.title}
                                            </h2>
                                            <p className={`text-lg font-black leading-relaxed italic ${isGreen ? 'text-white' : 'text-slate-300'}`}>
                                                {service.tagline}
                                            </p>
                                            <div className="mt-8 flex flex-wrap gap-4">
                                                <Link href="/contact" className={`text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2 group/link ${isGreen ? 'text-white border-b-2 border-white' : 'text-energy-yellow'}`}>
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
                                                        <p className={`text-sm font-bold leading-relaxed ${isGreen ? 'text-white' : 'text-slate-200'}`}>{point.text}</p>
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
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1B4332]/10" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="rounded-[4rem] border border-[#2D6A4F]/30 bg-black/40 p-10 sm:p-20 backdrop-blur-3xl relative overflow-hidden"
                    >
                        {/* Technical accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6A4F]/10 blur-[100px] rounded-full" />
                        
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 rounded-lg bg-[#2D6A4F]/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#2D6A4F] mb-8">
                                <Zap className="h-3 w-3" /> Unique Feature
                            </span>
                            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter italic leading-none text-white mb-8">
                                DG SET <span className="text-[#2D6A4F]">BUYBACK</span> PROGRAM
                            </h2>
                            <p className="text-xl font-medium text-slate-300 italic mb-12">
                                Upgrade your power without the hassle of old equipment.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { label: "Top Value", text: "We offer competitive prices for your used DG sets in any condition." },
                                    { label: "Hassle-Free", text: "We handle the complete dismantling and removal (as seen in RR Medical College)." },
                                    { label: "Environmentally Sound", text: "Safe disposal and recycling of old units." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <h4 className="text-sm font-black uppercase tracking-widest text-[#2D6A4F]">{item.label}</h4>
                                        <p className="text-sm text-slate-400 font-bold leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-white text-black rounded-t-[4rem] sm:rounded-t-[6rem]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4 block">Our Reach</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                            Industries <span className="opacity-40">We Empower</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="mb-6 h-1 w-12 bg-red-600 transition-all group-hover:w-full" />
                                <h3 className="text-lg font-black uppercase tracking-tight mb-3 text-slate-900">{industry.title}</h3>
                                <p className="text-sm text-slate-500 font-bold leading-relaxed">{industry.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[2.5rem] bg-industrial-blue p-8 shadow-[0_30px_90px_rgba(11,60,93,0.35)] sm:p-10">
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

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-energy-yellow">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-black uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[3rem] border border-energy-yellow/20 bg-energy-yellow/5 p-12 sm:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-energy-yellow/5 blur-[120px] rounded-full" />
                        
                        <div className="max-w-3xl relative z-10">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-energy-yellow">Quick Enquiry</span>
                            <h3 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                                Need sales or rental <span className="text-energy-yellow">support fast?</span>
                            </h3>
                            <p className="mt-8 text-lg leading-relaxed text-slate-300 font-medium italic">
                                Speak with our team for generator availability, site support, maintenance planning, or an immediate project quote.
                            </p>
                            
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {COMPANY_INFO.phone.map((phone) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone}`}
                                        className="flex items-center justify-between rounded-[2rem] bg-white/5 border border-white/10 px-8 py-6 font-black text-xl text-white transition-all hover:bg-energy-yellow hover:text-industrial-blue hover:scale-[1.02]"
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
