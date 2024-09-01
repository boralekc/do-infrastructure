'use client'
import React, { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import SmartphoneSectionItem from "./SmartphoneSectionItem";
import { ISection } from "@/interfaces/ISection";

interface HeaderProps {
  sections: []
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

const SmartphoneSection: React.FC<HeaderProps> = ({ sections }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <button
        className="sm:hidden flex justify-end items-center h-full w-screen text-xl"
        onClick={handleMenuToggle}>
        <TfiAlignJustify />
      </button>
      
      {isFormVisible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-full h-screen flex justify-center items-start bg-white z-50">
          <div className="bg-white p-8 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-bold">DEUTSCHHUB</div>
              <button
                onClick={handleFormClose}
                className="bg-red-500 text-white px-2 py-2 rounded-full">
                <TfiClose />
              </button>
            </div>
            <div className='grid justify-start items-center h-full'>
                {sections && sections.map((section: ISection) => (
                    <SmartphoneSectionItem key={section.id} 
                    sectionName={section.attributes.name}
                    categories={section.attributes.categories} />
                ))}
        </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SmartphoneSection;


