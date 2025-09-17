import { useState } from 'react';

const Modal = ({ isOpen, closeModal, title, children, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-40'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 border border-gray-600 p-4 shadow-lg rounded-lg pl-0 w-100 flex flex-col justify-between'>
        {/* header */}
        <div>
          <div className='flex justify-between mb-3'>
            <h2 className='pl-3 font-semibold text-gray-300'>{title}</h2>
            <button
              onClick={closeModal}
              className='cursor-pointer text-gray-700 hover:text-gray-400 active:text-gray-700 pb-1'
            >
              X
            </button>
          </div>
          <hr className='mb-3 border-gray-300' />
        </div>

        {/* body */}
        <div className='pl-3'>{children}</div>

        {/* footer */}
        <div>
          <hr className='mb-3 border-gray-300' />
          <div className='flex justify-end'>
            <button
              onClick={closeModal}
              className='mr-3 bg-gray-500 py-1 px-3 text-white rounded  hover:bg-gray-600 cursor-pointer'
            >
              Close
            </button>
            <button
              onClick={onSubmit}
              className='bg-sky-600 py-1 px-3 text-white rounded  hover:bg-sky-700 cursor-pointer'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
