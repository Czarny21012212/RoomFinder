
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import HotelData from '../Json/Hotel.json';

import { Footer } from '../Footer/footer'
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import Heart from '../Image/Heart.png'

function HomePage() {

    const[start, setStart] = useState(null);
    const[end, setEnd] = useState(null);
    const[place, setPlace] = useState(null);
    const[people, setPeople] = useState(null);
    const[save, setSave] = useState()
    const[search, setSearch] = useState(localStorage.getItem('Search') ? localStorage.getItem('Search') : false);
    const[countCarts, setCountCarts] = useState(0);
    const[valueOfPrice, setValueOfPrice] = useState();
    const[DayOfTrip, setDayOfTrip] = useState()
    const[city, setCity] = useState()
    const[localCountry, setLocalCountry] = useState(localStorage.getItem('Country'))
    const[localPeople, setLocalPeople] = useState(localStorage.getItem('People2'))
    const[localStart, setLocalStart] = useState(localStorage.getItem('Start'))
    const[localEnd, setLocalEnd] = useState(localStorage.getItem('End'))
    const[localPrice, setLocalPrice] = useState(localStorage.getItem('Price'));
    const[localTrue, setLocalTrue] = useState(localStorage.getItem('localTrue') ? localStorage.getItem('localTrue') : false);


    useEffect(() => {
        if (start && end) {
            const date1 = new Date(start);
            const date2 = new Date(end);
            const days = (date2 - date1) / (1000 * 60 * 60 * 24);
            setDayOfTrip(days);
        }
    }, [start, end])

    useEffect(() => {
            if (DayOfTrip && people) {
                const price = parseInt(people) * parseInt(DayOfTrip);
                setLocalPrice(price);
                localStorage.setItem('Price', price);
            }
        }, [DayOfTrip, people]);
        
    const Search = () =>{

        localStorage.setItem('Country', place);
        localStorage.setItem('People2', people);
        localStorage.setItem('Start', start);
        localStorage.setItem('End', end);

       if(place, people, start, end){
            window.location.href = 'http://localhost:3000'
       }
    }

        useEffect(() => {
            if (localTrue) {
                setPlace(localStorage.getItem('Country'));
                setPeople(localStorage.getItem('People2'));
                setStart(localStorage.getItem('Start'));
                setEnd(localStorage.getItem('End'));
                setLocalPrice(parseInt(localStorage.getItem('Price')));
                setValueOfPrice(localStorage.getItem('PricePerNight'))
            }
        }, [localTrue]);
  return (
   <div className="HomePage-all">
        <header>
            <div className='header-items'>
            <div className='header'>
                <div className='header-top'>
                    <h1>RoomFinder.com</h1>
                    
                </div>
                <div className='header-center'>
                    <ul className="nav-list">
                        <li><a href="#" className='Now'><img src={Home} alt="Home"/>Strona Główna</a></li>
                        <li><Link to={'/'}><img src={Hotel2} alt="Hotel"/>Hotele</Link></li>
                        <li><Link to={'/TwojeRezerwacja'} className="reservation-link"><img src={YourReservation} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                        <li><a href="#"><img src={Information} alt="Info"/>Zasady umowy</a></li>
                        
                    </ul>
                    <Link to={`/ulubione`} className='favouriteLink'>
                        <p className='favouriteLinkP'><img className='heart' src={Heart}></img></p>
                    </Link>
                    </div>
                    <div className='header-bottom'>
                        <div className='header-bottom-items'>
                            <input type='input' placeholder='Dokąd się wybierasz?'  defaultValue={localCountry} onChange={(event) => setPlace(event.target.value)}></input>
                            <input type='date' placeholder='Od Kiedy?' defaultValue={localTrue ? localStart : ''} onChange={(event) => setStart(event.target.value)}></input>
                            <input type='date' placeholder='Do kiedy?' defaultValue={localEnd} onChange={(event) => setEnd(event.target.value)}></input>
                            <input type='Number' placeholder='Ile osób podróżuje?' defaultValue={localPeople} onChange={(event) => setPeople(event.target.value)}></input>
                            <input type='submit' value="Szukaj" onClick={Search}></input>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
   </div>
  );
}

export default HomePage;
