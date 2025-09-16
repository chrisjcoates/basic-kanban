const TaskModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 z-40'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 shadow-lg'>
        <button
          onClick={closeModal}
          className='bg-green-600 p-1 text-white rounded  hover:bg-green-700 active:bg-green-600'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
