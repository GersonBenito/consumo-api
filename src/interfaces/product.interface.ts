export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    description: string;
    rating: Rating;
}

interface Rating {
    rate: number;
    count: number;
}