"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Truck,
  Clock,
  FileText,
  MapPin,
  Shield,
  Zap,
  ShieldCheck,
  Users,
  ArrowRight,
  Phone,
  Award,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, SERVICES, CLIENTS, TESTIMONIALS } from "@/lib/constants";


export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-industrial-dark">
      {/* High-Impact Visual Hero */}
      <section className="relative min-h-0 flex items-start industrial-mesh overflow-hidden rounded-b-[4rem] sm:rounded-b-[6rem]">
        {/* Dark Gradient Overlay for Clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-0"></div>

        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-industrial-blue blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-energy-yellow blur-[150px] opacity-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-energy-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-4"
              >
                <div className="w-2 h-2 rounded-full bg-energy-yellow animate-ping"></div>
                Premium Multi-Brand Power Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] font-black text-white leading-[0.85] tracking-tighter mb-4 text-glow drop-shadow-2xl uppercase"
              >
                ADVANCED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow to-yellow-200">GENERATOR</span> <br />
                & POWER BACKUP SYSTEMS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-slate-400 max-w-2xl mb-6 font-medium leading-relaxed"
              >
                Engineered for performance. Delivering scalable power solutions from small businesses to large-scale industrial operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-energy-yellow text-industrial-blue rounded-2xl font-black text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(249,168,37,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                    Secure Power Now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-base backdrop-blur-xl transition-all hover:bg-white/10 flex items-center gap-3"
                >
                  VIEW CATALOG
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative z-10"
              >
                {/* Visual Placeholder for Generator (Using high-end UI elements) */}
                <div className="aspect-square glass-panel rounded-[4rem] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-industrial-blue via-transparent to-energy-yellow/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap size={150} className="text-white opacity-[0.02] -rotate-12" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-energy-yellow font-black text-7xl tracking-[0.2em] opacity-20">DG</div>
                    </div>
                  </div>
                  <div className="absolute bottom-16 left-12 right-12 p-6 bg-black/40 backdrop-blur-3xl rounded-3xl border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-energy-yellow text-[10px] font-black uppercase tracking-widest">Active System</span>
                      <span className="text-white text-[10px] font-bold">1010 KVA MAX</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-energy-yellow shadow-[0_0_10px_#F9A825]"></div>
                    </div>
                    <p className="text-white text-base font-black mt-6 tracking-tight">PEAK PERFORMANCE <br />RELIABILITY</p>
                  </div>
                </div>
                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 p-5 glass-panel rounded-3xl border border-energy-yellow/30 animate-float shadow-2xl">
                  <Award size={28} className="text-energy-yellow mb-2" />
                  <div className="text-white font-black text-sm">15+ YEARS</div>
                  <div className="text-slate-400 text-[8px] uppercase font-bold tracking-widest opacity-60">TRUSTED EXPERTISE</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Industrial HUD - High-Tech Sales Highlights */}
      <section className="py-16 bg-transparent overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-6 inline-block border border-energy-yellow/20"
            >
              System Operations & Excellence
            </motion.span>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4 leading-none">
              Sales <span className="text-energy-yellow italic underline decoration-4 underline-offset-8">Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: "01", title: "Tech Experts", status: "CONSULT_ACTIVE", desc: "Engineering-led team for precise complex power solutions.", icon: Shield },
              { id: "02", title: "Site Visits", status: "MAPPING_LIVE", desc: "Comprehensive technical assessments for 100% guarantee.", icon: MapPin },
              { id: "03", title: "Prompt Delivery", status: "LOGISTICS_READY", desc: "Rapid logistics and immediate dispatch from our hubs.", icon: Truck },
              { id: "04", title: "Guidelines", status: "SAFETY_LOCKED", desc: "Strict adherence to safety protocols and global standards.", icon: FileText },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[320px] overflow-hidden rounded-[3rem] glass-panel border-white/5 hover:border-energy-yellow/30 transition-all duration-700 cursor-default"
              >
                {/* Background HUD Aura */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-energy-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="p-8 relative z-10 h-full flex flex-col items-start justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-8 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue group-hover:scale-110 transition-all duration-500">
                    <node.icon size={28} />
                  </div>
                  
                  <h4 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">{node.title}</h4>
                  
                  <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-500">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with 3D Interaction feel */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase">Our Domains</h3>
            <div className="h-1 w-20 bg-energy-yellow mx-auto rounded-full shadow-[0_0_15px_#F9A825]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[3.5rem] glass-panel transition-all duration-500 hover:bg-industrial-blue/40 hover:shadow-[0_30px_60px_rgba(11,60,93,0.3)] hover:-translate-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-8 shadow-sm group-hover:bg-energy-yellow group-hover:text-industrial-blue group-hover:scale-110 transition-all duration-500">
                  <service.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-white mb-5 uppercase tracking-tight">{service.title}</h4>
                <p className="text-slate-400 text-sm font-medium mb-10">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] text-energy-yellow/70 group-hover:text-energy-yellow transition-colors"
                >
                  ENGINEERING DETAILS <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Octane CTA */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto rounded-[4rem] sm:rounded-[6rem] bg-industrial-blue relative overflow-hidden p-10 md:p-16 shadow-[0_40px_100px_rgba(11,60,93,0.4)]">
          <div className="absolute top-0 right-0 w-full h-full industrial-mesh opacity-50"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tighter leading-[1.1]"
            >
              READY TO POWER YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow to-yellow-100">BIGGEST AMBITIONS?</span>
            </motion.h2>
            <p className="text-lg text-slate-300 mb-8 font-medium uppercase tracking-[0.3em] opacity-80">
              Immediate Consultation for Installations & AMCs.
            </p>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-12">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-industrial-blue rounded-[2rem] font-black text-lg hover:bg-energy-yellow transition-all shadow-2xl active:scale-95 uppercase"
              >
                Get a Quote
              </Link>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                <a
                  href={`tel:${COMPANY_INFO.phone[0]}`}
                  className="flex items-center gap-4 text-white text-xl md:text-2xl font-black tracking-tighter hover:text-energy-yellow transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <Phone size={16} className="text-energy-yellow fill-energy-yellow" />
                  </div>
                  {COMPANY_INFO.phone[0]}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone[1]}`}
                  className="flex items-center gap-4 text-white text-xl md:text-2xl font-black tracking-tighter hover:text-energy-yellow transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <Phone size={16} className="text-energy-yellow fill-energy-yellow" />
                  </div>
                  {COMPANY_INFO.phone[1]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Infinite Marquee with Blueprint Background */}
      <section className="py-16 relative overflow-hidden bg-industrial-dark">
        {/* Blueprint Grid and Radial Glow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #F9A825 1px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-energy-yellow/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-2 rounded-lg bg-energy-yellow/10 text-energy-yellow text-[8px] font-black uppercase tracking-[0.3em] mb-6 inline-block border border-energy-yellow/20"
            >
              Our Engineering Network
            </motion.span>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">
              Our Valued <span className="text-energy-yellow">Customers</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-energy-yellow to-yellow-200 mx-auto rounded-full shadow-[0_0_20px_#F9A825]"></div>
          </div>
          
          <div className="flex flex-col gap-12 relative">
            {/* Row 1 - Right to Left */}
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-industrial-dark to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-industrial-dark to-transparent z-20 pointer-events-none"></div>
              
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } }}
                className="flex whitespace-nowrap"
              >
                {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                  <span
                    key={`r1-${idx}`}
                    className="inline-block mx-12 text-2xl md:text-4xl font-black text-white/30 tracking-tighter hover:text-energy-yellow transition-all cursor-default uppercase italic hover:scale-105"
                  >
                    {client}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Left to Right */}
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-industrial-dark to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-industrial-dark to-transparent z-20 pointer-events-none"></div>
              
              <motion.div
                animate={{ x: ["-50%", 0] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
                className="flex whitespace-nowrap"
              >
                {[...CLIENTS, ...CLIENTS].reverse().map((client, idx) => (
                  <span
                    key={`r2-${idx}`}
                    className="inline-block mx-12 text-2xl md:text-3xl font-black text-white/20 tracking-tighter hover:text-energy-yellow transition-all cursor-default uppercase italic hover:scale-105"
                  >
                    {client}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-industrial-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <span className="text-energy-yellow text-xs font-black uppercase tracking-[0.3em]">Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">VOICES OF TRUST</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] glass-panel border border-white/5 relative group"
              >
                <Quote size={40} className="text-energy-yellow opacity-10 absolute top-8 right-8" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={cn(
                        "transition-colors",
                        idx < testimonial.rating ? "text-energy-yellow fill-energy-yellow" : "text-white/10"
                      )}
                    />
                  ))}
                </div>
                <p className="text-white/70 italic mb-10 leading-relaxed font-medium">"{testimonial.content}"</p>
                <div className="pt-8 border-t border-white/5">
                  <div className="font-black text-white tracking-tight uppercase">{testimonial.name}</div>
                  <div className="text-energy-yellow/70 text-xs font-bold uppercase tracking-widest mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
