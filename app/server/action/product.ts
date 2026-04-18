import type { TShoesDetail, TShoes } from "@/app/types";

export const fetchData = async () => {
    try {
        const response = await fetch(
            "https://apistore.cybersoft.edu.vn/api/Product",
            {
                next: {
                    revalidate: 60
                },
            }
        );
        const result = await response.json();
        return result.content;
    } catch (error) {
        return error;
    }
}

export const fetchDetail = async (id: string): Promise<TShoesDetail> => {
    try {
        const response = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`);
        const result = await response.json();
        return result.content;
    } catch (error) {
        throw error;
    }
}

export const fetchDataByKeyword = async (keyword: string): Promise<TShoes[]> => {
    try {
        const response = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
        const result = await response.json();
        return result.content;
    } catch (error) {
        throw error;
    }
}