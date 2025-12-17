import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Printer } from "lucide-react";
import { notFound } from "next/navigation";
import { newsData } from "@/data/newsData";

export async function generateStaticParams() {
    return newsData.map((item) => ({
        id: item.id,
    }));
}

export default function NewsArticle({ params }: { params: { id: string } }) {
    const article = newsData.find((item) => item.id === params.id);

    if (!article) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Back Link */}
                <Link
                    href="/#media"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-medium"
                >
                    <ArrowLeft size={18} />
                    Back to News
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    {/* Header Image */}
                    {article.image && (
                        <div className="h-64 md:h-96 w-full relative">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="p-8 md:p-12">
                        {/* Meta Data */}
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-6 pb-6 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                {article.date}
                            </div>
                            <div className="flex-grow"></div>
                            <button className="hover:text-primary flex items-center gap-2 transition-colors">
                                <Share2 size={16} /> <span className="hidden sm:inline">Share</span>
                            </button>
                            <button className="hover:text-primary flex items-center gap-2 transition-colors">
                                <Printer size={16} /> <span className="hidden sm:inline">Print</span>
                            </button>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-8 leading-tight">
                            {article.title}
                        </h1>

                        {/* Content */}
                        <div className="prose prose-lg text-slate-700 max-w-none">
                            {article.content.map((paragraph, index) => (
                                <p key={index} className="mb-6 last:mb-0 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Footer / CTA */}
                        <div className="mt-12 pt-8 border-t border-slate-100 bg-primary/5 -mx-8 -mb-12 md:-mx-12 md:-mb-12 p-8 text-center">
                            <h3 className="text-xl font-bold text-primary mb-2">Want to support this cause?</h3>
                            <p className="text-slate-600 mb-6">Your contribution helps us continue this vital work.</p>
                            <Link
                                href="/#donate"
                                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
                            >
                                Make a Donation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
