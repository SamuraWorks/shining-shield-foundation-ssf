import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Media from "@/components/Media";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
    title: "News & Updates | Shining Shield Foundation",
    description: "Latest news, updates, and announcements from Shining Shield Foundation. Stay informed about our community initiatives and educational programs.",
};

export default function NewsPage() {
    return (
        <main>
            <Header />
            <div className="pt-20">
                <Media />
            </div>
            <WhatsAppButton />
            <Footer />
        </main>
    );
}
