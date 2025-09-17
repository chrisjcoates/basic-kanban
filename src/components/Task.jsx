const Task = ({ task, onClick, taskId }) => {
  const colorClasses = {
    Backlog: 'bg-red-500/50 hover:bg-red-600/50',
    'Work in progress': 'bg-orange-500/50 hover:bg-orange-600/50',
    Completed: 'bg-green-500/50 hover:bg-green-600/50',
  };

  const priorityBorderColor = {
    High: 'border-red-500',
    Medium: 'border-yellow-500',
    Low: 'border-green-500',
  };

  const activeBorder =
    task.id === taskId ? 'border-2 border-dashed border-red-600' : '';
  return (
    <div
      className={`p-4 mb-4 rounded-lg shadow-md min-h-30 ${
        colorClasses[task.status]
      } cursor-pointer ${activeBorder} border-l-10 ${
        priorityBorderColor[task.priority]
      }`}
      onClick={onClick}
    >
      <h2 className='font-semibold text-gray-300'>{task.description}</h2>
    </div>
  );
};

export default Task;
