import Link from "next/link";
import { FC } from "react";
import BlockTagItemArticle from "../../features/TagsList";

interface ArticleListProps {
    title: string;
    categorySlug: string;
    articleSlug: string;
    description: string;
}

const CardArticle: FC<ArticleListProps> = ({ title, description, categorySlug, articleSlug }) => {
    
    return (
        <Link href={`/${categorySlug}/${articleSlug}`} className="mb-3 bg-white border rounded-md">
            <div className="px-3 py-3 h-3/4"> 
            <div className="font-bold text-xl">{title}</div>
            <div className="line-clamp-6 mt-2 text-sm">{description}</div>
            </div>
        </Link>
    );   
};

export default CardArticle;
