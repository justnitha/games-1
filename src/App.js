import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './pages/Games';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Games/>}/>
      </Routes>
    </Router>
  );
}

export default App;
