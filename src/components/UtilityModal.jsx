const UtilityModal = ({ isOpen, onEditClick }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-40'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 shadow-lg rounded-lg w-100 flex flex-row justify-around'>
        <button
          onClick={onEditClick}
          className='py-1 w-full mr-3 bg-green-600 text-white hover:bg-green-700 rounded cursor-pointer'
        >
          Edit
        </button>
        <button className='py-1 w-full bg-red-600 text-white hover:bg-red-700 rounded cursor-pointer'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UtilityModal;
