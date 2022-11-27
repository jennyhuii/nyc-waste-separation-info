import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Resource from './pages/resource';
import IDMProgress from './pages/idm-progress';
import ITPProgress from './pages/itp-progress';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resource />} />
        <Route path="/idm-recycling" element={<IDMProgress />} />
        <Route path="/itp-recycling" element={<ITPProgress />} />
      </Routes>
    </Router>

  );
}

export default App;
