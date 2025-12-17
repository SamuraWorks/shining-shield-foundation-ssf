export interface NewsItem {
    id: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    content: string[]; // Array of paragraphs for the full article
    image?: string; // Optional main image for the article
}

export const newsData: NewsItem[] = [
    {
        id: "back-to-school-donation-2025",
        category: "Activity",
        date: "September 25, 2025",
        title: "Back-to-School Donation at Kossoh Town",
        excerpt: "Shining Shield Foundation provided educational support to students at the Rural Education Committee (REC) school, ensuring a strong start to the academic year.",
        content: [
            "In a bid to support education and empower the next generation, the Shining Shield Foundation (SSF) successfully organized a 'Back-to-School' donation drive at the Rural Education Committee (REC) School in Kossoh Town, Jui.",
            "The event, held on September 25, 2025, saw the distribution of essential learning materials including notebooks, pens, pencils, and mathematical sets to over 50 deserving students. This initiative is part of SSF's core mission to bridge the resource gap for brilliant but less privileged children in Sierra Leone.",
            "Speaking at the event, the Foundation's representatives emphasized the importance of education as a tool for national development. 'Our motto, Together We Shield, Together We Shine, reflects our belief that when we protect the educational dreams of a child, the entire community shines,' said the program coordinator.",
            "The school administration and parents expressed profound gratitude for the gesture, noting that it came at a critical time when many families were struggling with the cost of school supplies. The Shining Shield Foundation has pledged to continue such engagements, expanding its reach to more schools in the coming academic terms."
        ],
        image: "/gallery/rec-donation/rec-2.jpg"
    },
    {
        id: "community-outreach-program",
        category: "Upcoming",
        date: "To Be Announced",
        title: "Community Outreach Program",
        excerpt: "We are currently planning our next outreach to identify and support more students in need. Stay tuned for details.",
        content: [
            "The Shining Shield Foundation is actively planning its next major Community Outreach Program. This upcoming initiative aims to conduct a comprehensive needs assessment in identified underserved communities around the Western Rural District.",
            "Our goal is to identify talented students who are at risk of dropping out due to financial constraints. By engaging directly with community leaders and families, we hope to build a sustainable support system that goes beyond one-off donations.",
            "Details regarding the specific locations and dates for this outreach will be announced shortly. We invite volunteers and partners who are interested in joining our field teams to get in touch with us via our contact page or WhatsApp."
        ]
    },
    {
        id: "foundation-establishment",
        category: "Announcement",
        date: "2025",
        title: "Foundation Establishment",
        excerpt: "Shining Shield Foundation officially commences operations with a focus on education and community empowerment.",
        content: [
            "We are proud to announce the official establishment of the Shining Shield Foundation (SSF). Born from a desire to make a tangible difference in Sierra Leone, SSF is a community initiative dedicated to rapid emergency response, educational support, and youth empowerment.",
            "Visualized as a 'Shield' against the hardships that threaten the potential of our youth, the foundation stands on the pillars of Integrity, Service, and Community. Our founder and team are committed to operating with transparency and direct impact.",
            "As we begin this journey, we acknowledge that we are currently in the process of formal registration with the government of Sierra Leone. However, our commitment to service starts now. We look forward to growing together with our partners and beneficiaries. Together We Shield, Together We Shine."
        ]
    }
];
