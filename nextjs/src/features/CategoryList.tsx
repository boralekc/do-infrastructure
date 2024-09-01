import React from "react";
import HomeCardArticle from "@/entities/homePage/HomeCardArticle";
import HomeBigCard from "@/entities/homePage/HomeBigCard";

interface ArticleContent {
  type: string;
  children?: { text: string; type: string }[]; // Добавляем опциональное свойство для параграфов
  image?: {
    url: string;
    ext: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
    caption: string | null;
    formats: { large: { url: string } };
  }; // Добавляем опциональное свойство для изображений
}

interface CategoryProps {
  categorySlug: string;
  categoryName: string;
  articles: {
    data: {
      id: number;
      attributes: {
        title: string;
        content: ArticleContent[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        description: string;
      };
    }[];
  };
}

const CategoryList: React.FC<CategoryProps> = ({
  articles,
  categorySlug,
  categoryName,
}) => {
  if (!articles || !articles.data || articles.data.length === 0) {
    return <div>No articles found</div>;
  }

  const sortedArticles = [...articles.data].sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

  return (
    <>
      <div className="flex justify-center pt-6 pb-2 sm:hidden">
        <div className="w-11/12 font-bold">{categoryName}</div>
      </div>
      <div className="flex justify-center items-center lg:pt-10 bg-gradient-to-b">
        <div className="justify-center w-11/12">
          <div className="lg:flex lg:space-x-4">
            {sortedArticles.slice(0, 3).map((article) => (
              <HomeCardArticle
                key={article.id}
                title={article.attributes.title}
                content={article.attributes.content}
                articleSlug={article.attributes.slug}
                categorySlug={categorySlug}
                description={article.attributes.description}
              />
            ))}
          </div>
          <div className="flex space-x-4 py-4 px-4 border rounded-xl bg-white">
            <div className="flex flex-col">
              <div className="lg:grid grid-cols-4 text-sm">
                {sortedArticles.slice(3, 11).map((article) => (
                  <HomeBigCard
                    key={article.id}
                    title={article.attributes.title}
                    articleSlug={article.attributes.slug}
                    categorySlug={categorySlug}
                    description={article.attributes.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex justify-center space-x-4 mt-4">
            {sortedArticles.slice(11, 14).map((article) => (
              <HomeCardArticle
                key={article.id}
                title={article.attributes.title}
                content={article.attributes.content}
                articleSlug={article.attributes.slug}
                categorySlug={categorySlug}
                description={article.attributes.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
