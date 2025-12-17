"use client";

import { CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";

export default function Donate() {
    const [amount, setAmount] = useState<string>("100");
    const [customAmount, setCustomAmount] = useState<string>("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleAmountClick = (val: string) => {
        setAmount(val);
        setCustomAmount("");
    };

    const handleDonate = () => {
        const finalAmount = customAmount || amount;
        const name = `${firstName} ${lastName}`.trim();

        if (!finalAmount || !name) {
            alert("Please provide your name and a donation amount.");
            return;
        }

        // Construct WhatsApp Message
        const message = `Hello Shining Shield Foundation, my name is ${name}${email ? ` (${email})` : ""}. I would like to pledge a donation of $${finalAmount} to support your educational initiatives. How can I proceed with the transfer?`;

        // Open WhatsApp
        const waLink = `https://wa.me/23232778016?text=${encodeURIComponent(message)}`;
        window.open(waLink, "_blank");
    };

    return (
        <section id="donate" className="py-20 bg-gradient-to-br from-primary to-[#002366] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Make a Difference</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                            Your Contribution Saves Lives
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            We rely on the generosity of partners and citizens to maintain our readiness. Every cent is accounted for and directed towards our core mission.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <Smartphone className="text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Mobile Money Support</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                                            <span>OM</span>
                                        </div>
                                        <p className="text-white text-base font-bold">
                                            078 921 412
                                        </p>
                                    </div>
                                    <p className="text-xs italic opacity-70 text-slate-400 mt-1">(Please verify recipient name before sending)</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                                <p className="text-sm text-yellow-100">
                                    <strong>Note:</strong> Donations are currently received through direct channels. This form helps us coordinate your secure transfer directly with our finance team via WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 text-slate-800 shadow-2xl">
                        <h4 className="text-2xl font-bold font-heading text-primary mb-6">Secure Donation Pledge</h4>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleDonate(); }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Donation Amount (USD/SLE)</label>
                                <div className="grid grid-cols-4 gap-2 mb-4">
                                    {["50", "100", "250"].map((val) => (
                                        <button
                                            key={val}
                                            type="button"
                                            onClick={() => handleAmountClick(val)}
                                            className={`px-2 py-2 border rounded-md text-sm font-medium transition-colors ${amount === val && !customAmount
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-slate-300 hover:bg-slate-50 text-slate-700"
                                                }`}
                                        >
                                            ${val}
                                        </button>
                                    ))}
                                    <input
                                        type="text"
                                        placeholder="Other"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        className={`px-2 py-2 border rounded-md text-sm font-medium text-center outline-none focus:ring-2 focus:ring-primary ${customAmount ? "border-primary ring-2 ring-primary bg-primary/5" : "border-slate-300"
                                            }`}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-md shadow-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <CreditCard size={20} />
                                Proceed to Donate
                            </button>

                            <p className="text-xs text-center text-slate-500 mt-4">
                                We will communicate via WhatsApp to securely finalize your donation.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
