import './App.css';
import { Route, Routes } from 'react-router-dom';
import Physics from './Components/Physics/Physics';
import TeacherProfile from './Components/TeacherProfile/TeacherProfile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Physics />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />
      </Routes>
    </div>
  );
}

export default App;
