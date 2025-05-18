interface ErrorStateProps {
  error: string;
}

export const ErrorState = ({ error }: ErrorStateProps) => {
  return (
    <div className='col-span-full flex flex-col items-center justify-center py-12 px-4 bg-white rounded-lg shadow-sm'>
      <i className='bx bx-error-circle text-6xl text-red-500 mb-4'></i>
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
        Error Loading Products
      </h3>
      <p className='text-gray-600 text-center'>{error}</p>
    </div>
  );
};
