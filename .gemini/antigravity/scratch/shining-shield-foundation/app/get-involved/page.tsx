import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
    title: "Get Involved | Shining Shield Foundation",
    description: "Join the Shining Shield Foundation as a volunteer or partner. Together we can make a difference in the lives of students across Sierra Leone.",
};

export default function GetInvolvedPage() {
    return (
        <main>
            <Header />
            <div className="pt-20">
                <GetInvolved />
            </div>
            <WhatsAppButton />
            <Footer />
        </main>
    );
}
