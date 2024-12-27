import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotel from './PodStrony/Search-Hotels/Hotel.js';
import Info from './PodStrony/Information/Info.js';
import Favorite from './PodStrony/Favorite/Favorite.js';
import Reservation from './PodStrony/Reservation/Reservation.js';
import Reservation2 from './PodStrony/Reservation2/Reservation.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hotel />} />
        <Route path="/hotel/:id" element={<Info />} />
        <Route path='/ulubione' element={<Favorite />}></Route>
        <Route path='/rezerwacja-check-1' element={<Reservation />}></Route>
        <Route path='/rezerwacja-check-2' element={<Reservation2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
