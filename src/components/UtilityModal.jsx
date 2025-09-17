const UtilityModal = ({ isOpen, onEditClick, onCloseClick, onDeleteClick }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-40'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 p-4 border border-gray-600 shadow-lg rounded-lg w-100 flex flex-row justify-around'>
        <button
          onClick={onEditClick}
          className='py-1 w-full mr-3 bg-green-600 text-white hover:bg-green-700 rounded cursor-pointer'
        >
          Edit
        </button>
        <button
          onClick={onDeleteClick}
          className='py-1 mr-3 w-full bg-red-600 text-white hover:bg-red-700 rounded cursor-pointer'
        >
          Delete
        </button>
        <button
          onClick={onCloseClick}
          className='py-1 w-full bg-gray-600 text-white hover:bg-gray-700 rounded cursor-pointer'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UtilityModal;
