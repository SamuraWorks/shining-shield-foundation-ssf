import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
            {/* Real Life Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/gallery/rec-donation/rec-2.jpg"
                    alt="Shining Shield Foundation Community"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay - Brightened */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/80 to-[#0033A0]/60 mix-blend-multiply"></div>
            </div>

            {/* Background pattern texture on top of image for polish */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <Reveal width="100%">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-8 border border-white/10">
                        <ShieldCheck size={14} className="text-accent" />
                        <span>Community Initiative • Est. 2025</span>
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.1}>
                    <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight tracking-tight mb-6 uppercase">
                        Shining Shield Foundation (SSF)
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <p className="max-w-2xl mx-auto text-2xl font-light text-accent italic mb-10 leading-relaxed font-heading">
                        "Together We Shield, Together We Shine"
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.3}>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                        Dedicated to supporting brilliant but less privileged students in Sierra Leone through educational materials and community outreach.
                    </p>
                </Reveal>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#donate"
                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-md shadow-lg shadow-black/20 transition-all transform hover:-translate-y-1 text-center"
                    >
                        Make a Contribution
                    </Link>
                    <Link
                        href="#about"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-md border border-white/10 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2 group"
                    >
                        Our Mission
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
