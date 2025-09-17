import { useState } from 'react';

import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import UtilityModal from './components/UtilityModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUtilityModalOpen, setIsUtilityModalOpen] = useState(false);
  const [openTaskId, setOpentaskId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    description: '',
    priority: 'Medium',
    status: 'Backlog',
  });

  const openTaskModal = () => {
    isUtilityModalOpen && setIsUtilityModalOpen((prev) => (prev = false));

    if (openTaskId) {
      const selectedTask = tasks.filter((task) => task.id === openTaskId);

      setTaskData({
        ...selectedTask[0],
      });
    }

    setIsModalOpen((prev) => (prev = true));
  };

  const closeTaskModal = () => {
    if (openTaskId) setOpentaskId((prev) => (prev = 0));

    setTaskData({
      description: '',
      priority: 'Medium',
      status: 'Backlog',
    });

    setIsModalOpen((prev) => (prev = false));
  };

  const onModalSubmit = (e) => {
    e.preventDefault();

    if (openTaskId) {
      setTasks(
        tasks.map((task) =>
          task.id === openTaskId ? { ...task, ...taskData } : task
        )
      );
      setOpentaskId((prev) => (prev = 0));
    } else {
      const newTask = { id: Date.now(), ...taskData };
      setTasks([newTask, ...tasks]);
    }

    setTaskData({
      description: '',
      priority: 'Medium',
      status: 'Backlog',
    });

    closeTaskModal();
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== openTaskId));

    closeUtilityModal();
  };

  const openUtilityModal = (task) => {
    setIsUtilityModalOpen((prev) => (prev = true));
    setOpentaskId((prev) => (prev = task.id));
  };

  const closeUtilityModal = () => {
    setIsUtilityModalOpen((prev) => (prev = false));
    setOpentaskId((prev) => (prev = 0));
  };

  return (
    <div className='max-w-6xl mx-auto mt-10 p-6'>
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
      <div className='grid grid-cols-3 gap-10 text-center'>
        <div className=''>
          <h2 className='mb-3 font-semibold'>Backlog</h2>
          {tasks
            .filter((task) => task.status === 'Backlog')
            .map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  taskId={openTaskId}
                  onClick={() => openUtilityModal(task)}
                  openTaskId={openTaskId}
                />
              );
            })}
        </div>
        <div className=''>
          <h2 className='mb-3 font-semibold'>Work in progress</h2>
          {tasks
            .filter((task) => task.status === 'Work in progress')
            .map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  taskId={openTaskId}
                  onClick={() => openUtilityModal(task)}
                  openTaskId={openTaskId}
                />
              );
            })}
        </div>
        <div className=''>
          <h2 className='mb-3 font-semibold'>Completed</h2>
          {tasks
            .filter((task) => task.status === 'Completed')
            .map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  taskId={openTaskId}
                  onClick={() => openUtilityModal(task)}
                  openTaskId={openTaskId}
                />
              );
            })}
        </div>
      </div>

      {/* Task Modal */}
      <Modal
        title={openTaskId ? 'Edit task' : 'New Task'}
        isOpen={isModalOpen}
        closeModal={closeTaskModal}
        onSubmit={onModalSubmit}
      >
        <TaskForm
          formData={taskData}
          setFormData={setTaskData}
          openTaskId={openTaskId}
        />
      </Modal>

      {/* Utility Modal */}
      <UtilityModal
        isOpen={isUtilityModalOpen}
        onEditClick={openTaskModal}
        onCloseClick={closeUtilityModal}
        onDeleteClick={deleteTask}
      />
    </div>
  );
};

export default App;
