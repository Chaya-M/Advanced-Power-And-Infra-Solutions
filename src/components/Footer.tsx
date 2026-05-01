import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Zap, ExternalLink, MessageCircle } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

const Footer = () => {
    return (
        <footer className="bg-industrial-dark text-slate-300">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Bio */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-white p-1 rounded-lg border border-white/10">
                                <img src="/icon.png" alt="APIS Logo" className="h-8 w-auto" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                APIS SOLUTIONS
                            </span>
                        </Link>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Excellence in Diesel Generator solutions since 2009. Dealers for Cummins, Tata, KOEL, Caterpillar, TMTL, and Ashok Leyland, providing reliable backup power for construction, industry, and residential needs.
                        </p>
                        <div className="flex gap-4">
                            <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`} className="bg-white/5 p-2 rounded-full hover:bg-energy-yellow hover:text-industrial-blue transition-colors border border-white/5">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                            <a href={`tel:${COMPANY_INFO.phone[0]}`} className="bg-white/5 p-2 rounded-full hover:bg-energy-yellow hover:text-industrial-blue transition-colors border border-white/5">
                                <Phone className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2 uppercase tracking-widest opacity-80">
                            Quick Links
                            <span className="w-8 h-0.5 bg-energy-yellow rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Services", "Projects", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={
                                            link === "Home"
                                                ? "/"
                                                : link === "About Us"
                                                  ? "/about"
                                                  : `/${link.toLowerCase().replace(" ", "-")}`
                                        }
                                        className="hover:text-energy-yellow transition-colors flex items-center gap-2 group text-xs font-medium"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-energy-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2 uppercase tracking-widest opacity-80">
                            Our Services
                            <span className="w-8 h-0.5 bg-energy-yellow rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {SERVICES.slice(0, 6).map((service) => (
                                <li key={service.title}>
                                    <Link
                                        href={`/services#${service.slug}`}
                                        className="hover:text-energy-yellow transition-colors text-xs font-medium"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2 uppercase tracking-widest opacity-80">
                            Contact Us
                            <span className="w-8 h-0.5 bg-energy-yellow rounded-full"></span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex gap-3">
                                <MapPin className="h-4 w-4 text-energy-yellow shrink-0 mt-0.5" />
                                <span className="text-xs leading-relaxed">{COMPANY_INFO.address}</span>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="h-4 w-4 text-energy-yellow shrink-0" />
                                <div className="flex flex-col text-xs">
                                    {COMPANY_INFO.phone.map(p => (
                                        <a key={p} href={`tel:${p}`} className="hover:text-white transition-colors">{p}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="h-4 w-4 text-energy-yellow shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs truncate hover:text-white transition-colors">
                                    {COMPANY_INFO.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
