export interface Cart{ 
    id: string, 
    name: string, 
    price: number, 
    author: string, 
    categories: string, 
    desc: string, 
    image: string, 
    quantity?: number | undefined, 
    cart?: any,
    cartCount?: number | undefined
}

export interface PriceSummary{
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number
}
