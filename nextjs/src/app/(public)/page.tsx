import React from 'react';
import { categoryAPI } from '@/shared/api/CategoryService';
import { ICategory } from '@/interfaces/ICategory';
import CategoryList from '@/features/CategoryList'
import { revalidatePath } from 'next/cache'

export default async function HomePage() {
    const categories = await categoryAPI.getCategories();
    // revalidatePath('/')

    return (
        <>
            <div>
                {categories && categories.map((category: ICategory) => (
                    <CategoryList key={category.id} articles={category.attributes.articles} categorySlug={category.attributes.slug} categoryName={category.attributes.name}/>
                ))}
            </div>
        </>
    );
}
