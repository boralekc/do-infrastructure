'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  sectionName: string;
  categories: {
    data: {
      attributes: {
        name: string;
        slug: string;
      }
    }[]
  };
}

const SelectPlate: React.FC<HeaderProps> = ({ sectionName, categories }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const name = categories.data.map(item => item.attributes.name)
  const categorySlug = categories.data.map(item => item.attributes.slug)

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex relative items-center h-full font-bold px-8 hover:bg-gray-100" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
        {sectionName}
      {isOpen && (
        <div className="absolute top-full left-0 bg-white border-gray-200 shadow-lg rounded-b-md w-48 border-t"
             onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
          <Link href={`/${categorySlug}`} className="block px-4 py-2 bg-gray-100">
              {name}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SelectPlate;
