import { Shield, Target, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            Empowering students to build a brighter future.
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The Shining Shield Foundation is a community-driven initiative focused on bridging the gap for talented students who lack the resources to pursue their education. We believe that by shielding our youth from financial limitations, we allow them to shine.
                        </p>

                        <div className="space-y-6 mt-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Our Mission</h4>
                                    <p className="text-slate-600">
                                        To support brilliant but less privileged students through educational materials and back-to-school initiatives.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Our Vision</h4>
                                    <p className="text-slate-600">
                                        A community where every child has the tools they need to succeed and contribute to society.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Community First</h4>
                                    <p className="text-slate-600">
                                        We work directly with communities to identify needs and deliver support where it matters most.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer Box */}
                        <div className="mt-10 p-4 border-l-4 border-accent bg-slate-50 rounded-r-md">
                            <p className="text-sm text-slate-500 italic">
                                * Note: Shining Shield Foundation is a community initiative currently in the process of official registration in Sierra Leone.
                            </p>
                        </div>
                    </div>

                    {/* Visual/Image Side - Using CSS Patterns since no images yet */}
                    <div className="relative h-full min-h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-primary/10"></div>
                        {/* Placeholder for an actual image */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                            <div className="w-full h-full bg-gradient-to-tr from-primary to-slate-800 opacity-90"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                                <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full p-2 flex items-center justify-center">
                                    <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-white font-heading font-medium text-xl">Service Above Self</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
