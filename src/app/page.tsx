"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Users,
  ArrowRight,
  Phone,
  Award,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
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
      <section className="relative min-h-screen lg:min-h-[110vh] flex items-center industrial-mesh overflow-hidden rounded-b-[4rem] sm:rounded-b-[6rem]">
        {/* Dark Gradient Overlay for Clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-0"></div>

        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-industrial-blue blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-energy-yellow blur-[150px] opacity-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-energy-yellow text-xs font-black uppercase tracking-[0.3em] mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-energy-yellow animate-ping"></div>
                Premium Mahindra Powerol Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[2.2rem] md:text-[3.2rem] lg:text-[4.2rem] font-black text-white leading-[0.85] tracking-tighter mb-8 text-glow drop-shadow-2xl"
              >
                UNINTERRUPTED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow to-yellow-200">ENERGY</span> <br />
                ELITE INFRA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 font-medium leading-relaxed"
              >
                Setting the gold standard in Bangalore since 2009. We engineer robust power backup ecosystems from 5 KVA to 1010 KVA.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-energy-yellow text-industrial-blue rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,168,37,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                    Secure Power Now <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg backdrop-blur-xl transition-all hover:bg-white/10 flex items-center gap-3"
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
                    <Zap size={200} className="text-white opacity-[0.02] -rotate-12" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-energy-yellow font-black text-9xl tracking-[0.2em] opacity-20">DG</div>
                    </div>
                  </div>
                  <div className="absolute bottom-16 left-12 right-12 p-8 bg-black/40 backdrop-blur-3xl rounded-3xl border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-energy-yellow text-xs font-black uppercase tracking-widest">Active System</span>
                      <span className="text-white text-xs font-bold">1010 KVA MAX</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-energy-yellow shadow-[0_0_10px_#F9A825]"></div>
                    </div>
                    <p className="text-white text-lg font-black mt-6 tracking-tight">PEAK PERFORMANCE <br />RELIABILITY</p>
                  </div>
                </div>
                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 p-6 glass-panel rounded-3xl border border-energy-yellow/30 animate-float">
                  <Award size={32} className="text-energy-yellow mb-2" />
                  <div className="text-white font-black">15+ YEARS</div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold">TRUSTED EXPERTISE</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Value Propositions */}
      <section className="py-16 bg-industrial-dark relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: "Authorized Dealer", desc: "Official Mahindra Powerol partners since day one.", icon: ShieldCheck },
              { label: "Elite Response", desc: "90-minute emergency site support across Bangalore.", icon: Zap },
              { label: "Project Mastery", desc: "850+ successful installations across all sectors.", icon: Award },
              { label: "Client Focused", desc: "320+ AMC contracts with dedicated service managers.", icon: Users },
            ].map((v, i) => (
              <motion.div key={i} variants={item} className="p-10 rounded-[2.5rem] glass-panel border border-white/5 hover:border-energy-yellow/30 transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-8 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue transition-colors shadow-sm">
                  <v.icon size={30} />
                </div>
                <h4 className="text-xl font-black text-white mb-4 leading-tight">{v.label}</h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid with 3D Interaction feel */}
      <section className="py-16 bg-industrial-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">OUR DOMAINS</h3>
            <div className="h-1.5 w-20 bg-energy-yellow mx-auto rounded-full shadow-[0_0_15px_#F9A825/40]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] bg-industrial-dark border border-white/5 transition-all duration-500 hover:bg-industrial-blue hover:shadow-[0_30px_60px_rgba(11,60,93,0.3)] hover:-translate-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white/5 text-energy-yellow flex items-center justify-center mb-6 border border-white/10 group-hover:bg-energy-yellow group-hover:text-industrial-blue group-hover:scale-105 transition-all duration-500">
                  <service.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-white group-hover:text-white mb-3 uppercase tracking-tight">{service.title}</h4>
                <p className="text-white/50 text-sm font-medium group-hover:text-white/70 mb-8">
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
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto rounded-[4rem] sm:rounded-[6rem] bg-industrial-blue relative overflow-hidden p-12 md:p-24 shadow-[0_40px_100px_rgba(11,60,93,0.4)]">
          <div className="absolute top-0 right-0 w-full h-full industrial-mesh opacity-50"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-[1.1]"
            >
              READY TO POWER YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow to-yellow-100">BIGGEST AMBITIONS?</span>
            </motion.h2>
            <p className="text-xl text-slate-300 mb-14 font-medium uppercase tracking-[0.3em] opacity-80">
              Immediate Consultation for Installations & AMCs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/contact"
                className="px-14 py-6 bg-white text-industrial-blue rounded-3xl font-black text-xl hover:bg-energy-yellow transition-all shadow-2xl active:scale-95 uppercase"
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone[0]}`}
                className="flex items-center gap-4 text-white text-3xl font-black tracking-tighter hover:text-energy-yellow transition-colors"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone size={24} className="text-energy-yellow fill-energy-yellow" />
                </div>
                {COMPANY_INFO.phone[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Infinite Marquee Showcase */}
      <section className="py-16 bg-industrial-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 industrial-mesh opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16 text-center">
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Elite Engineering Partners</span>
          <h2 className="text-3xl font-black text-white mt-6 tracking-tight">TRUSTED BY INDUSTRY LEADERS</h2>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-8 pr-8">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <div
                key={i}
                className="inline-flex items-center px-12 py-8 rounded-[2rem] glass-panel border border-white/5 hover:border-energy-yellow/30 hover:bg-white/5 transition-all cursor-default"
              >
                <span className="text-2xl font-black text-energy-yellow/70 hover:text-energy-yellow transition-all tracking-tighter italic">
                  {client}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient Masks for smooth fade edges */}
          <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-industrial-dark to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-industrial-dark to-transparent z-20 pointer-events-none"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-industrial-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
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
                className="p-10 rounded-[2.5rem] glass-panel border border-white/5 relative group"
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
