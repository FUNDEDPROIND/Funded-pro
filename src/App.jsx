import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import { Login } from './Login';
import { Dashboard } from './Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
