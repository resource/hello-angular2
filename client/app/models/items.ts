import {ItemImage} from "./item-image";

export interface Item {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    poster: string;
    images: ItemImage[];
}