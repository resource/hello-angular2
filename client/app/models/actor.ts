import {ActorImage} from "./actor-image";

export interface Actor {
    id: string;
    name: string;
    description: string;
    poster: string;
    images: ActorImage[];
}