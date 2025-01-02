import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import { Link } from 'react-router-dom';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import { useEffect, useState } from 'react';


function Favourite() {
    const [favouriteHotel, setFavouriteHotel] = useState(() => {
        const storedHotels = localStorage.getItem('Hotel');
        const parsedHotels = storedHotels ? JSON.parse(storedHotels) : [];
        // Zwracamy tablicę, niezależnie od tego, co było zapisane
        return Array.isArray(parsedHotels) ? parsedHotels : [];
    });

    useEffect(() => {
        const favouriteId = localStorage.getItem('FavouritID');
        if (favouriteId) {
            const selectedHotel = HotelData.find(hotel => hotel.id === parseInt(favouriteId));
            if (selectedHotel) {
                // Jeśli hotel nie jest jeszcze w liście, dodajemy go
                if (!favouriteHotel.some(hotel => hotel.id === selectedHotel.id)) {
                    const updatedHotels = [...favouriteHotel, selectedHotel];
                    setFavouriteHotel(updatedHotels);
                    localStorage.setItem('Hotel', JSON.stringify(updatedHotels)); // Zapisz nowe dane
                }
            }
        }
    }, []); // Używamy pustej tablicy, aby wykonać ten kod tylko raz

    return (
        <div>
            {favouriteHotel.length > 0 ? (
                favouriteHotel.map(hotel => (
                    <div>
                    <header>
                        <div className='header-items'>
                            <div className='header'>
                                <div className='header-top'>
                                    <h1>RoomFinder.com</h1>
                                    
                                </div>
                                <div className='header-center'>
                                    <ul className="nav-list">
                                        <li><a href="#"><img src={Home} alt="Home"/>Strona Główna</a></li>
                                        <li><Link to={'/'}><img src={Hotel2} alt="Hotel"/>Hotele</Link></li>
                                        <li><Link to={'/TwojeRezerwacja'}><img src={YourReservation} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                                        <li><a href="#"><img src={Information} alt="Info"/>Zasady umowy</a></li>
                                    </ul>
                                    <Link to={`/ulubione`} className='favouriteLink'>
                                        <p className='favouriteLinkP'>❤️</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <p key={hotel.id}>{hotel.name}</p>
                    </div>
                    
                ))
            ) : (
                <div>
                    <header>
                        <div className='header-items'>
                            <div className='header'>
                                <div className='header-top'>
                                    <h1>RoomFinder.com</h1>
                                    
                                </div>
                                <div className='header-center'>
                                    <ul className="nav-list">
                                        <li><a href="#"><img src={Home} alt="Home"/>Strona Główna</a></li>
                                        <li><Link to={'/'}><img src={Hotel2} alt="Hotel"/>Hotele</Link></li>
                                        <li><Link to={'/TwojeRezerwacja'} className='Now'><img src={YourReservation} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                                        <li><a href="#"><img src={Information} alt="Info"/>Zasady umowy</a></li>
                                    </ul>
                                    <Link to={`/ulubione`} className='favouriteLink'>
                                        <p className='favouriteLinkP'>❤️</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <p>Brak ulubionych hoteli</p>
                </div>
                
            )}
        </div>
    );
}

export default Favourite;
