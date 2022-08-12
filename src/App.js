import './App.css';
import { Route, Routes } from 'react-router-dom';
import Physics from './Components/Physics/Physics';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Physics />} />
      </Routes>
    </div>
  );
}

export default App;
