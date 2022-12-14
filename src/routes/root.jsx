import { useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts';

import Navbar from '../components/Navbar';
import TabSwitcher from '../components/TabSwitcher';
import Todos from '../components/todos/Todos';
import Notes from '../components/notes/Notes';

const Root = () => {
  // Dark Mode
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else if (!isDarkMode && document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Active Tab
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggle} />

      <div className="lg:px-32">
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'todos' && <Todos />}
        {activeTab === 'notes' && <Notes />}
      </div>
    </div>
  );
};

export default Root;
