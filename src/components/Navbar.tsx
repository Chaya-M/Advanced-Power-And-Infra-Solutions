"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Rental", href: "/rental" },
        { name: "Sales", href: "/sales" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-2xl border",
                scrolled
                    ? "bg-industrial-dark/95 backdrop-blur-2xl shadow-2xl border-white/5 py-2"
                    : "bg-industrial-blue/20 backdrop-blur-lg border-white/10 py-4"
            )}
        >
            <div className="px-6 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
                            <div className="relative">
                                <div className="absolute inset-0 bg-energy-yellow blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="bg-industrial-blue p-2.5 rounded-xl relative z-10 border border-white/10">
                                    <Zap className="h-6 w-6 text-energy-yellow fill-energy-yellow" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tight leading-none transition-colors text-white">
                                    ADVANCED POWER
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.2em] transition-colors text-energy-yellow">
                                    & INFRA SOLUTIONS
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105",
                                        scrolled ? "text-white/80 hover:bg-white/5 hover:text-energy-yellow" : "text-white hover:bg-white/10"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="ml-4 pl-4 border-l border-white/10">
                                <a
                                    href={`tel:${COMPANY_INFO.phone[0]}`}
                                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl shadow-[0_0_25px_rgba(249,168,37,0.5)] text-sm font-black text-industrial-blue bg-energy-yellow hover:bg-yellow-400 hover:scale-105 transition-all active:scale-95"
                                >
                                    <Phone className="mr-2 h-4 w-4 fill-industrial-blue" />
                                    ENQUIRE
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <a
                            href={`tel:${COMPANY_INFO.phone[0]}`}
                            className="p-2 bg-energy-yellow rounded-full text-industrial-blue"
                        >
                            <Phone className="h-5 w-5" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none",
                                scrolled ? "text-industrial-blue" : "text-white"
                            )}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute w-full transition-all duration-300 ease-in-out bg-white border-b border-slate-200 overflow-hidden",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                )}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-industrial-blue"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 px-3">
                        <a
                            href={`tel:${COMPANY_INFO.phone[0]}`}
                            className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-bold text-industrial-blue bg-energy-yellow hover:bg-yellow-500"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Call +91 9686098702
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
