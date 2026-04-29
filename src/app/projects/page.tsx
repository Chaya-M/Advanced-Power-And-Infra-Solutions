"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Zap, 
    ArrowRight, 
    Settings, 
    ShieldCheck, 
    Activity,
    ChevronLeft
} from "lucide-react";

const PROJECTS_DATA = [
    {
        id: "bharat-cement",
        title: "Bharat Cement Product - Stone Crusher",
        category: "INDUSTRIAL",
        image: "/industrial_project_bg.png",
        highlights: [
            "Supplied high-performance DG sets to Hosur operations.",
            "Comprehensive RMC plant infrastructure power management.",
            "Corporate project power integration and scaling."
        ],
        buttonText: "View Details",
    },
    {
        id: "dr-venu-residential",
        title: "Dr. Venu Residential Project",
        category: "RESIDENTIAL",
        image: "/residential_project_bg.png",
        highlights: [
            "Complete power solution for a 5-floor luxury residential building.",
            "Decommissioning and service of 25 KV heritage generator.",
            "40 KV generator supply and turnkey installation."
        ],
        buttonText: "View Details",
    },
    {
        id: "deepashri-hospital",
        title: "Deepashri Hospital",
        category: "HEALTHCARE",
        image: "/healthcare_project_bg.png",
        highlights: [
            "Critical power backup (40 KV) for new specialized hospital block.",
            "Flexible buy-back options implemented for legacy infrastructure units."
        ],
        buttonText: "View Details",
    },
    {
        id: "rr-medical-college",
        title: "RR Medical College",
        category: "EDUCATION",
        image: "/healthcare_project_bg.png",
        highlights: [
            "Challenge: Efficient disposal of legacy diesel generator sets.",
            "Solution: Expert dismantling and competitive buyback pricing.",
            "Outcome: Secured Electrical Inspector approval and ensured hassle-free removal."
        ],
        quote: "“ಗ್ರಾಹಕನ ಸಂತೋಷವೇ ನಮ್ಮ ಬಹುಮಾನ.”",
        buttonText: "View Details",
    }
];

