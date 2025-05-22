import { ImageType } from "./image";

export type Product = {
    name: string;
    price: number;
    colors: { id: number; color: string }[];
    images: ImageType[];
    sizes: { id: number; size: string }[];
    parcel: (
        | { id: number; text: string; parcelValue: number; total: number; minValue: null }
        | { id: number; text: string; parcelValue: null; total: null; minValue: number }
    )[];
}