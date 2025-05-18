interface EmptyProductsProps {
  category: string;
}

export const EmptyProducts = ({ category }: EmptyProductsProps) => {
  return (
    <div className='col-span-full flex flex-col items-center justify-center py-12 px-4 bg-white rounded-lg shadow-sm'>
      <i className='bx bx-package text-6xl text-gray-300 mb-4'></i>
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
        No Equipment Found
      </h3>
      <p className='text-gray-600 text-center'>
        {category === "all"
          ? "No equipment is currently available."
          : `No equipment available in the ${
              category.charAt(0).toUpperCase() + category.slice(1)
            } category.`}
      </p>
    </div>
  );
};
