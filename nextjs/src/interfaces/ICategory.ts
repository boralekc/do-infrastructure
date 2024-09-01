
export interface ICategory {
    id: number;
    attributes: {
        header_name: string;
        name: string;
        articles: {
            data: {
                id: number;
                attributes: {
                    title: string;
                    content: [];
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    slug: string;
                    description: string;
                };
            }[];
        };
        slug: string;
    };
}

export interface ICategoryData {
    data: {
        id: number;
        attributes: {
            name: string;
            header_name: string;
            slug: string;
            articles: {
                title: string;
                slug: string;
            }[];
        };
    };
}