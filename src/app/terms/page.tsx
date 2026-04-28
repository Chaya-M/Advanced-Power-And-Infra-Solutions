"use client";

import React from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Terms() {
    return (
        <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 relative z-10">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
            <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center gap-4 italic uppercase tracking-tighter"
            >
                <div className="w-10 h-10 rounded-xl bg-energy-yellow/10 flex items-center justify-center border border-energy-yellow/20">
                    <FileText className="text-energy-yellow" size={20} />
                </div>
                Terms of <span className="text-energy-yellow">Service</span>
            </motion.h1>
            
            <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] border-white/5 space-y-6 text-sm text-slate-400 font-medium leading-relaxed">
                <p className="text-base text-white/80">By accessing and using this mission-critical node, you agree to comply with and be bound by the following industrial terms and conditions.</p>

                <div className="space-y-3">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        1. Service Enquiries
                    </h3>
                    <p>Enquiries made through this website do not constitute a binding contract. Prices and availability of generators for sale or rental are subject to final architectural confirmation by our technical sales team.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        2. Website Content
                    </h3>
                    <p>The content on this website, including technical schematics, images, and text, is the property of <span className="text-energy-yellow">Advanced Power And Infra Solutions</span> and may not be reproduced without explicit clearance.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        3. Limitation of Liability
                    </h3>
                    <p>APIS Solutions is not liable for any direct or indirect damages arising from the use of this website or the inability to access its power service infrastructure.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        4. Governing Law
                    </h3>
                    <p>These terms are governed by the laws of India and any disputes will be subject to the jurisdiction of the courts in Bangalore.</p>
                </div>
            </div>
        </div>
    );
}
