import { fetchData } from "@/app/server/action/product"
import Shoes from "@/app/components/Shoes";
import type { TShoes } from "@/app/types";

export const metadata = {
    title: "Shoes App - About Us",
    description:
        "Learn more about Shoes App, our mission, and our commitment to providing the best quality footwear and prices.",
    openGraph: {
        title: "Shoes App - About Us",
        description:
            "Learn more about Shoes App, our mission, and our commitment to providing the best quality footwear and prices.",
        url: "https://shoesshopbc70.vercel.app/about",
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
        title: "Shoes App - About Us",
        description:
            "Learn more about Shoes App, our mission, and our commitment to providing the best quality footwear and prices.",
        images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
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
