import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import './YourReservation.css'
import { Link } from 'react-router-dom';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import { useEffect, useState } from 'react';

function Reservation() {

    const[CancelReservationTrue, setCancelReservationTrue] = useState(false)

   function html(){
        if(localStorage.getItem('payCheck')){

            const people = JSON.parse(localStorage.getItem('People'))
           

            const CancelReservationTrueClick = () => {
                setCancelReservationTrue(true)
            }


            const dropData = () => {
                localStorage.removeItem('checkIn-Reservation');
                localStorage.removeItem('checkOut-Reservation');
                localStorage.removeItem('days');
                localStorage.removeItem('price');
                localStorage.removeItem('payCheck');
        

                window.location.href = 'http://localhost:3000/TwojeRezerwacja';
            }
            const CancelReservation = () => {
                if(CancelReservationTrue){
                    return(
                        <div className='cancelReservation-window'>
                            <h1>Czy jesteś pewny?</h1>
                            <p>Anulowanie Umowy może skutkować zróceniem nie pełnej sumy<br></br>(kwota: {localStorage.getItem('price')}zł przyjdzie po około 11 dniach roboczych )</p>
                            <input
                            type='submit'
                            value='Anuluj rezerwacje'
                            onClick={dropData}
                            ></input>
                            <input
                            type='submit'
                            value='Nie anuluj'
                            onClick={() => setCancelReservationTrue(false)}
                            ></input>
                        </div>    
                    );
                }else{
                    
                }
            }


            return(
                <div className='reservation-box'>
                    <div className='reservation'>
                        <h1>Twoja rezerwacja</h1>
                        <h4> data rezerwacji: {localStorage.getItem('date-Reservation')}</h4>
                        <h3>Nazwa hotelu</h3>
                        <p>{localStorage.getItem('Reservaion-hotelName')}</p>
                        <h3>Członkowie wycieczki</h3>
                        {people.map((person, index) => {
                            return(
                                <div key={index}>
                                    <p> {index + 1}. {person.name} | {person.surName} | {person.pesel}</p>
                                </div>
                            )
                        })}
                        <h3>Rezerwacja rozpoczna się</h3>
                        <div className='date'>
                            <p>od: {localStorage.getItem('checkIn-Reservation')}</p>
                            <p>do: {localStorage.getItem('checkOut-Reservation')} </p>
                            <p>({localStorage.getItem('days')} dni)</p>
                        </div>
                        <h3>Kwota za hotel</h3>
                        <p>{localStorage.getItem('price')}zł</p>
                        <p>Płatność: Karta Visa</p>
                        <h3>Zasady dotyczące umowy</h3>
                        <input
                        type='submit'
                        value="Zasady umowy"
                        ></input>

                        <h3>Anulowanie rezerwacji</h3>
                        {CancelReservation()}
                        <input
                            type='submit'
                            value="Anuluj Rezerwacje"
                            onClick={CancelReservationTrueClick} 
                        ></input>
                    </div>
                </div>
            );
        }else{
            return(
                <div className='reservation-box'>
                    <div className='reservation'>
                        <h1>Brak rezerwacji</h1>
                    </div>
            </div>
            );
        }
   }


  return (
    <div className='all'>
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
        <div>
            {html()}
        </div>
    </div>

  );
}

export default Reservation;

