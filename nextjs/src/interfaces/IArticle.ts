import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface IArticle {
    data: {
        id: number;
        attributes: {
            title: string;
            content: BlocksContent;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            slug: string;
            description: string;
        };
    }[];
}

export interface IOneArticle {
        id: number;
        attributes: {
            title: string;
            content: BlocksContent;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            slug: string;
            description: string;
        };
}
