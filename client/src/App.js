import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
