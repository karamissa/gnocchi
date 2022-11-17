import { useState } from 'react';

const TodoInput = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = () => {
    setTodos((todos) => [...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div className="flex flex-col gap-4 rounded-md">
      <textarea
        placeholder="Enter a Todo..."
        className="block w-full resize-none p-2 h-12 rounded-md shadow-md hover:shadow-lg outline-none bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition duration-200 focus:border-gray-400 dark:focus:border-gray-600 focus:shadow-lg"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></textarea>

      <button
        className="self-center py-2 px-4 rounded-md font-semibold text-white bg-sky-500 hover:bg-sky-600 dark:border-gray-800 dark:hover:border-gray-700 transition duration-200"
        onClick={handleNewTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;