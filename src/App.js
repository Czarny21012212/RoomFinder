import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotel from './PodStrony/Hotel.js';
import Info from './PodStrony/Info.js';
import Favorite from './PodStrony/Favorite.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hotel />} />
        <Route path="/hotel/:id" element={<Info />} />
        <Route path='/ulubione' element={<Favorite />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
