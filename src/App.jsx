const App = () => {
  return (
    <div className='p-4'>
      <h2 className='text-center mb-3'>Basic Kanban</h2>
      <div className='flex justify-between'>
        <button className='bg-green-600 mb-3 p-1 text-white rounded px-2 hover:bg-green-700 active:bg-green-600'>
          Add
        </button>
        <button className='bg-red-600 mb-3 p-1 text-white rounded px-2 hover:bg-red-700 active:bg-red-600 '>
          Reset
        </button>
      </div>
      <div className='columns-3 text-center'>
        <div className='bg-red-400'>Backlog</div>
        <div className='bg-orange-400'>Work in progress</div>
        <div className='bg-green-400'>Completed</div>
      </div>
    </div>
  );
};

export default App;
