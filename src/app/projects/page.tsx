"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Zap, 
    ArrowRight, 
    MapPin, 
    CheckCircle2, 
    Star, 
    Settings, 
    FileText, 
    ShieldCheck, 
    Activity,
    Building2,
    Hospital,
    Factory
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
        buttonText: "View Case Study",
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
        buttonText: "View Project Specs",
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
        buttonText: "View Case Study",
    }
];

export default function ProjectsPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Success Story Header - Pure Black */}
            <section className="bg-black pt-20 pb-16 text-white relative overflow-hidden border-b border-white/5">
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
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
                            Success <span className="text-energy-yellow italic">Story</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-medium">
                            Delivering high-capacity power solutions and infrastructure for heavy industry, healthcare, and residential developments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Grid Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                    <div className="flex-grow"></div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-industrial-blue italic">450+</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Successful Installs</span>
                        </div>
                        <div className="w-[1px] h-12 bg-slate-200"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-red-600 italic">15+</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Years of Trust</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-black text-[#67f3b2] mb-8 leading-tight tracking-tight uppercase">
                                    {project.title}
                                </h3>

                                <div className="space-y-6 flex-grow mb-12">
                                    {project.highlights.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 text-slate-500">
                                            <div className="mt-1 shrink-0">
                                                {i === 0 && <Activity size={14} className="text-red-600" />}
                                                {i === 1 && <Settings size={14} className="text-red-600" />}
                                                {i === 2 && <Zap size={14} className="text-red-600" />}
                                            </div>
                                            <p className="text-[11px] font-medium leading-relaxed uppercase tracking-tight">
                                                {item}
                                            </p>
                                        </div>
                                    ))}

                                    {/* Testimonial specifically for Hospital */}
                                    {project.id === 'deepashri-hospital' && (
                                        <div className="mt-8 p-6 bg-slate-50 border-l-2 border-red-600 rounded-sm">
                                            <p className="text-[10px] italic text-slate-600 leading-relaxed mb-4">
                                                "Infrastructure Care provided a seamless transition during our block expansion. Their technical expertise ensured our life support systems never flickered."
                                            </p>
                                            <p className="text-[8px] font-black text-slate-800 uppercase tracking-widest">
                                                — Operations Manager, Deepashri
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link 
                                        href={
                                            project.id === "bharat-cement" ? "/projects/stone-crusher" : 
                                            project.id === "dr-venu-residential" ? "/projects/dr-venu-residential" : 
                                            "/contact"
                                        } 
                                        className="flex items-center justify-center gap-2 w-full py-3 border border-[#1B4332] text-[#1B4332] text-[10px] font-black uppercase tracking-widest hover:bg-[#1B4332] hover:text-white transition-all group/btn"
                                    >
                                        {project.buttonText}
                                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Leading Organizations - Creative Dark Industrial Grid */}
            <section className="py-24 bg-black relative overflow-hidden">
                {/* Technical Dot Grid Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ 
                        backgroundImage: `radial-gradient(#2D6A4F 1px, transparent 0)`, 
                        backgroundSize: "30px 30px" 
                    }}>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none mb-6">
                                Trusted By <span className="text-[#1B4332]">Industry Leaders</span>
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm leading-relaxed tracking-wide">
                                A testament to our commitment to precision engineering and mission-critical reliability.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            "Arvind Mills Ltd", "Lisit College", "BGS Group", "Jiraj Projects", "Bharath Cements Group",
                            "Vegus Hospital", "Alkem Laboratories", "Starworth Infrastructure", "MSK Properties", "SN Apartments",
                            "Indus Sports Resorts Pvt Ltd", "Rajashree Foods Private Limited", "Confident Builders", "Power Build Batteries Pvt Ltd", "Adithya Apartment"
                        ].map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-4 p-5 bg-[#0A0A0A]/80 border border-white/5 rounded-xl hover:border-[#2D6A4F]/50 transition-all group cursor-default backdrop-blur-sm"
                            >
                                <div className="w-8 h-8 rounded-full border border-[#2D6A4F]/30 flex items-center justify-center shrink-0 group-hover:bg-[#2D6A4F]/10 transition-all">
                                    <CheckCircle2 size={14} className="text-[#2D6A4F]" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors truncate">
                                    {client}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Minimalist Slider Pagination */}
                    <div className="flex justify-center gap-2 mt-20">
                        <div className="w-12 h-1 bg-[#1B4332] rounded-full"></div>
                        <div className="w-2 h-1 bg-white/10 rounded-full"></div>
                        <div className="w-2 h-1 bg-white/10 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Industrial Green (Matching User Image) */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#2D6A4F] rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl text-center">
                        {/* Subtle Pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <Zap className="w-full h-full text-white rotate-12 scale-150" />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase italic leading-[0.9]">
                                Need Industrial <br /> 
                                <span className="opacity-40">Power Solutions?</span>
                            </h2>
                            <p className="text-white/80 text-sm md:text-base mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                From cement plants to hospitals, we provide reliable diesel generation and infrastructure management tailored to your load requirements.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <Link 
                                    href="/contact" 
                                    className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg active:scale-95"
                                >
                                    Get A Quote
                                </Link>
                                <Link 
                                    href="/services" 
                                    className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95"
                                >
                                    Download Specs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
