import './App.css';
import MyProfile from './MyProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Start from './pages/start/start.js';
import Selfcheck from './pages/selfcheck/selfcheck.js';
import Tag from './pages/tag/tag.js';
import Congrats from './pages/congrats/congrats.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/start" element={<Start />} />
          <Route path="selfcheck" element={<Selfcheck />} />
          <Route path="tag" element={<Tag />} />
          <Route path="congrats" element={<Congrats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