export default function ProjectsPage() {
    const clients = [
        { name: "Arvind Mills Ltd", short: "AM" },
        { name: "Lisit College", short: "LC" },
        { name: "BGS Group", short: "BGS" },
        { name: "Jiraj Projects", short: "JP" },
        { name: "Bharath Cements", short: "BC" },
        { name: "Vegus Hospital", short: "VH" },
        { name: "Alkem Labs", short: "AL" },
        { name: "Starworth Infra", short: "SI" },
        { name: "MSK Properties", short: "MSK" },
        { name: "SN Apartments", short: "SN" },
        { name: "Indus Sports", short: "IS" },
        { name: "Rajashree Foods", short: "RF" },
        { name: "Confident Builders", short: "CB" },
        { name: "Power Build", short: "PB" },
        { name: "Adithya Apt", short: "AA" },
        { name: "Unity Health", short: "UH" },
        { name: "Global Tech", short: "GT" },
        { name: "Zenith Infra", short: "ZI" }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Success Story Header - Pure Black */}
            <section className="bg-black pt-28 md:pt-32 pb-6 md:pb-8 text-white relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-20">
                    <Zap className="w-[30rem] h-[30rem] -bottom-32 -right-32 absolute rotate-12 text-energy-yellow" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                            <div className="h-[2px] w-12 bg-red-600"></div>
                            Project Portfolio
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6">
                             <h1 className="text-3xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                                Success <span className="text-energy-yellow italic">Story</span>
                            </h1>
                            
                            <div className="flex gap-8 pb-2">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl md:text-4xl font-black text-energy-yellow italic leading-none">450+</span>
                                    <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Successful Installs</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl md:text-4xl font-black text-red-600 italic leading-none">15+</span>
                                    <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Years of Trust</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-medium">
                            Delivering high-capacity power solutions and infrastructure for heavy industry, healthcare, and residential developments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Grid Section */}
            <section className="bg-white">
                <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROJECTS_DATA.map((project) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-sm border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group h-full"
                            >
                                {/* Project Image Area */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image 
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-[#1B4332] text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-4 flex flex-col flex-grow bg-white">
                                    <h3 className="text-xl font-black mb-3 leading-tight tracking-tight uppercase" style={{ color: '#000000', opacity: 1 }}>
                                        {project.title}
                                    </h3>

                                    <div className="space-y-3 flex-grow mb-4">
                                        {project.highlights.map((item, i) => (
                                            <div key={i} className="flex items-start gap-4" style={{ color: '#000000', opacity: 1 }}>
                                                <div className="mt-1 shrink-0">
                                                    {i === 0 && <Activity size={16} className="text-red-600" />}
                                                    {i === 1 && <Settings size={16} className="text-red-600" />}
                                                    {i === 2 && <Zap size={16} className="text-red-600" />}
                                                </div>
                                                <p className="text-[13px] font-bold leading-relaxed uppercase tracking-tight">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}

                                        {/* Testimonial specifically for Deepashri */}
                                        {project.id === 'deepashri-hospital' && (
                                            <div className="mt-3 p-3 bg-slate-50 border-l-2 border-red-600 rounded-sm">
                                                <p className="text-[10px] italic text-slate-600 leading-relaxed mb-4">
                                                    "Infrastructure Care provided a seamless transition during our block expansion. Their technical expertise ensured our life support systems never flickered."
                                                </p>
                                                <p className="text-[8px] font-black text-slate-800 uppercase tracking-widest">
                                                    — Operations Manager, Deepashri
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-slate-100">
                                        <Link 
                                            href={
                                                project.id === "bharat-cement" ? "/projects/stone-crusher" : 
                                                project.id === "dr-venu-residential" ? "/projects/dr-venu-residential" : 
                                                project.id === "deepashri-hospital" ? "/projects/deepashri-hospital" :
                                                project.id === "rr-medical-college" ? "/projects/rr-medical-college" :
                                                "/contact"
                                            } 
                                            className="flex items-center justify-center gap-2 w-full py-3 border border-black text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#1B4332] hover:border-[#1B4332] hover:text-white transition-all group/btn"
                                        >
                                            {project.buttonText}
                                            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Trusted Leaders - Infinite Marquee */}
            <section className="py-12 !bg-[#F8F9F4] relative overflow-hidden border-t border-slate-200">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                    style={{ 
                        backgroundImage: `linear-gradient(#1B4332 1px, transparent 1px), linear-gradient(90deg, #1B4332 1px, transparent 1px)`, 
                        backgroundSize: "40px 40px" 
                    }}>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-4">Network & Partnerships</span>
                        <h2 className="text-3xl md:text-8xl font-black uppercase tracking-tighter leading-none" style={{ color: '#000000' }}>
                            TRUSTED LEADERS
                        </h2>
                    </div>
                </div>

                <div className="relative mt-8 flex overflow-hidden py-6">
                    <motion.div 
                        animate={{ 
                            x: [0, -1920],
                        }}
                        transition={{ 
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-8 whitespace-nowrap"
                    >
                        {[...clients, ...clients, ...clients].map((logo, idx) => (
                            <div 
                                key={idx}
                                className="inline-flex items-center gap-6 px-8 py-4 bg-black border border-white/10 rounded-none shadow-xl group transition-all hover:border-energy-yellow/50"
                            >
                                <div className="h-10 w-10 rounded-none bg-[#2D6A4F] flex items-center justify-center text-white font-black text-lg border border-white/10 group-hover:bg-energy-yellow group-hover:text-black transition-all">
                                    {logo.short}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[13px] font-black uppercase tracking-widest text-white">{logo.name}</span>
                                    <span className="text-[8px] font-bold text-energy-yellow uppercase tracking-[0.2em]">Partner since 2022</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9F4] to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9F4] to-transparent z-10"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Active Clients", val: "50+" },
                            { label: "Ongoing Rentals", val: "30+" },
                            { label: "Bengaluru Reach", val: "100%" },
                            { label: "Service Score", val: "4.9/5" }
                        ].map((stat, i) => (
                            <div key={i} className="border-t border-slate-200 pt-6">
                                <div className="text-2xl font-black text-black">{stat.val}</div>
                                <div className="text-[10px] font-bold text-black/60 uppercase tracking-widest mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
