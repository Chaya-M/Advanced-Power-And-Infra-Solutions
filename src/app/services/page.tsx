"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Phone, ShieldCheck, Truck, Zap } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

const salesFeatures = [
    "Multi-brand generator supply from 5 KVA to 1010 KVA",
    "Load study and site inspection before final recommendation",
    "Support for commercial, industrial, residential, and project sites",
    "Installation guidance, commissioning, and post-sales support",
];

const rentalFeatures = [
    "Short-term and long-term diesel generator rentals",
    "Fast delivery for construction sites, events, and emergency backup",
    "Flexible capacity options based on site demand",
    "Reliable service support during the rental period",
];

const serviceHighlights = [
    {
        title: "Sales Solutions",
        description: "Get the right diesel generator with technical guidance, brand options, and dependable delivery support.",
        features: salesFeatures,
        anchor: "sales",
        icon: Zap,
    },
    {
        title: "Rental Solutions",
        description: "Choose rental generators for temporary power, urgent backup needs, or project-based operations.",
        features: rentalFeatures,
        anchor: "rental",
        icon: Truck,
    },
    {
        title: "Service Support",
        description: "Keep every DG set dependable with installation, preventive maintenance, AMC coverage, and repairs.",
        features: [
            "Professional installation and commissioning",
            "Routine maintenance and emergency breakdown support",
            "Annual Maintenance Contracts for long-term reliability",
        ],
        anchor: "support",
        icon: ShieldCheck,
    },
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

            <section className="py-14">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
                    {serviceHighlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            id={item.anchor}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-energy-yellow text-industrial-blue">
                                <item.icon className="h-7 w-7" />
                            </div>
                            <h2 className="mb-3 text-2xl font-black uppercase tracking-tight">{item.title}</h2>
                            <p className="mb-6 text-sm leading-relaxed text-slate-300">{item.description}</p>
                            <ul className="space-y-3">
                                {item.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy-yellow" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
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
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-[2rem] border border-white/5 bg-white/5 p-8">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-energy-yellow">Why Customers Choose APIS</span>
                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {[
                                    "Authorized dealer support across leading generator brands",
                                    "Capacity coverage from 5 KVA to 1010 KVA",
                                    "Quick response for emergency and project requirements",
                                    "Support for supply, rental, maintenance, and buyback",
                                ].map((point) => (
                                    <div key={point} className="rounded-2xl border border-white/5 bg-black/20 p-5 text-sm text-slate-200">
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-energy-yellow/20 bg-energy-yellow/10 p-8">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-energy-yellow">Quick Enquiry</span>
                            <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">Need sales or rental support fast?</h3>
                            <p className="mt-4 text-sm leading-relaxed text-slate-200">
                                Speak with our team for generator availability, site support, maintenance planning, or an immediate
                                project quote.
                            </p>
                            <div className="mt-8 space-y-4">
                                {COMPANY_INFO.phone.map((phone) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone}`}
                                        className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 font-bold text-white transition-colors hover:bg-white/15"
                                    >
                                        <span className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-energy-yellow" />
                                            {phone}
                                        </span>
                                        <ArrowRight className="h-4 w-4 text-energy-yellow" />
                                    </a>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-energy-yellow"
                            >
                                Send Detailed Enquiry
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
