import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { RegLog } from './components/RegLog';
import LandingPage from './components/LandingPage';
import Teachers from './components/Teachers';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<RegLog />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
