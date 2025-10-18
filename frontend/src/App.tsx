// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

//import './App.css'
import './index.css' // Tailwind
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#1e1b4b)] text-white">
      <Header />
      <Dashboard />
    </div>
  );
}





// function App() {
//   const [count, setCount] = useState(0)

// return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center">
//       <div className="flex gap-6 mb-6">
//         <a href="https://vite.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="h-16 hover:rotate-12 transition-transform" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="h-16 hover:rotate-12 transition-transform" alt="React logo" />
//         </a>
//       </div>

//       <h1 className="text-5xl font-bold mb-2">Vite + React + Tailwind 4</h1>
//       <p className="opacity-80 mb-8">Configuração moderna e funcional ✨</p>

//       <div className="space-y-4">
//         <button
//           onClick={() => setCount((c) => c + 1)}
//           className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
//         >
//           count is {count}
//         </button>
//         <p>
//           Edite <code>src/App.tsx</code> e salve para testar o HMR 🔥
//         </p>
//       </div>
//     </div>
//   )
// }
//
//export default App
