import { fetchDetail } from "@/app/server/action/product"
import { TShoesDetail } from "@/app/types";
import Image from "next/image";

type Props = {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: any) {
    const { id } = await params;
    const prodDetail = await fetchDetail(id);

    return {
        title: `${prodDetail.name} - Product Detail`,
        description: prodDetail.description,
        openGraph: {
            title: prodDetail.name,
            description: prodDetail.description,
            url: `https://yourwebsite.com/products/${id}`,
            images: [
                {
                    url: prodDetail.image,
                    width: 500,
                    height: 500,
                    alt: prodDetail.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: prodDetail.name,
            description: prodDetail.description,
            images: [prodDetail.image],
        },
    };
}

export default async function Detail(props: Props) {
    console.log(props);
    const { params } = props;
    const { id } = await params;
    const data = await fetchDetail(id);


    return (
        <div>
            Detail
            <div>
                <p>Name: {data.name}</p>
                <Image src={data.image} alt={data.imgLink} width={200} height={200} />
                <p>Desctiption: {data.description}</p>
                <p>Price: {data.price}</p>
                <p>Quantity: {data.quantity}</p>
            </div>
        </div>
    )
}
