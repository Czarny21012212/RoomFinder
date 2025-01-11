
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
import Bed from '../Image/bed.png'
import Group from '../Image/group.png'
import './HomePage.css'

import card from '../Image/money.png'
import global from '../Image/global.png'
import card2 from '../Image/card.png'
import verified from '../Image/verified.png'


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
                        <input type='input' placeholder='Dokąd?'  defaultValue={localCountry} onChange={(event) => setPlace(event.target.value)}></input>
                        <img src={Bed} className='header-bottom-items-img'></img>
                        <input type='date' placeholder='Do kiedy?' defaultValue={localTrue ? localStart : ''} onChange={(event) => setStart(event.target.value)}></input>
                        <input type='date' placeholder='Do kiedy?' defaultValue={localEnd} onChange={(event) => setEnd(event.target.value)}></input>
                        <input type='Number' placeholder='Ile osób?' defaultValue={localPeople} onChange={(event) => setPeople(event.target.value)}></input>
                        <img src={Group} className='header-bottom-items-img'></img>
                        <input type='submit' value="Szukaj" onClick={Search}></input>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <div className='HomePageSections'>
            <div className='HomePageSections-box'>

                <div className='HomePageSection1'>
                    <div className='HomePageSection1-Box'>
                        <div>
                            <img src={card}></img>
                            <p>gwaracja ceny organizatora</p>
                        </div>

                        <div>
                            <img src={global}></img>
                            <p>Oferty od około 100 biur podrózy</p>
                        </div>

                        <div>
                            <img src={card2}></img>
                            <p>odroczone płatności i raty</p>
                        </div>

                        <div>
                            <img src={verified}></img>
                            <p>Darmowa promesa pewne wakacje</p>
                        </div>

                    </div>
                </div>

                <div className='HomePageSection2'>
                    <div className='HomePageSection2-box'>
                        <h2>Popularne Kierunki</h2>
                        <div className='HomePageSection2-context'>
                            <div className='HomePageSection2-contextItem'>
                                <p>Kreta</p>
                                <p className='HomePageSection2-contextItemSpecial'>34 045 opini</p>
                            </div>
                            <div className='HomePageSection2-contextLine'></div>
                            <div className='HomePageSection2-contextItem'>
                                <p>Grecja</p>
                                <p className='HomePageSection2-contextItemSpecial'>32 045 opini</p>
                            </div>
                            <div className='HomePageSection2-contextLine'></div>
                            <div className='HomePageSection2-contextItem'> 
                                <p>Hiszpania</p>
                                <p className='HomePageSection2-contextItemSpecial'>30 045 opini</p>
                            </div>
                            <div className='HomePageSection2-contextLine'></div>
                            <div className='HomePageSection2-contextItem'>
                                <p>Wybrzeże Eqejskie</p>
                                <p className='HomePageSection2-contextItemSpecial'>29 045 opini</p>
                            </div>
                            <div className='HomePageSection2-contextLine'></div>
                            <div className='HomePageSection2-contextItem'>
                                <p>Rodos</p>
                                <p className='HomePageSection2-contextItemSpecial'>28 045 opini</p>
                            </div>
                            <div className='HomePageSection2-contextLine'></div>
                            <div className='HomePageSection2-contextItem'>
                                <p>Turcja</p>
                                <p className='HomePageSection2-contextItemSpecial'>26 045 opini</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='HomePageSection3'>
                    <h2>Pomysły na Urlop</h2>
                    <div className='HomePageSection3-context'>
                        <div className='HomePageSection3-contextTop'>
                            <div>
                                <img src='https://www.zwiedzaczek.com.pl/wp-content/uploads/syberia.jpg'></img>
                                <p className='HomePageSection3-contextTopText'>Syberia</p>
                            </div>
                            <div>
                                <img src='https://www.itaka.pl/blog/wp-content/uploads/2019/08/nosy-be-madagaskar-ocean-wypoczynek-rajska-pla%C5%BCa-egzotyczne-wakacje-11.jpg'></img>
                                <p className='HomePageSection3-contextTopText'>Madagaskar</p>
                            </div>
                            <div>
                                <img src='https://traveltalks.esky.pl/wp-content/uploads/2024/07/Alanya-Turcja-%C2%A9-Shutterstock-1200x680.jpg'></img>
                                <p className='HomePageSection3-contextTopText'>Turcja</p>
                            </div>
                        </div>
                        <div className='HomePageSection3-contextbottom'>
                        <div>
                                <p className='HomePageSection3-contextbottomText'>Grecja</p>
                                <img src='https://prom-janowiec.pl/_next/image?url=https%3A%2F%2Fprom-janowiec.pl%2Fstorage%2Fmedia%2F91c79b27-e056-4886-b6e4-abcf2dcd17a0%2Fthumbnail%2FLMjNthFOxtTQrIs5Iw5bu22LpjCFpi%2Fbfe1f8669dba7804e9e526f073e653d7.webp&w=1080&q=75'></img>
                           </div>
                            <div>
                                <p className='HomePageSection3-contextbottomText'>Egipt</p>
                                <img src='https://fly.pl/wp-content/uploads/2023/08/egipt.jpg'></img>
                           </div>
                            <div>
                                <p className='HomePageSection3-contextbottomText'>Hawaje</p>
                                <img src='https://cdn.podroze.smcloud.net/t/photos/t/143353/na-wyspie-kauai-jest-niemal-80-km-piaszczystych-pl_1118242.jpg'></img>
                           </div>
                           <div>
                                <p className='HomePageSection3-contextbottomText'>Tunezja</p>
                                <img src='https://fly.pl/wp-content/uploads/2017/03/Tunezja.jpg'></img>
                           </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        
   </div>
  );
}

export default HomePage;
