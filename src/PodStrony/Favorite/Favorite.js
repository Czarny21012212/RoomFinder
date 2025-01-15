import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import { Link } from 'react-router-dom';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import { useEffect, useState } from 'react';
import './Favorite.css';
import location from '../Image/location.png';
import Delete from '../Image/delete.png'
import Heart from '../Image/Heart.png'


function Favourite() {

    
    const [ListOfFavourite, setListOfFavourite] = useState([])

   useEffect(() => {
    setListOfFavourite(JSON.parse(localStorage.getItem('ListOfFavourite')) || [])
   }, [])

    console.log(ListOfFavourite)

    const ListOfFavouriteLenght = ListOfFavourite.length

    const dropFavourite = (index) => {
            const updateList = ListOfFavourite.filter(id => id !== index)
            localStorage.setItem('ListOfFavourite', JSON.stringify(updateList));
            setListOfFavourite(updateList)
    }

    const showFavourite = () => {
        return HotelData.filter((hotel) => ListOfFavourite.includes(hotel.id))
            .map((id) => {
                return (
                    <div className='favourite-cart-box' key={id.id}>
                        <div className='favourite-cart'>
                            <div className='favourite-cart-image' >
                                <img src={id.photo} alt={id.name} />
                            </div>
                            <div onClick={() => dropFavourite(id.id)} className='Delete'>
                                <img src={Delete}></img>
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
                                            <img src={location} alt="location icon" />
                                            <p>{id.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='favourite-cart-info-bottom'></div>
                            </div>
                        </div>
                    </div>
                );
            });
    };

    
    const noFavourite = () => {
        return(
            <div className='noFavourite'>
                <h1>Nie posiadasz ulubionych hoteli</h1>
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
                    
                    <ul className="nav-list">
                            <li><Link to={'/Home'}><img src={Home} alt="Home"/>Strona Główna</Link></li>
                            <li><Link to={'/Hotel-Search'}><img src={Hotel2} alt="Hotel"/>Hotele</Link></li>
                            <li><Link to={'/TwojeRezerwacja'}><img src={YourReservation} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                            <li><Link to={'/Zasady-Umowy'}><img src={Information} alt="Info"/>Zasady umowy</Link></li>
                        </ul>
                    <Link to={`/ulubione`} className='favouriteLink'>
                            <p className='favouriteLinkP'><img className='heart' src={Heart}></img></p>
                        </Link>
                </div>
            </div>
        </header>
        
        <div className='favourite-hotels-box'>
            <div className='favourite-hotels-box-top'>
                <div>
                    <h2>Mój kolejny Wyjazd</h2>
                    <p>Liczba ulubionych obiektów: {ListOfFavouriteLenght}  </p>
                </div>
                <div className='anotherTrip-box'>
                    <h3>Zaplanuj z nami swoją własną podróż</h3>
                    <p>Odkryj najlepsze miejsca na wakacje i zarezerwuj swój pobyt już dziś!</p>
                </div>
            </div>
            <div className='favourite-hotels-box-line'>

            </div>
            <div className='favourite-hotels'>
                {ListOfFavouriteLenght != 0  ? showFavourite() : noFavourite()}
            </div>
            
        </div>
    </div>
    );
}

export default Favourite;
