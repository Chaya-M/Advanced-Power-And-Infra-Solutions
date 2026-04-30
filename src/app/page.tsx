"use client";

import React, { useEffect, useState } from "react";
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
  ChevronRight,
  CheckCircle2,
  RefreshCcw,
  Briefcase,
  Wrench,
  ClipboardCheck,
  Factory,
  Hospital,
  Building2
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, SERVICES, CLIENTS, TESTIMONIALS } from "@/lib/constants";

const domainHighlights = [
  {
    title: "Sales Solutions",
    description: "Get the right diesel generator with technical guidance, brand options, and dependable delivery support.",
    features: [
      "Multi-brand generator supply from 5 KVA to 1010 KVA",
      "Load study and site inspection before final recommendation",
      "Support for commercial, industrial, residential, and project sites",
      "Installation guidance, commissioning, and post-sales support",
    ],
    icon: Zap,
    href: "/services#sales",
  },
  {
    title: "Rental Solutions",
    description: "Choose rental generators for temporary power, urgent backup needs, or project-based operations.",
    features: [
      "Short-term and long-term diesel generator rentals",
      "Fast delivery for construction sites, events, and emergency backup",
      "Flexible capacity options based on site demand",
      "Reliable service support during the rental period",
    ],
    icon: RefreshCcw,
    href: "/services#rental",
  },
  {
    title: "Service Support",
    description: "Keep every DG set dependable with installation, preventive maintenance, AMC coverage, and repairs.",
    features: [
      "Professional installation and commissioning",
      "Routine maintenance and emergency breakdown support",
      "Annual Maintenance Contracts for long-term reliability",
    ],
    icon: ShieldCheck,
    href: "/services#support",
  },
  {
    title: "Used Generator Buyback",
    description: "Sell your used generator with support for evaluation, inspection, and a smooth handover process.",
    features: [
      "Purchase support for used diesel generators",
      "Condition review and basic technical assessment",
      "Suitable for upgrade, replacement, or asset clearance needs",
      "Direct enquiry support for faster response",
    ],
    icon: Briefcase,
    href: "/services#buyback",
  },
];

const heroGenerators = [
  { src: "/images/cummins.png", alt: "Cummins generator brand", label: "CUMMINS", power: "Authorized Dealer" },
  { src: "/images/tata.png", alt: "Tata generator brand", label: "TATA", power: "Authorized Dealer" },
  { src: "/images/koel.png", alt: "KOEL generator brand", label: "KOEL", power: "Authorized Dealer" },
  { src: "/images/tmtl.png", alt: "TMTL generator brand", label: "TMTL", power: "Authorized Dealer" },
  { src: "/images/ashok.png", alt: "Ashok Leyland generator brand", label: "ASHOK LEYLAND", power: "Authorized Dealer" },
];


