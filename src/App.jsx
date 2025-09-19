import { useState, useEffect } from 'react';

import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import UtilityModal from './components/UtilityModal';
import ConfirmationModal from './components/ConfirmationModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUtilityModalOpen, setIsUtilityModalOpen] = useState(false);
  const [isConfimationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [openTaskId, setOpentaskId] = useState(0);
  const [tasks, setTasks] = useState(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks || [];
  });
  const [taskData, setTaskData] = useState({
    description: '',
    priority: 'Medium',
    status: 'Backlog',
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
    closeConfirmationModal();
  };

  const resetKanban = () => {
    setTasks((prev) => (prev = []));
    setIsConfirmationModalOpen((prev) => (prev = false));
  };

  const openUtilityModal = (task) => {
    setIsUtilityModalOpen((prev) => (prev = true));
    setOpentaskId((prev) => (prev = task.id));
  };

  const closeUtilityModal = () => {
    setIsUtilityModalOpen((prev) => (prev = false));
    setOpentaskId((prev) => (prev = 0));
  };

  const openConfirmationModal = (task) => {
    setIsConfirmationModalOpen((prev) => (prev = true));
  };

  const closeConfirmationModal = () => {
    openTaskId && closeUtilityModal();
    setIsConfirmationModalOpen((prev) => (prev = false));
  };

  const cancelConfirmationModal = () => {
    setIsConfirmationModalOpen((prev) => (prev = false));
  };

  return (
    <div className='max-w-6xl mx-auto mt-3 p-6'>
      <h1 className='text-center mb-10 font-bold text-4xl text-gray-300'>
        Basic Kanban
      </h1>
      <div className='flex justify-between'>
        <button
          onClick={openTaskModal}
          className='bg-green-600 mb-3 py-1 px-3 text-white rounded shadow-lg px-2 hover:bg-green-700 active:bg-green-600 cursor-pointer'
        >
          Add
        </button>
        <div className='flex flex-row'>
          <h2 className='mr-3 pt-1 font-semibold text-gray-300'>{`${
            tasks.filter((task) => task.status === 'Completed').length
          }/${tasks.length}`}</h2>
          <button
            onClick={openConfirmationModal}
            className='bg-red-600 mb-3 py-1 px-3 text-white rounded shadow-lg px-2 hover:bg-red-700 active:bg-red-600 cursor-pointer'
          >
            Reset
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
        <div className=''>
          <h2 className='mb-3 font-semibold text-gray-300'>Backlog</h2>
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
          <h2 className='mb-3 font-semibold text-gray-300'>Work in progress</h2>
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
          <h2 className='mb-3 font-semibold text-gray-300'>Completed</h2>
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
        onDeleteClick={openConfirmationModal}
      />

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfimationModalOpen}
        onCancel={cancelConfirmationModal}
        onConfirm={openTaskId > 0 ? deleteTask : resetKanban}
      />
    </div>
  );
};

export default App;
