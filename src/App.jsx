import { useState } from 'react';

import Modal from './components/Modal';
import TaskForm from './components/TaskForm';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTaskModal = () => {
    setIsModalOpen((prev) => (prev = true));
  };

  const closeTaskModal = () => {
    setIsModalOpen((prev) => (prev = false));
  };

  return (
    <div className='p-4'>
      <h1 className='text-center mb-3 font-semibold text-4xl'>Basic Kanban</h1>
      <div className='flex justify-between'>
        <button
          onClick={openTaskModal}
          className='bg-green-600 mb-3 py-1 px-3 text-white rounded px-2 hover:bg-green-700 active:bg-green-600 cursor-pointer'
        >
          Add
        </button>
        <button className='bg-red-600 mb-3 py-1 px-3 text-white rounded px-2 hover:bg-red-700 active:bg-red-600 cursor-pointer'>
          Reset
        </button>
      </div>
      <div className='columns-3 text-center'>
        <div className='bg-red-400'>Backlog</div>
        <div className='bg-orange-400'>Work in progress</div>
        <div className='bg-green-400'>Completed</div>
      </div>

      {/* Task Modal */}
      <Modal title='New Task' isOpen={isModalOpen} closeModal={closeTaskModal}>
        <TaskForm />
      </Modal>
    </div>
  );
};

export default App;
