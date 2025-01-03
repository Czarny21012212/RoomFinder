import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import { Link } from 'react-router-dom';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import { useEffect, useState } from 'react';
import './Favorite.css';
import location from '../Image/location.png';


function Favourite() {

    
    const [favouriteHotel, setFavouriteHotel] = useState(() => {
        const storedHotels = localStorage.getItem('Hotel');
        const parsedHotels = storedHotels ? JSON.parse(storedHotels) : [];
        return Array.isArray(parsedHotels) ? parsedHotels : [];
    });

    useEffect(() => {
        const favouriteId = localStorage.getItem('FavouritID');
        console.log(favouriteId)
        if (favouriteId) {
            const selectedHotel = HotelData.find(hotel => hotel.id === parseInt(favouriteId));
            if (selectedHotel) {
                if (!favouriteHotel.some(hotel => hotel.id === selectedHotel.id)) {
                    const updatedHotels = [...favouriteHotel, selectedHotel];
                    setFavouriteHotel(updatedHotels);
                    localStorage.setItem('Hotel', JSON.stringify(updatedHotels)); 
                }
            }
        }
    }, []); 

    const showFavourite = (id) => {
        return(
            <div className='favourite-cart-box'>
                <div className='favourite-cart'>
                    <div className='favourite-cart-image'>
                        <img src={id.photo} alt={id.name} />
                    </div>
                    <div className='favourite-cart-info'>
                        <div className='favourite-cart-info-top'>
                            <div className='favourite-cart-info-top-name'>
                                <h4>{id.name}</h4>
                            </div>
                            <div className='hotel-left-left'>
                                        <div className='hotel-left-opinion'>
                                            <p className='hotel-guestRating'>{id.guestRating}</p>
                                            <p>{id.verbalRating}</p>
                                            <p className='hotel-opinion'>{id.reviewsCount} opini</p>
                                        </div>
                               </div>
                            <div className='favourite-cart-info-top-location'>
                                <div>
                                    <img src={location}></img>
                                    <p>{id.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className='favourite-cart-info-bottom'>

                        </div>
                    </div>
                </div>
            </div>
        );

    }
    const noFavourite = () => {
        return(
            <div>
                <h1>Nie masz ulubionych hoteli</h1>
            </div>
        );

    }

    return (
        <div>
        <header>
            <div className='header-items'>
                <div className='header-top'>
                    <h1>RoomFinder.com</h1>
                </div>
                <div className='header-center'>
                    <ul className="header-center">
                        <li><a href="#"><img src={Home} alt="Home" />Strona Główna</a></li>
                        <li><Link to={'/'} className="reservation-link"><img src={Hotel2} alt="Reservation" />Hotel</Link></li>
                        <li><Link to={'/TwojeRezerwacja'} className="reservation-link"><img src={YourReservation} alt="Reservation" />Twoja Rezerwacja</Link></li>
                        <li><a href="#"><img src={Information} alt="Info" />Zasady umowy</a></li>
                    </ul>
                    <Link to={`/ulubione`} className='favouriteLink'>
                            <p className='favouriteLinkP'>❤️</p>
                        </Link>
                </div>
            </div>
        </header>
        
        <div className='favourite-hotels-box'>
            <div>
                <h2>Ulubione:</h2>
            </div>
            <div className='favourite-hotels'>
                {favouriteHotel.length > 0 ? favouriteHotel.map(hotel => showFavourite(hotel)) : noFavourite()}    
            </div>
        </div>
    </div>
    );
}

export default Favourite;
