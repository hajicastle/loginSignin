import Start from './pages/start/start.js';
import Selfcheck from './pages/selfcheck/selfcheck.js';
import Tag from './pages/tag/tag.js';
import Congrats from './pages/congrats/congrats.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="start" element={<Start />} />
          <Route path="selfcheck" element={<Selfcheck />} />
          <Route path="tag" element={<Tag />} />
          <Route path="congrats" element={<Congrats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
