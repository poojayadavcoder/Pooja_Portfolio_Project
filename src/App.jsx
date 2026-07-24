import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import './index.css'

export default function App() {
  return (
    <div className="relative min-h-screen bg-black  overflow-x-hidden">
      {/* Global Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}
