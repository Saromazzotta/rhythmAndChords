import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { RegLog } from './components/RegLog';
import LandingPage from './components/LandingPage';
import Teachers from './components/Teachers';
import LessonCreate from './components/LessonCreate';
import background from './Images/background3.jpg';
import Footer from './components/Footer';
import EditLesson from './components/EditLesson';




function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      backgroundRepeat: "no-repeat",
    }}>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<RegLog />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lesson/create" element={<LessonCreate />} />
        <Route path="/lesson/edit/:id" element={<EditLesson />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
