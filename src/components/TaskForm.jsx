const TaskForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='task'>Task</label>
        <textarea
          className='w-full p-2 border border-gray-400 rounded-lg'
          name='description'
          value={formData.description}
          onChange={handleChange}
          rows='5'
          placeholder='Enter task...'
        ></textarea>
      </div>
      <div className='mb-3'>
        <label htmlFor='priority'>Priority</label>
        <select
          className='w-full p-2 border border-gray-400 rounded-lg'
          name='priority'
          value={formData.priority}
          onChange={handleChange}
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
