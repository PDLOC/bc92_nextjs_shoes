import { fetchDataByKeyword } from "@/app/server/action/product";
import Shoes from "@/app/components/Shoes";

type Props = {
    searchParams: {
        // q theo params trên thanh search
        q: string;
    };
}

export const metadata = {
    title: "Shoes App - Search",
    description:
        "Explore our wide range of shoes with the best prices and quality.",
    openGraph: {
        title: "Shoes App - Search",
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

};

export default async function Search(props: Props) {
    console.log(props);
    const { searchParams } = props;
    const { q } = await searchParams;
    const data = await fetchDataByKeyword(q);
    console.log("data: ", data);


    const renderList = () => {
        return data.map((shoes) => {
            return <Shoes key={shoes.id} shoes={shoes} />
        });
    }

    if (data.length === 0) return <h1>No product...</h1>

    return (
        <div className="grid grid-cols-3">
            {renderList()}
        </div>
    )
}
