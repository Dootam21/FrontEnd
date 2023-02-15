import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}/> 
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
