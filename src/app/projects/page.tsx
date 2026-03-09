"use client";

import React from "react";
import { CLIENTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle, Zap, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        name: "Industrial Power Setup",
        client: "Arvind Mills Ltd",
        description: "Installation and AMC for a 500 KVA DG set.",
        category: "Industrial"
    },
    {
        name: "Emergency Backup System",
        client: "Vegus Hospital",
        description: "Critical power solutions for healthcare operations.",
        category: "Healthcare"
    },
    {
        name: "Campus Power Solution",
        client: "Alkem Laboratories",
        description: "Multi-unit generator installation for laboratory facility.",
        category: "Laboratories"
    },
    {
        name: "Educational Facility Power",
        client: "Baldwin School",
        description: "Reliable standby power for school campus.",
        category: "Educational"
    },
    {
        name: "Ready-Mix Plant Power",
        client: "Sigma Concretes",
        description: "Heavy-duty generator rental for continuous operations.",
        category: "Construction"
    },
    {
        name: "Resort Infrastructure",
        client: "Indus Sports Resorts Pvt Ltd",
        description: "Complete power infrastructure for a luxury resort.",
        category: "Hospitality"
    }
];

export default function Projects() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 italic">Our Projects & <span className="text-energy-yellow">Clients</span></h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        Showcasing our successful installations and the leading organizations that trust AIP Solutions for their power needs.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-energy-yellow/5 skew-x-12 transform translate-x-24"></div>
            </section>

            {/* Featured Projects Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-industrial-blue mb-16 flex items-center gap-4">
                        <Zap className="text-energy-yellow fill-energy-yellow" />
                        Featured Installations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-2xl transition-all"
                            >
                                <div className="aspect-video bg-slate-100 flex items-center justify-center relative overflow-hidden">
                                    <Zap className="w-16 h-16 text-slate-200 group-hover:scale-125 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-industrial-blue text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="text-2xl font-black text-industrial-blue mb-2">{project.name}</h4>
                                    <p className="text-energy-yellow font-bold mb-4">{project.client}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                        <MapPin className="w-3 h-3 text-energy-yellow" />
                                        Bangalore, India
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client List */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h3 className="text-3xl font-extrabold text-industrial-blue mb-4">Leading Organizations We Serve</h3>
                        <p className="text-slate-500">A testament to our commitment to excellence and reliability.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        {CLIENTS.map((client) => (
                            <div key={client} className="flex items-center gap-4 p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-energy-yellow transition-all group">
                                <CheckCircle className="text-energy-yellow w-6 h-6 shrink-0 group-hover:fill-energy-yellow group-hover:text-white transition-all" />
                                <span className="font-bold text-lg text-industrial-blue">{client}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Client */}
            <section className="py-24 bg-energy-yellow">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-black text-industrial-blue mb-8 italic uppercase tracking-tighter">Your Success Story Starts Here</h2>
                    <p className="text-xl text-industrial-blue/80 mb-12 font-bold uppercase tracking-widest">
                        BECOME OUR NEXT SATISFIED CLIENT
                    </p>
                    <Link href="/contact" className="bg-industrial-blue text-white px-10 py-5 rounded-full font-black text-xl hover:bg-industrial-dark transition-all transform hover:scale-105 inline-block">
                        Start a Collaboration
                    </Link>
                </div>
            </section>
        </div>
    );
}
