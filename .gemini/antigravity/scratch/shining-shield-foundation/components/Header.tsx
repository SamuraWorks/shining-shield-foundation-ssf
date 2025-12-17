"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Founder", href: "/founder" },
        { name: "Activities", href: "/activities" },
        { name: "Impact", href: "/impact" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                            <img
                                src="/logo.jpg"
                                alt="Shining Shield Foundation Logo"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold text-primary font-heading tracking-tight leading-none">
                                Shining Shield
                            </span>
                            <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wider uppercase">
                                Foundation (SSF)
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/get-involved"
                            className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                        >
                            Get Involved
                        </Link>
                        <Link
                            href="/donate"
                            className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-md shadow-md transition-all transform hover:-translate-y-0.5"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-2">
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-slate-700 py-2 border-b border-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#get-involved"
                            onClick={() => setIsOpen(false)}
                            className="text-base font-semibold text-primary py-2"
                        >
                            Get Involved
                        </Link>
                        <Link
                            href="#donate"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center px-6 py-3 bg-accent text-white font-semibold rounded-md"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
