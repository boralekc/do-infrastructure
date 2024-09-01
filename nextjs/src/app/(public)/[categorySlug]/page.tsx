import ArticleList from "@/features/ArticleList";
import { ICategory } from "@/interfaces/ICategory";
import { categoryAPI } from "@/shared/api/CategoryService";
import { revalidatePath } from 'next/cache'

interface ItemCategoryProps {
    params: {
        categorySlug: string;
    }
}

export default async function CategoryPage ({ params: { categorySlug } }: ItemCategoryProps) {
    const category = await categoryAPI.getOneCategory(categorySlug);
    // revalidatePath('/[categorySlug]', 'page')

    return (
        <>
            <div >
                {category && category.map((oneCategory: ICategory) => (
                    <ArticleList key={oneCategory.id} articles={oneCategory.attributes.articles} categorySlug={oneCategory.attributes.slug} categoryName={oneCategory.attributes.name}/>
                ))}
            </div>
        </>
    );
}