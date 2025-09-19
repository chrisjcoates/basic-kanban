import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-40'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 border border-gray-600 p-4 shadow-lg rounded-lg pl-0 w-100 flex flex-col justify-between'>
        {/* header */}
        <div className='flex p-4'>
          <FontAwesomeIcon
            className='text-yellow-600/90'
            icon={faTriangleExclamation}
            size='6x'
          />
          <h2 className='pl-4 mb-3 text-gray-300 align-center font-semibold'>
            Are you sure you wish to continue?
          </h2>
        </div>
        {/* body */}
        <div className='flex justify-end'>
          <button
            className='mr-3 bg-gray-600 py-1 px-3 text-white rounded  hover:bg-gray-700 cursor-pointer'
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className='bg-sky-600 py-1 px-3 text-white rounded  hover:bg-sky-700 cursor-pointer'
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
