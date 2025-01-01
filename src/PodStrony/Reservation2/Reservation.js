import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import './Reservation.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Reservation() {

    const check1 = localStorage.getItem('check1')
    console.log(localStorage.getItem('days'))

    const people = JSON.parse(localStorage.getItem('People'))
    console.log(people)

    const id = localStorage.getItem('Hotel')
    const hotel = HotelData.find(hotel => hotel.id === parseInt(id));
    localStorage.setItem('Reservaion-hotelName', hotel.name);

    const [numberOfCart, setNumberOfCart] = useState('');
    const [expirationDateOfCard, setExpirationDateOfCard] = useState('');
    const [cv, setCv] = useState('');
    const [payCheck, setPayCheck] = useState(false);

const Pay = () => {
    const cartDate = new Date(expirationDateOfCard.trim());
    const now = new Date();

    if (numberOfCart.trim().length === 16 && !isNaN(cartDate) && cartDate > now && cv.trim().length === 3) {

        setTimeout(() => {
            window.location.href = 'http://localhost:3000/TwojeRezerwacja';
            setPayCheck(true);
            localStorage.setItem('payCheck', true);
            console.log("Wszytko poszło zgodznie z planem")
        }, 300)

        alert('Płatność przebiegła pomyślnie')

    } else {
        setPayCheck(false);
        localStorage.setItem('payCheck', false);
        localStorage.setItem('Reservaion-hotelName', false);
        console.log("Wszytko poszło żle")
    }
};

    function html() {
    if(check1 === 'true' && !localStorage.getItem('payCheck') ){
       return(
        <div className='boxCheck2'>
            <div className='check2'>
                <div className='status-check2'>
                        <div className='status-box-check2'>
                            <div className='status-box-left-check2'>
                                <p>1</p>
                                <span>Twój wybór</span>
                            </div>
                                <div className='line-first-check2'></div>
                            <div className='status-box-center-check2'>
                                <p>2</p>
                                <span>Twoje Dane</span>
                            </div>
                                <div className='line-second-check2'></div>
                            <div className='status-box-right-check2'>
                                <p>3</p>
                                <span>Finalizacja Rezerwacji</span>
                            </div>

                        </div>
                    </div>
                <div className='informationAboutTrip'>
                        <div className='section-1'>
                            <div className='reservationDate-box'>
                                <h3>Termin Twojej rezerwacji</h3>
                               <div className='reservationDate'>
                                    <div className='reservationDate-left'>
                                        <p>Zameldowanie</p>
                                        <p style={{fontWeight: 'bold'}}>{localStorage.getItem('checkIn-Reservation')}</p>
                                        <p style={{color: '#8f8f8f'}}>Od {hotel.checkIn}</p>
                                    </div>
                                    <div className='reservationDate-line'>

                                    </div>
                                    <div className='reservationDate-right'>
                                        <p>Wymeldowanie</p>
                                        <p style={{fontWeight: 'bold'}}>{localStorage.getItem('checkOut-Reservation')}</p>
                                        <p style={{color: '#8f8f8f'}}>Od {hotel.checkOut}</p>
                                    </div>
                               </div>
                                <p>Całokita długość pobytu: {localStorage.getItem('days')} dni</p>
                            </div>
                            <div className='contact-box'>
                                <h3>Dane kontaktowe</h3>
                                <p>Email: {localStorage.getItem('email')}</p>
                                <ul>
                                    <li>Odpowiadamy na wiadomości e-mail w ciągu 24 godzin.</li>
                                    <li>Preferujemy kontakt e-mailowy w celu zachowania pisemnej dokumentacji.</li>
                                    <li>W nagłych przypadkach prosimy o kontakt telefoniczny.</li>
                                    <li>Prosimy o podanie numeru rezerwacji w każdej korespondencji.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className='specialWishes-box'>
                            <h3>Specjalne Życzenia</h3>
                            <p>Treść: {localStorage.getItem('specialWishes')}</p>
                        </div>

                        <div className='check2-peopleCarts'>
                            <h3>Członkowie rezerwacji</h3>
                            <p>(Pominięcie którejkolwiek z osób może skutkować zerwaniem umowy)</p>
                                <div className='peopleCart'>
                                        {people.map((person, index) =>{
                                            return(
                                                <div id={index} className='peopleCart-box'>
                                                    <p>Imie: {person.name}</p>
                                                    <p>Nazwisko: {person.surName}</p>
                                                    <p>Pesel: {person.pesel}</p>
                                                </div>
                                            );
                                        })}
                                </div>
                            <div>
                                <h3>Cena: {localStorage.getItem('price')}zł</h3>
                            </div>

                            <hr></hr>

                            <h3>Płatność</h3>
                            <p>(Płatność możliwa wyłącznie kartą Visa)</p>
                            <div style={{border: '1px solid black', padding: '20px'}}>
                                <p>Rezerwacja Hotelu {hotel.name}</p>
                                <h3>Kwota: {localStorage.getItem('price')}zł</h3>
                                <label>Numer Karty</label>
                                <input
                                type='number'
                                maxLength="16"
                                placeholder="1111 1111 1111 1111"
                                style={{width: '125px'}}
                                onChange={(event) => setNumberOfCart(event.target.value)}
                                ></input>

                                <br></br>

                                <label>Data Ważności</label>
                                <input
                                type='date'
                                onChange={(event) => setExpirationDateOfCard(event.target.value)}
                                ></input>

                                <br></br>

                                <label>CVV2/CVC2</label>
                                <input
                                type='text'
                                maxLength="3"
                                placeholder="111"
                                onChange={(event) => setCv(event.target.value)}
                                style={{width: '20px'}}
                                ></input>

                                <br></br>

                                <input
                                value="Zapłać"
                                type='submit'
                                onClick={Pay}
                                ></input>
                            </div>
                        </div>
                </div>
            </div>  
        </div>
       );
    }else{
        console.log(localStorage.getItem('payCheck') === false)
        return(
            <div>
                <h1>A ty Cwaniaku nie tym razem</h1>
            </div>
        );           
    }}

  return (
    <div className='all'>
        <header>
            <div className='header-items'>
                <div className='header-top'>
                    <h1>RoomFinder.com</h1>
                </div>
                <div className='header-center'>
                <ul className="header-center">
                    <li><a><img src={Home} alt="Home"/>Strona Główna</a></li>
                    <li><a className='Now'><img src={Hotel2} alt="Hotel"/>Hotele</a></li>
                    <li><Link to={'/TwojeRezerwacja'} className="reservation-link"><img src={Hotel2} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                    <li><a><img src={Hotel2} alt="Info"/>Informacje</a></li>
                </ul>
                </div>
            </div>
        </header>
        

        {html()}
    </div>
  );
}

export default Reservation;

