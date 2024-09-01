'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillCaretRight } from 'react-icons/ai';

interface BreadcrumbsProps {
    categories: {
      attributes: {
        name: string;
        slug: string;
        articles: {
          data: {
            attributes: {
                slug: string;
                title: string;
            }
          }[];
        };
      };
    }[];
    pathname: string;
  }

const BreadcrumbsArticle: React.FC<BreadcrumbsProps> = ({ categories }) => {
    const pathname = usePathname();
    const pathParts = pathname.split('/');
    const categorySlug = pathParts[1];
    const articleSlug = pathParts[2]

    const activeCategory = categories.find((category) => category.attributes.slug === categorySlug); 
    const activeArticle = categories.map((category) => category.attributes.articles.data)[0].find(item => item.attributes.slug === articleSlug)

    return (
        <div className="flex justify-center bg-white border-b h-10 shadow-md my-0.5 font-bold">
          <div className="flex items-center justify-start w-11/12 h-full">
            <div>
              <Link href="/">
                <div className="hover:text-red-700 mr-4 text-sm">Главная</div>
              </Link>
            </div>
            <AiFillCaretRight className="mr-4" />
            <div className="flex items-center hover:text-red-700 text-sm">
              <Link href={`/${categorySlug}`} className="mr-4">{activeCategory?.attributes.name}</Link>
            </div>
            <AiFillCaretRight className="mr-4 text-sm" />
            <div className="text-red-700">{activeArticle?.attributes.title}</div>
          </div>
        </div>
      );
}

export default BreadcrumbsArticle