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
  ChevronRight
} from "lucide-react";
import { COMPANY_INFO, SERVICES, CLIENTS } from "@/lib/constants";

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
    <div className="flex flex-col min-h-screen bg-white">
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
                className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.8rem] font-black text-white leading-[0.85] tracking-tighter mb-8 text-glow drop-shadow-2xl"
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
      <section className="py-24 bg-white relative z-20 -mt-20">
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
              <motion.div key={i} variants={item} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-white text-industrial-blue flex items-center justify-center mb-8 shadow-sm group-hover:bg-energy-yellow transition-colors">
                  <v.icon size={30} />
                </div>
                <h4 className="text-xl font-black text-industrial-blue mb-4 leading-tight">{v.label}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Immersive Domain Showcase */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="px-4 py-2 rounded-lg bg-industrial-blue text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 inline-block">Specialized Operations</span>
              <h2 className="text-3xl md:text-5xl font-black text-industrial-blue mb-10 tracking-tighter leading-none">
                POWERING THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-blue to-blue-900 opacity-80">ENTERPRISE</span> <br />
                ECONOMY.
              </h2>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                We don't just supply generators; we design energy solutions that safeguard your productivity and people.
              </p>
              <div className="space-y-6">
                {['Data Centers & IT Parks', 'Hospitals & Education', 'Manufacturing & Logistics'].map((domain, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-industrial-blue font-black group-hover:bg-energy-yellow group-hover:border-energy-yellow transition-colors">
                      {i + 1}
                    </div>
                    <span className="text-xl font-bold text-industrial-blue group-hover:translate-x-2 transition-transform">{domain}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual Mosaic */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-[600px]">
              <div className="flex flex-col gap-4">
                <div className="h-[60%] bg-industrial-blue rounded-[3rem] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-energy-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Zap className="absolute -bottom-10 -right-10 text-white opacity-10 w-40 h-40" />
                </div>
                <div className="h-[40%] bg-energy-yellow rounded-[3rem] p-10 flex flex-col justify-end shadow-[0_20px_40px_rgba(249,168,37,0.2)]">
                  <div className="text-industrial-blue font-black text-4xl tracking-tighter">850+</div>
                  <div className="text-industrial-blue/60 font-bold uppercase text-[10px] tracking-widest">Units Deployed</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-12">
                <div className="h-[40%] bg-slate-200 rounded-[3rem] border border-slate-300"></div>
                <div className="h-[60%] bg-industrial-dark rounded-[3rem] relative overflow-hidden">
                  <div className="absolute inset-0 industrial-mesh opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with 3D Interaction feel */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h3 className="text-3xl md:text-4xl font-black text-industrial-blue mb-6 tracking-tighter">OUR DOMAINS</h3>
            <div className="h-1.5 w-24 bg-energy-yellow mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="group p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-industrial-blue hover:shadow-[0_30px_60px_rgba(11,60,93,0.3)] hover:-translate-y-4">
                <div className="w-20 h-20 rounded-2xl bg-white text-industrial-blue flex items-center justify-center mb-10 shadow-sm group-hover:bg-energy-yellow group-hover:scale-110 transition-all duration-500">
                  <service.icon size={40} />
                </div>
                <h4 className="text-2xl font-black text-industrial-blue group-hover:text-white mb-6 uppercase tracking-tight">{service.title}</h4>
                <p className="text-slate-500 font-medium group-hover:text-slate-400 mb-12">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-[0.2em] text-industrial-blue group-hover:text-energy-yellow transition-colors"
                >
                  ENGINEERING DETAILS <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Octane CTA */}
      <section className="py-20 px-4">
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

      {/* Elegant Infinite Marquee (Simulated) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <span className="text-slate-300 font-black uppercase tracking-[0.5em] text-[10px] mb-12">Elite Engineering Partners</span>
            <div className="flex flex-wrap justify-center gap-10 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              {CLIENTS.map((client) => (
                <span key={client} className="text-2xl font-black text-industrial-blue tracking-tighter italic">{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
