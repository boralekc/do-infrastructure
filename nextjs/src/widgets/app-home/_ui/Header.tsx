import React, { useState } from "react";
import { categoryAPI } from '@/shared/api/CategoryService';
import { sectionAPI } from '@/shared/api/SectionService';
import Link from 'next/link';
import SelectPlate from '@/widgets/SelectPlate';
import { ISection } from '@/interfaces/ISection';
import Breadcrumbs from '@/widgets/breadcrumbs/Breadcrumbs';
import { revalidatePath } from 'next/cache'
import SmartphoneSection from "@/widgets/SmartphoneSection";

export default async function Header () {
  const categories = await categoryAPI.getCategories();
  revalidatePath('/')
  const sections = await sectionAPI.getSection();
    
  return (
    <>
    <header className="flex justify-center text-slate-800 bg-white h-24 shadow-md border-b">
      <div className='flex w-11/12'>
      <div className='flex items-center w-1/6'>
        <Link href='/' className="flex justify-start text-xl font-bold">DEUTSCHHUB</Link>
      </div>
        <div className='hidden sm:flex justify-center items-center h-full'>
                {sections && sections.map((section: ISection) => (
                    <SelectPlate key={section.id} 
                    sectionName={section.attributes.name}
                    categories={section.attributes.categories} />
                ))}
        </div>
        <SmartphoneSection sections={sections}/>
        </div>

    </header>
    <Breadcrumbs categories={categories}/>
</>
  );
}

