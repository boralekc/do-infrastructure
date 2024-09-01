import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface ItemArticleProps {
  content: BlocksContent;
  
}

const ItemArticle: React.FC<ItemArticleProps> = ({ content }) => {
  
  return (
    <div className="flex justify-center w-11/12">
      <div className='grid w-11/12 lg:ml-6 items-end'>
      <main className='max-w-6xl prose prose-lg py-10'>
        <BlocksRenderer content={content} />
      </main>
      </div>
    </div>
  )
};

export default ItemArticle;
