import './App.css';
import { Route, Routes } from 'react-router-dom';
import Physics from './Components/Physics/Physics';
import TeacherProfile from './Components/TeacherProfile/TeacherProfile';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Physics />} />
        <Route path="/new" element={<Landing />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />
      </Routes>
    </div>
  );
}

export default App;
