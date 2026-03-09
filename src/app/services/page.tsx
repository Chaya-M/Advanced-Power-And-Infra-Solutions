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
        <div className="pt-24 min-h-screen animate-in fade-in duration-500">
            <section className="bg-slate-900 py-20 text-white text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Our Services</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Comprehensive diesel generator solutions tailored for every power requirement.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {SERVICES.map((service, idx) => {
                            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Settings;
                            return (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className={`flex flex-col lg:flex-row gap-16 items-center scroll-mt-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className="lg:w-1/2">
                                        <div className="w-16 h-16 bg-energy-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-8 h-8 text-industrial-blue" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-extrabold text-industrial-blue mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Expert technical support",
                                                "Genuine spare parts",
                                                "Quick response time",
                                                "Reliable performance"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-slate-700 font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-energy-yellow shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                href="/contact"
                                                className="bg-industrial-blue text-white px-8 py-3 rounded-full font-bold hover:bg-industrial-dark transition-colors inline-flex items-center gap-2"
                                            >
                                                Enquire Now <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            {service.slug === 'rental' && (
                                                <Link
                                                    href="/rental"
                                                    className="border-2 border-industrial-blue text-industrial-blue px-8 py-3 rounded-full font-bold hover:bg-industrial-blue hover:text-white transition-all inline-flex items-center gap-2"
                                                >
                                                    View Rental Details
                                                </Link>
                                            )}
                                            {service.slug === 'sales' && (
                                                <Link
                                                    href="/sales"
                                                    className="border-2 border-industrial-blue text-industrial-blue px-8 py-3 rounded-full font-bold hover:bg-industrial-blue hover:text-white transition-all inline-flex items-center gap-2"
                                                >
                                                    View Sales Details
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <div className="aspect-[4/3] bg-slate-100 rounded-3xl relative overflow-hidden flex items-center justify-center">
                                            <Icon className="w-32 h-32 text-slate-200" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-industrial-blue/5 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Capacity Range Section */}
            <section className="py-24 bg-industrial-blue text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Capacity Range for All Sectors</h2>
                    <div className="bg-white/5 border border-white/10 p-12 rounded-3xl">
                        <span className="text-5xl md:text-7xl font-black text-energy-yellow block mb-4">
                            {COMPANY_INFO.capacityRange}
                        </span>
                        <p className="text-xl text-slate-300">
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
            <section className="py-24 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-industrial-blue mb-8">Need specialized power advice?</h2>
                    <p className="text-xl text-slate-600 mb-12">
                        Our technical team is ready to assist you in choosing the right generator for your project.
                    </p>
                    <a
                        href={`tel:${COMPANY_INFO.phone[0]}`}
                        className="inline-flex items-center gap-3 bg-energy-yellow text-industrial-blue px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-500 transition-all transform hover:scale-105"
                    >
                        <Phone className="w-6 h-6" />
                        Call +91 96860 98702
                    </a>
                </div>
            </section>
        </div>
    );
}
