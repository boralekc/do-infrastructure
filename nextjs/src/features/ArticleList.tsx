import CardArticle from '@/entities/categoryPage/CardArticle';
import React from 'react';

interface ArticleContent {
    type: string;
    children?: { text: string; type: string }[]; // Добавляем опциональное свойство для параграфов
    image?: { url: string; ext: string; mime: string; name: string; size: number; width: number; height: number; caption: string | null; formats: { large: { url: string } } }; // Добавляем опциональное свойство для изображений
}

interface ArticleListProps {
    categorySlug: string;
    categoryName: string;
    articles: {
        data: {
            id: number;
            attributes: {
                title: string;
                content: ArticleContent[]
                createdAt: string,
                updatedAt: string,
                publishedAt: string
                slug: string;
                description: string;
            }
        }[]
    }
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, categorySlug, categoryName }) => {

    if (!articles || !articles.data || articles.data.length === 0) {
        return <div>No articles found</div>;
    }

    const sortedArticles = [...articles.data].sort((a, b) => {
        return new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime();
    });

    return (
        <div className='flex justify-center pt-10 mb-10'>
        <section className='grid justify-center items-center bg-gradient-to-b w-3/4'>
            <div className='pb-4 mb-6 text-xl font-bold border-b-2 border-b-black '>{categoryName}</div>
            <div className='grid justify-center'>
                {sortedArticles.map((article) => (
                    <CardArticle 
                        key={article.id} 
                        title={article.attributes.title}
                        articleSlug={article.attributes.slug}
                        categorySlug={categorySlug}
                        description={article.attributes.description}
                    />
                ))}
            </div>
        </section>
        </div>
    );
}

export default ArticleList;
