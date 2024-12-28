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

    const [numberOfCart, setNumberOfCart] = useState('');
    const [expirationDateOfCard, setExpirationDateOfCard] = useState('');
    const [cv, setCv] = useState('');
    const [payCheck, setPayCheck] = useState(false);

const Pay = () => {
    const cartDate = new Date(expirationDateOfCard.trim());
    const now = new Date();

    if (numberOfCart.trim().length === 16 && !isNaN(cartDate) && cartDate > now && cv.trim().length === 3) {

        setTimeout(() => {
            window.location.href = 'http://localhost:3000';
            setPayCheck(true);
            localStorage.setItem('payCheck', true);
            console.log("Wszytko poszło zgodznie z planem")
        }, 300)

        alert('Płatność przebiegła pomyślnie')

    } else {
        setPayCheck(false);
        localStorage.setItem('payCheck', false);
        console.log("Wszytko poszło żle")
    }
};

    function html() {
    if(check1 === 'true' && !localStorage.getItem('payCheck') ){
       return(
        <div className='boxCheck2'>
            <div className='check2'>
                <div className='status'> 
                    <div className='status1' style={{backgroundColor: 'rgb(172, 172, 172)'}}>
                        
                    </div>
                    <div className='status2'style={{backgroundColor: 'aqua'}}>  
                    </div>
                    
                </div>
                <div className='informationAboutTrip'>
                <h3>Rezerwacja rozpoczna się</h3>
                        <div className='date'>
                            <p>od: {localStorage.getItem('checkIn-Reservation')}</p>
                            <p>do: {localStorage.getItem('checkOut-Reservation')} </p>
                            <p>({localStorage.getItem('days')} dni)</p>
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

