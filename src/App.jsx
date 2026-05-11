
import './App.css'

import ThemeToggle from './components/ThemeToggle'; // সঠিক পাথ দিও

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <nav className="p-4 flex justify-between items-center max-w-[1400px] mx-auto">
          <h1 className="text-2xl font-bold">eTuition<span className="text-[#BCE955]">BD</span></h1>
          <ThemeToggle />
      </nav>

      <main>
      </main>

    </div>
  );
}


export default App
