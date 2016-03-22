import {ProjectImage} from "./project-image";

export interface Project {
    id: string;
    name: string;
    description: string;
    poster: string;
    images: ProjectImage[];
}