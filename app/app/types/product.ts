import { Image } from "./image";

export type Product = {
    name: string;
    title: string;
    code: string;
    description: string;
    is_bundler: boolean;
    image: Image;
}