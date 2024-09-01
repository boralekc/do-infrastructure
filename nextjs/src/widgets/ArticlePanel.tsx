import { ICategory, ICategoryData } from "@/interfaces/ICategory";
import { categoryAPI } from "@/shared/api/CategoryService";
import Link from "next/link";

interface ArticlePanelProps {
    article: {
        attributes: {
          tags: {
            data: []
          };
          categories: {
            data: {
              attributes: {
                title: string;
                name: string;
                slug: string;
              }
            }[]
          }
        };
      }[];
}

const ArticlePanel: React.FC<ArticlePanelProps> = async ({ article }) => {
    const categorySlug = article.map(item => item.attributes.categories.data)[0].map(item => item.attributes.slug)[0]
    const categories = await categoryAPI.getOneCategory(categorySlug);
    const articleData = categories.map((item: ICategory) => item.attributes.articles.data)[0];
    
    return (
        <>
              <div className="grid bg-stone-100 px-4 py-4 mr-2">
                <div className="pb-2 font-bold">Читайте также</div>
                <ul className="border-t-2 border-red-700">
                {articleData.map(({ attributes: { title, slug } }: { attributes: { title: string; slug: string } }, index: number) => (
                <li key={index} className="flex items-center py-1 text-sm border-b">
                <Link href={`/${categorySlug}/${slug}`} className="hover:text-red-500">{title}</Link>
                </li>
                ))}
                </ul>
              </div>
        </>
    );
}

export default ArticlePanel;