export default function Home() {
  const [activeGenerator, setActiveGenerator] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveGenerator((current) => (current + 1) % heroGenerators.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

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
      <section className="relative min-h-0 flex items-start overflow-hidden rounded-none bg-black">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
           <Image 
             src="/images/one-stop-hero.png" 
             alt="Industrial Power Background" 
             fill 
             className="object-cover opacity-40"
             priority
           />
           {/* Sophisticated Dark Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/80 z-10"></div>
        </div>

        {/* Animated Background Orbs for depth */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#00df82]/10 blur-[120px] opacity-40 animate-pulse z-20"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-red-600/5 blur-[150px] opacity-10 animate-pulse z-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full pt-28 md:pt-32 lg:pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00df82]/10 border border-[#00df82]/30 backdrop-blur-md text-[#00df82] text-[10px] font-black uppercase tracking-[0.3em] mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-[#00df82] shadow-[0_0_8px_#00df82]"></div>
                Complete Lifecycle Management
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[1.75rem] md:text-[3.2rem] lg:text-[4.2rem] font-black text-white leading-[0.95] tracking-tighter mb-6 uppercase"
              >
                ADVANCED POWER <br />
                & INFRA <span className="text-[#00df82]">SOLUTIONS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-slate-300 max-w-2xl mb-8 font-medium leading-relaxed"
              >
                Engineered for zero-failure environments. We provide industrial-grade power infrastructure that guarantees continuity for mission-critical operations worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative px-6 md:px-10 py-3.5 bg-[#00df82] text-black rounded-none font-black text-[10px] md:text-xs hover:scale-105 transition-all shadow-2xl active:scale-95 uppercase overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                    Explore Systems <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-6 md:px-10 py-3.5 bg-transparent border border-[#00df82]/60 text-[#00df82] rounded-none font-black text-[10px] md:text-xs transition-all hover:bg-[#00df82]/10 flex items-center gap-2 md:gap-3 uppercase tracking-widest"
                >
                  View Specifications
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative z-10"
              >
                {/* Rotating generator visual */}
                <div className="aspect-square relative overflow-hidden glass-panel p-6 md:p-8 border-[#00df82]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-[400px] mx-auto lg:max-w-none">
                  <div className="absolute inset-0 overflow-hidden p-6">
                    {heroGenerators.map((generator, index) => (
                      <Image
                        key={generator.src}
                        src={generator.src}
                        alt={generator.alt}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 36vw, 90vw"
                        className={cn(
                          "object-contain object-center transition-opacity duration-700 p-4",
                          index === activeGenerator ? "opacity-100" : "opacity-0"
                        )}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-x-10 bottom-6 flex items-center justify-center">
                    <div className="flex gap-2">
                      {heroGenerators.map((generator, index) => (
                        <button
                          key={generator.src}
                          type="button"
                          aria-label={`Show ${generator.label}`}
                          onClick={() => setActiveGenerator(index)}
                          className={cn(
                            "h-1.5 transition-all",
                            index === activeGenerator ? "w-8 bg-[#00df82]" : "w-1.5 bg-white/30"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Foundation Section (Updated to match Image 2) */}
      <section className="pt-4 pb-8 !bg-[#F8F9F4] overflow-hidden relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-8 !bg-[#1B4332]"></div>
            <h2 className="text-xl md:text-2xl font-bold !text-[#1B4332] tracking-tight uppercase">
              Technical Foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Tech Experts", 
                desc: "Specialized engineering teams dedicated to structural power integrity and systems integration.", 
                icon: Wrench 
              },
              { 
                title: "Site Visits", 
                desc: "On-site technical assessment and architectural alignment for complex installation environments.", 
                icon: MapPin 
              },
              { 
                title: "Prompt Delivery", 
                desc: "Logistics infrastructure designed for rapid deployment of heavy machinery across all territories.", 
                icon: Truck 
              },
              { 
                title: "Guidelines", 
                desc: "Rigorous compliance with international safety protocols and ISO engineering standards.", 
                icon: ClipboardCheck 
              },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="!bg-white p-5 md:p-6 border !border-[#1B4332] rounded-none flex flex-col items-start min-h-0 md:min-h-[250px] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 !text-[#1B4332]">
                  <node.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-base font-bold !text-[#1B4332] mb-2 uppercase tracking-tight">
                  {node.title}
                </h4>
                
                <p className="!text-[#334D41] text-xs font-medium leading-relaxed">
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with 3D Interaction feel */}
      <section className="py-8 bg-transparent">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-6">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase">Our Domains</h3>
            <div className="h-1 w-24 bg-energy-yellow mx-auto rounded-none shadow-[0_0_15px_#F9A825]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 items-stretch">
            {domainHighlights.map((domain, idx) => (
              <div key={idx} className="group p-5 md:p-6 rounded-none glass-panel transition-all duration-500 hover:bg-industrial-blue/40 hover:shadow-[0_15px_30px_rgba(11,60,93,0.3)] hover:-translate-y-1 h-full flex flex-col">
                <div className="w-12 h-12 rounded-none bg-energy-yellow/95 text-industrial-blue flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-all duration-500">
                  <domain.icon size={22} />
                </div>
                <h4 className="text-base font-black text-white mb-2 uppercase tracking-tight">{domain.title}</h4>
                <p className="text-slate-400 text-[12px] font-medium mb-5 leading-relaxed">
                  {domain.description}
                </p>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {domain.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[12px] text-slate-200 leading-relaxed">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-energy-yellow" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={domain.href}
                  className="mt-auto inline-flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.2em] text-energy-yellow/70 group-hover:text-energy-yellow transition-colors border-t border-white/5 pt-4"
                >
                  VIEW DETAILS <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Organizations We Serve */}
      <section className="py-12 !bg-[#F8F9F4] overflow-hidden border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl font-bold !text-[#1B4332] leading-tight uppercase tracking-tight">
              Trusted By Industry Leaders
            </h2>
            <div className="h-1 w-16 bg-red-600 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industrial Projects",
                clients: ["Arvind Mills Ltd", "Bharath Cements Group", "Sigma Concretes", "Power Build Batteries"],
                icon: Factory,
                image: "/images/industrial_project_bg.png"
              },
              {
                title: "Healthcare & Education",
                clients: ["Chord Road Hospital", "Orchid School", "SJBIT College", "Apoorva Hospital"],
                icon: Hospital,
                image: "/images/healthcare_education_bg.png"
              },
              {
                title: "Commercial Complexes",
                clients: ["Balaji Complex", "Kanaka Apartment", "SN Apartments", "Adithya Apartment"],
                icon: Building2,
                image: "/images/commercial_complex_bg.png"
              },
              {
                title: "Infrastructure Partners",
                clients: ["Starworth Infrastructure", "Viraj Projects", "Chaitanya Projects", "Confident Builders"],
                icon: Wrench,
                image: "/images/infrastructure_partners_bg.png"
              }
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-none p-6 md:p-8 min-h-[300px] md:min-h-[380px] flex flex-col justify-end transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 bg-black"
              >
                {/* Background Image */}
                <Image 
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                
                {/* Background Pattern/Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

                {/* Icon in top right */}
                <div className="absolute top-8 right-8 text-white/40 group-hover:text-white/70 transition-colors duration-500 z-10">
                  <block.icon size={32} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-6 uppercase leading-tight tracking-tight">
                    {block.title.split(' ').map((word, idx) => (
                      <React.Fragment key={idx}>{word} <br /></React.Fragment>
                    ))}
                  </h4>
                  <ul className="space-y-2">
                    {block.clients.map((client, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-none bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Octane CTA - Redesigned for Premium Impact */}
      <section className="py-4 md:py-8 px-4 relative">
        <div className="max-w-7xl mx-auto rounded-none bg-gradient-to-br from-[#0c2b1b] via-[#081a12] to-black relative overflow-hidden p-6 md:p-8 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.7)]">
          {/* Animated Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-energy-yellow/5 blur-[120px] rounded-none pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/5 blur-[120px] rounded-none pointer-events-none"></div>
          <div className="absolute inset-0 industrial-mesh opacity-20"></div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-none uppercase"
            >
              READY TO POWER YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow via-yellow-100 to-energy-yellow">BIGGEST AMBITIONS?</span>
            </motion.h2>
            
            <p className="text-[10px] md:text-xs text-[#b6dfcb] mb-6 font-black uppercase tracking-[0.5em] opacity-60">
              Immediate Consultation for Installations & AMCs.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
              <Link
                href="/contact"
                className="group relative px-8 py-3.5 bg-energy-yellow text-[#0c2b1b] rounded-none font-black text-base hover:scale-105 transition-all shadow-[0_25px_50px_rgba(74,125,101,0.4)] active:scale-95 uppercase overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>

              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                {[COMPANY_INFO.phone[0], COMPANY_INFO.phone[1]].map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-white text-base md:text-lg lg:text-2xl font-black tracking-tighter hover:text-energy-yellow transition-all group whitespace-nowrap"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-energy-yellow/20 group-hover:border-energy-yellow/40 transition-all duration-300">
                      <Phone size={20} className="text-energy-yellow" />
                    </div>
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Simple yet Creative */}
      <section className="py-12 bg-[#04100b] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { label: "Reliability Rate", value: "99.9%" },
              { label: "Expert Support", value: "24/7" },
              { label: "Installed Capacity", value: "500+ MW" },
              { label: "Response Time", value: "15M" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-1/4 flex flex-col items-center group px-8"
              >
                <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-red-600 mb-2 whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="relative">
                  <span className="text-[10px] md:text-xs font-semibold text-[#b6dfcb] uppercase tracking-[0.2em] opacity-60">
                    {stat.label}
                  </span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-industrial-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
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
                className="p-6 md:p-8 rounded-none glass-panel border border-white/5 relative group"
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
