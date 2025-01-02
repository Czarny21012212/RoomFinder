import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import './YourReservation.css'
import { Link } from 'react-router-dom';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import { useEffect, useState } from 'react';

function Reservation() {

    const id = localStorage.getItem('hotel-id-check2')
    const hotel = HotelData.find((hotel) => hotel.id === parseInt(id))

    const[CancelReservationTrue, setCancelReservationTrue] = useState(false)

   function html(){
        if(localStorage.getItem('payCheck')){

            const people = JSON.parse(localStorage.getItem('People-check2'))
           

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
            const specialWishes = () => {
                return(
                    <div className='specialWishes'>
                        <p>{localStorage.getItem('specialWishes')}</p>
                    </div>
        
                );
            }
            const CancelReservation = () => {
                if(CancelReservationTrue){
                    return(
                        <div className='cancelReservation-window'>
                        <h1>Czy jesteś pewny?</h1>
                        <p>Zerwanie Umowy może skutkować zwrotem niepełnej sumy<br />(kwota: {localStorage.getItem('price')}zł przyjdzie po około 11 dniach roboczych)</p>
                        <input
                            type='submit'
                            value='Nie anuluj'
                            className='cancelReservation-window-button cancel'
                            onClick={() => setCancelReservationTrue(false)}
                        />
                        <input
                            type='submit'
                            value='Anuluj rezerwacje'
                            className='cancelReservation-window-button'
                            onClick={dropData}
                        />
                    </div>    
                    );
                }else{
                    
                }
            }


            return(
                <div className='reservation-box'>
                    <div className='reservation'>
                        <div className='yourReservation-section1'>
                            <h2>Twoja rezerwacja</h2>
                            <p>data rezerwacji: {localStorage.getItem('date-Reservation-check2')}</p>
                            <p></p>
                        </div>
                        <div className='yourReservation-aboutHotel'>
                        <div className='hotel-left-yourReservation'>
                               <div className='hotel-left-left'>
                                    <h4>{hotel.name}</h4>
                                        <p className='hotel-location'>{hotel.location}</p>
                                        <div className='hotel-left-opinion'>
                                            <p className='hotel-guestRating'>{hotel.guestRating}</p>
                                            <p>{hotel.verbalRating}</p>
                                            <p className='hotel-opinion'>{hotel.reviewsCount} opini</p>
                                        </div>
                               </div>
                               <div className='hotel-left-right'>
                                    <img style={{width: '200px'}} src={hotel.photo} />
                                    <img style={{width: '200px'}} src={hotel.photo2} />
                               </div>

                        </div>
                        </div>
                        <div className='section-1'>
                            <div className='reservationDate-box'>
                                <h3>Termin Twojej rezerwacji</h3>
                               <div className='reservationDate'>
                                    <div className='reservationDate-left'>
                                        <p>Zameldowanie</p>
                                        <p style={{fontWeight: 'bold'}}>{localStorage.getItem('checkIn-Reservation-check2')}</p>
                                        <p style={{color: '#8f8f8f'}}>Od {hotel.checkIn}</p>
                                    </div>
                                    <div className='reservationDate-line'>

                                    </div>
                                    <div className='reservationDate-right'>
                                        <p>Wymeldowanie</p>
                                        <p style={{fontWeight: 'bold'}}>{localStorage.getItem('checkOut-Reservation-check2')}</p>
                                        <p style={{color: '#8f8f8f'}}>Od {hotel.checkOut}</p>
                                    </div>
                               </div>
                                <p>Całkowita długość pobytu: {localStorage.getItem('days')} dni</p>
                            </div>
                            <div className='contact-box'>
                                <h3>Dane kontaktowe</h3>
                                <p>Email: {localStorage.getItem('email-check-2')}</p>
                                <ul>
                                    <li>Odpowiadamy na wiadomości e-mail w ciągu 24 godzin.</li>
                                    <li>Preferujemy kontakt e-mailowy w celu zachowania pisemnej dokumentacji.</li>
                                    <li>W nagłych przypadkach prosimy o kontakt telefoniczny.</li>
                                    <li>Prosimy o podanie numeru rezerwacji w każdej korespondencji.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='peopleData'>
                            <h3>Członkowie rezerwacji</h3>
                            <div className='peopleCart'>
                                {people.map((person, index) => {
                                    return (
                                        <div key={index} className='peopleCart-box'>
                                            <p><strong>Imię:</strong> {person.name}</p>
                                            <p><strong>Nazwisko:</strong> {person.surName}</p>
                                            <p><strong>Pesel:</strong> {person.pesel}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='section-2'>
                            <div className='specialWishes-box'>
                            <h3>Specjalne Życzenia</h3>
                            {localStorage.getItem('SpecialWishes-check2') == '' ? specialWishes() : 'Brak'}
                            </div>
                        </div>
                        <div className='yourReservation-section2'>
                            <div className='yourReservation-section2-left' >
                                <h3>Kwota za hotel</h3>
                                <p style={{fontWeight: '600', color: 'green', fontSize: '1.1rem'}}>{localStorage.getItem('price')}zł</p>
                                <p>Płatność: Karta Visa</p>
                            </div>
                            <div className='yourReservation-section2-right'>
                                <h3>Zasady dotyczące umowy</h3>
                                <input
                                type='submit'
                                value="Zasady umowy"
                                ></input>
                            </div>
                        </div>

                        <div className='yourReservation-section3'>
                            <h3>Anulowanie rezerwacji</h3>
                            {CancelReservation()}
                            <input
                                type='submit'
                                value="Anuluj Rezerwacje"
                                onClick={CancelReservationTrueClick} 
                            ></input>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className='reservation-box'>
                    <div className='reservation'>
                        <h1>Zacznij z nami swoją przygodę...</h1>
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

