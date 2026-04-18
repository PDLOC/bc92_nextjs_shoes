import { fetchData } from "@/app/server/action/product"
import Shoes from "@/app/components/Shoes";
import type { TShoes } from "@/app/types";

export const metadata = {
    title: "Shoes App - Home",
    description:
        "Explore our wide range of shoes with the best prices and quality.",
    openGraph: {
        title: "Shoes App - Home",
        description:
            "Explore our wide range of shoes with the best prices and quality.",
        url: "https://shoesshopbc70.vercel.app",
        images: [
            {
                url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
                width: 800,
                height: 600,
                alt: "Shoes App",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shoes App - Home",
        description:
            "Explore our wide range of shoes with the best prices and quality.",
        images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
    },
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Store",
        name: "Shoes App",
        url: "https://yourwebsite.com",
        description:
            "Explore our wide range of shoes with the best prices and quality.",
        image: "https://yourwebsite.com/images/og-image.jpg",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://yourwebsite.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    },
};

export default async function About() {
    const data = await fetchData();
    console.log("data: ", data);

    const renderListShoes = () => {
        if (data) {
            return data.map((shoes: TShoes) => <Shoes key={shoes.id} shoes={shoes} />);

        }
    }

    return (
        <div className="container mx-auto lg:mx-auto ">
            <div className="grid grid-cols-3 gap-4">
                {renderListShoes()}
            </div>
        </div>
    )
}
