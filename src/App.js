import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { Theory } from './components/Theory'; // Import your Theory component
import { Practice } from './components/Practice'; // Import your Practice component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/" element={<Home />} index />
        <Route path="/theory" element={<Theory />} />
        {/* <Route path="/practice" element={<Practice />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
