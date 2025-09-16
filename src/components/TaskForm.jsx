const TaskForm = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='task'>Task</label>
        <textarea
          className='w-full p-2 border border-gray-400 rounded-lg'
          name='task'
          rows='5'
          placeholder='Enter task...'
        ></textarea>
      </div>
      <div className='mb-3'>
        <label htmlFor='priority'>Priority</label>
        <select
          className='w-full p-2 border border-gray-400 rounded-lg'
          name='priority'
          id=''
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
