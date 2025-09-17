import { useState } from 'react';

import Modal from './components/Modal';
import TaskForm from './components/TaskForm';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    description: '',
    priority: 'Medium',
    status: 'Backlog',
  });

  const openTaskModal = () => {
    setIsModalOpen((prev) => (prev = true));
  };

  const closeTaskModal = () => {
    setIsModalOpen((prev) => (prev = false));
  };

  const onModalSubmit = (e) => {
    e.preventDefault();

    const newTask = { id: Date.now(), ...taskData };

    setTasks([newTask, ...tasks]);

    setTaskData({
      description: '',
      priority: 'Medium',
      status: 'Backlog',
    });

    closeTaskModal();
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
      <div className='grid grid-cols-3 gap-4 text-center'>
        <div className='bg-red-400'>
          <h2 className='font-semibold'>Backlog</h2>
          {tasks
            .filter((task) => task.status === 'Backlog')
            .map((task) => {
              return (
                <div className='flex ' key={task.id}>
                  {task.description}
                </div>
              );
            })}
        </div>
        <div className='bg-orange-400'>
          <h2>Work in progress</h2>
          <div>test</div>
        </div>
        <div className='bg-green-400'>
          <h2>Completed</h2>
          <div>test</div>
        </div>
      </div>

      {/* Task Modal */}
      <Modal
        title='New Task'
        isOpen={isModalOpen}
        closeModal={closeTaskModal}
        onSubmit={onModalSubmit}
      >
        <TaskForm formData={taskData} setFormData={setTaskData} />
      </Modal>
    </div>
  );
};

export default App;
