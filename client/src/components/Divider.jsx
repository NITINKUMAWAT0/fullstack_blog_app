const Divider = ({ label }) => {
    return (
      <div className='flex items-center mt-4'>
        <div className='flex-1 border-t border-gray-300 dark:border-gray-300'></div>
        <div className='mx-4 text-gray-200 text-sm'>{label}</div>
        <div className='flex-1 border-t border-gray-300 dark:border-gray-300'></div>
      </div>
    );
  };
  
  export default Divider;