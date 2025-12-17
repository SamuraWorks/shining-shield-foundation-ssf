import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function SupportProducts() {
    const products = [
        {
            name: "Official Foundation Cap",
            price: "$25.00",
            image: "bg-slate-200", // Placeholder class
        },
        {
            name: "Supporter T-Shirt",
            price: "$30.00",
            image: "bg-slate-300",
        },
        {
            name: "Lapel Pin - Gold Edition",
            price: "$15.00",
            image: "bg-slate-200",
        },
    ];

    return (
        <section id="support-products" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Support The Cause</h2>
                    <h3 className="text-3xl md:text-3xl font-heading font-bold text-primary mb-4">
                        Wear Your Support
                    </h3>
                    <p className="text-slate-600">
                        Proceeds from every purchase go directly to our emergency response fund.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-12 border border-slate-100 text-center shadow-sm">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-6 shadow-sm border border-slate-100">
                        <ShoppingBag size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-4">Official Merchandise Coming Soon</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        We are currently designing a range of official Shining Shield Foundation wear, including T-shirts, caps, and lapel pins. Proceeds will support our educational initiatives.
                    </p>
                    <Link href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1">
                        Pre-order or Enquire
                    </Link>
                </div>
            </div>
        </section>
    );
}
