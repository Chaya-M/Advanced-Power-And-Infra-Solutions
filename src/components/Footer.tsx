import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Zap, ExternalLink, MessageCircle } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

const Footer = () => {
    return (
        <footer className="bg-industrial-dark text-slate-300">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Bio */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                                <Zap className="h-6 w-6 text-energy-yellow fill-energy-yellow" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                AIP SOLUTIONS
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Excellence in Diesel Generator solutions since 2009. Authorized dealer for Mahindra Powerol, providing reliable backup power for construction, industry, and residential needs.
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
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            Quick Links
                            <span className="w-8 h-1 bg-energy-yellow rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Generator Rental", "Generator Sales", "Projects", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                                        className="hover:text-energy-yellow transition-colors flex items-center gap-2 group"
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
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            Our Services
                            <span className="w-8 h-1 bg-energy-yellow rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {SERVICES.slice(0, 6).map((service) => (
                                <li key={service.title}>
                                    <Link
                                        href={`/services#${service.slug}`}
                                        className="hover:text-energy-yellow transition-colors text-sm"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            Contact Us
                            <span className="w-8 h-1 bg-energy-yellow rounded-full"></span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex gap-3">
                                <MapPin className="h-5 w-5 text-energy-yellow shrink-0 mt-1" />
                                <span className="text-sm leading-relaxed">{COMPANY_INFO.address}</span>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="h-5 w-5 text-energy-yellow shrink-0" />
                                <div className="flex flex-col text-sm">
                                    {COMPANY_INFO.phone.map(p => (
                                        <a key={p} href={`tel:${p}`} className="hover:text-white transition-colors">{p}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="h-5 w-5 text-energy-yellow shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm truncate hover:text-white transition-colors">
                                    {COMPANY_INFO.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-white/30">© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/30 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
