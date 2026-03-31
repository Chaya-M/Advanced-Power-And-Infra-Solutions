"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Settings,
    Truck,
    Wrench,
    ShieldCheck,
    Package,
    RefreshCcw,
    ArrowRight,
    Zap,
    CheckCircle2,
    Phone
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

const serviceIcons = {
    sales: Package,
    rental: Truck,
    installation: Zap,
    maintenance: Settings,
    amc: ShieldCheck,
    repair: Wrench,
    buyback: RefreshCcw
};

export default function Services() {
    return (
        <div className="pt-24 min-h-screen bg-industrial-dark">
            <section className="industrial-mesh py-20 text-white text-center relative overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-glow">Our Services</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Comprehensive diesel generator solutions tailored for every power requirement.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {SERVICES.map((service, idx) => {
                            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Settings;
                            return (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className={`flex flex-col lg:flex-row gap-16 items-center scroll-mt-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className="lg:w-1/2">
                                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-8 h-8 text-energy-yellow" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-white/50 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Expert technical support",
                                                "Genuine spare parts",
                                                "Quick response time",
                                                "Reliable performance"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-white/70 font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-energy-yellow shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                href="/contact"
                                                className="bg-energy-yellow text-industrial-blue px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
                                            >
                                                Enquire Now <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            {service.slug === 'rental' && (
                                                <Link
                                                    href="/rental"
                                                    className="border-2 border-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all inline-flex items-center gap-2"
                                                >
                                                    View Rental Details
                                                </Link>
                                            )}
                                            {service.slug === 'sales' && (
                                                <Link
                                                    href="/sales"
                                                    className="border-2 border-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all inline-flex items-center gap-2"
                                                >
                                                    View Sales Details
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <div className="aspect-[4/3] bg-white/5 border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center">
                                            <Icon className="w-32 h-32 text-white/5" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-energy-yellow/5 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Capacity Range Section */}
            <section className="py-16 industrial-mesh text-white border-y border-white/5">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Capacity Range for All Sectors</h2>
                    <div className="glass-panel p-12 rounded-3xl">
                        <span className="text-5xl md:text-7xl font-black text-energy-yellow block mb-4 text-glow">
                            {COMPANY_INFO.capacityRange}
                        </span>
                        <p className="text-xl text-white/50">
                            We supply and service generators for diverse needs—from small commercial units to large industrial power plants.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                        {["Apartments", "Factories", "Hospitals", "Construction"].map(sector => (
                            <div key={sector} className="p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                                <span className="font-bold text-lg">{sector}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-16 text-center bg-industrial-dark">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-white mb-8">Need specialized power advice?</h2>
                    <p className="text-xl text-white/40 mb-12">
                        Our technical team is ready to assist you in choosing the right generator for your project.
                    </p>
                    <a
                        href={`tel:${COMPANY_INFO.phone[0]}`}
                        className="inline-flex items-center gap-3 bg-energy-yellow text-industrial-blue px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(249,168,37,0.4)]"
                    >
                        <Phone className="w-6 h-6" />
                        Call +91 96860 98702
                    </a>
                </div>
            </section>
        </div>
    );
}
