export const LoadingState = () => {
  return (
    <div className='col-span-full flex flex-col items-center justify-center py-12 px-4 bg-white rounded-lg shadow-sm'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
      <p className='mt-4 text-gray-600'>Loading products...</p>
    </div>
  );
};
