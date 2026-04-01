"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 relative z-10">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`, backgroundSize: "60px 60px" }}></div>
            <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center gap-4 italic uppercase tracking-tighter"
            >
                <div className="w-10 h-10 rounded-xl bg-energy-yellow/10 flex items-center justify-center border border-energy-yellow/20">
                    <ShieldCheck className="text-energy-yellow" size={20} />
                </div>
                Privacy <span className="text-energy-yellow">Policy</span>
            </motion.h1>
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-white/5 space-y-8 text-sm text-slate-400 font-medium leading-relaxed">
                <p className="text-base text-white/80">Your privacy is mission-critical. This Privacy Policy explains how <span className="text-energy-yellow font-black">Advanced Power And Infra Solutions</span> collects, uses, and protects your data infrastructure when you visit our digital node.</p>

                <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        1. Information Collection
                    </h3>
                    <p>We collect information you provide directly to us through enquiry forms, including your name, phone number, and email address, to respond to your specific power service requests.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        2. Use of Information
                    </h3>
                    <p>We use the collected information ONLY to provide our engineering services, process enquiries, and optimize your experience. We never share your technical data with unauthorized third parties.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-energy-yellow rounded-full"></div>
                        3. Data Protection
                    </h3>
                    <p>We implement appropriate technical and organizational encryption measures to protect your personal data against unauthorized access or disclosure.</p>
                </div>

                <div className="pt-10 border-t border-white/5">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest italic mb-4">4. Contact Node</h3>
                    <p>For questions regarding our privacy protocol, please contact us at: <br/><span className="text-energy-yellow font-bold">advancedpowerinfra@gmail.com</span></p>
                </div>
            </div>
        </div>
    );
}
