import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

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

const BreadcrumbsCategory: React.FC<BreadcrumbsProps> = ({ pathname, categories }) => {

    const activeCategory = categories.find(
        (category) => `/${category.attributes.slug}` === pathname
      );
    
      if (!activeCategory) {
        return null; // If no active category matches, return null
      }

    return (
    <div className='flex items-center justify-center bg-white border-b h-10 shadow-md mt-0.5 font-bold'>
        <div className="flex items-center justify-start w-3/4 h-full">
        <div>
          <Link href='/'>
            <div className='hover:text-red-700 mr-4 text-sm'>Главная</div>
          </Link>
        </div>
        <AiFillCaretRight className="mr-4"/>
            <div
              className={`flex justify-center items-center text-center h-full font-bold text-red-700 text-sm`}>
              {activeCategory.attributes.name}
            </div>
      </div>
      </div>
    )
}

export default BreadcrumbsCategory