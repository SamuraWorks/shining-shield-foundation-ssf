import { Quote } from "lucide-react";

export default function Founder() {
    return (
        <section id="founder" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative w-full max-w-sm mx-auto bg-slate-200 rounded-lg overflow-hidden shadow-xl border-8 border-white">
                            {/* Photo */}
                            <img
                                src="/founder.jpg"
                                alt="Blessing Conteh"
                                className="w-full h-auto object-cover"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-6 text-white pt-24">
                                <p className="font-heading font-bold text-xl">Blessing Conteh</p>
                                <p className="text-sm opacity-90 mb-2">Founder & CEO</p>
                                <p className="text-xs italic opacity-80 leading-relaxed">"Every child deserves the shield of education to protect their dreams."</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-2/3">
                        <div className="mb-6">
                            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Leadership</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                                A Message from the Founder
                            </h3>
                        </div>

                        <div className="relative">
                            <Quote size={48} className="absolute -top-4 -left-2 text-accent/20 transform -scale-x-100" />
                            <blockquote className="text-lg md:text-xl text-slate-600 leading-relaxed italic pl-8 border-l-4 border-accent/30 py-2 mb-8">
                                "Education is the greatest shield we can give to our children. When we support a student, we are not just helping an individual; we are securing the future of our community."
                            </blockquote>
                        </div>

                        <div className="prose prose-slate text-slate-600">
                            <p className="mb-4">
                                Blessing Conteh is a passionate advocate for education and community development. A graduate of the <strong>Institute of Public Administration and Management (IPAM)</strong> with a <strong>BSc in Applied Accounting</strong>, she combines her financial expertise with a drive to make a tangible difference in the lives of the less privileged.
                            </p>
                            <p>
                                As the CEO of Catherine Skincare, Blessing brings entrepreneurial spirit and leadership to the Shining Shield Foundation. She founded this initiative in 2025 with a singular goal: to ensure that financial barriers do not stop brilliant minds from achieving their potential.
                            </p>
                        </div>

                        {/* Signature Placeholder */}
                        <div className="mt-8 font-script text-3xl text-primary opacity-80">
                            Blessing Conteh
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
