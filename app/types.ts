export type TinitState<T> = {
    loading: boolean,
    data: null | T,
    error: null | any,
}

export type TShoes = {
    sizes: number[],
    id: number,
    name: string,
    alias: string,
    price: number,
    description: string,
    size: string,
    shortDescription: string,
    quantity: number;
    deleted: boolean,
    categories: string,
    relatedProducts: string,
    feature: boolean,
    image: string,
    imgLink: string,
}

export type TShoesDetail = {
    id: number,
    name: string,
    price: number,
    description: string,
    shortDescription: string,
    quantity: number;
    feature: boolean,
    image: string,
    imgLink: string,
}