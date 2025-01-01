import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import './Reservation.css'
import { useEffect, useState } from 'react';
import { setDay } from 'date-fns';
import { Link } from 'react-router-dom';


function Reservation() {

//Search the Hotel in Json
const id = localStorage.getItem('Hotel')
const hotel = HotelData.find(hotel => hotel.id === parseInt(id));

const [people, setPeople] = useState(null);

const[peopleData, setPeopleData] = useState([])

useEffect(() => {
   if(people > 10){
   }else{
    const newPeopleData = Array.from({ length: people }, (_, index) => {
        return peopleData[index] || { name: '', surName: '', pesel: '' };
    });
    setPeopleData(newPeopleData);
   }
},[people])

const[errorCheck, setErrorCheck] = useState(false)
const[message, setMessage] = useState()
const[data, setData] = useState()


function addPerson(index, column, value) {
        const newPeople = [...peopleData];
        newPeople[index][column] = value;
        localStorage.setItem('People', JSON.stringify(peopleData));
        setData(JSON.parse(localStorage.getItem('People')))
}

const renderPeople = () => {
    const elements = []
    if(people < 5){
        for (let x = 0; x < people; x++) {
            elements.push(
                <div key={x} className='person'>
                    <h2>Osoba {x + 1}</h2>
                    <p>Podaj imie</p>
                    <input type='text' placeholder='Imie'
                    onChange={(event) => addPerson(x, 'name', (event.target.value))}
                    ></input>
                    <p>Podaj Nazwisko</p>
                    <input type='text' placeholder='Nazwisko'
                    onChange={(event) => addPerson(x, 'surName', (event.target.value))}
                    ></input>
                    <p>Podaj pesel</p>
                    <input type='text' placeholder='Pesel'
                    onChange={(event) => addPerson(x, 'pesel', event.target.value)}
                    ></input>
                </div>
            )
        }
        return elements
    }
}

const[dataCheck, setDataCheck] = useState(false)
const[dateMessage, setDateMessage] = useState(null)

const[checkIn , setCheckIn] = useState(null)
localStorage.setItem('checkIn-Reservation', checkIn)
const[checkOut , setCheckOut] = useState(null)
localStorage.setItem('checkOut-Reservation', checkOut)

const[price, setPrice] = useState(null)
const[days, setDays] = useState(null)

const[email, setEmail] = useState(null)
const[specialWishes, setSpecialWishes] = useState(null)

useEffect(() => {
    localStorage.setItem('email', email)
}, [email])

useEffect(() => {
    localStorage.setItem('specialWishes', specialWishes)
}, [specialWishes])

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

useEffect(() => {
    const now = new Date();
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);

    localStorage.setItem('date-Reservation', formatDate(date1));

    if (now < date1 && date1 < date2) {
        setDays((date2 - date1) / (1000 * 60 * 60 * 24));
        localStorage.setItem('days', (date2 - date1) / (1000 * 60 * 60 * 24));
        setDataCheck(true);
        setDateMessage(null);
    } else {
        setDays("Błąd");
        setDataCheck(false);
    }
}, [checkIn, checkOut]);

useEffect(() => {
    setPrice(days * hotel.pricePerNight * people)
    localStorage.setItem('price', (days * hotel.pricePerNight * people))
}, [people, days])

const[checkInput, SetCheckInput] = useState(false)
localStorage.setItem('check1', false)

const Check1 = () => {
    for(let x = 0; x < people; x++){
        if((data[x].pesel).length === 11 && !isNaN(data[x].pesel) && isNaN(data[x].name) && isNaN(data[x].surName)){
            SetCheckInput(true)
            setMessage(null)
        }else{
            setMessage("Bląd podczas wpisywania danych " + (x + 1) + " osoby ")
            SetCheckInput(false)
            break;
        }
    }
    if(!dataCheck){
        setDateMessage("źle podana data")
    }else if(!email){
        SetCheckInput(false)
        setMessage("Podaj email")
    }else if(email.indexOf('@') === -1){
        SetCheckInput(false)
        setMessage("Podaj poprawny email")
    }else{
        setMessage("")
    }
}


useEffect(() => {
    if(checkInput && dataCheck){
        localStorage.setItem('check1', true)
        window.location.href = 'http://localhost:3000/rezerwacja-check-2';
    }else{
        localStorage.setItem('check1', false)
    }
}, [Check1])
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
                    <li><Link to={'/TwojeRezerwacja'} className="reservation-link"><img src={YourReservation} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                    <li><a><img src={Information} alt="Info"/>Informacje</a></li>
                </ul>
                </div>
            </div>
        </header>


        <div className='reservation-box'>
            <div className='reserwation'>
                <div className='status'>
                <div className='status'>
                    <div className='status-box'>
                        <div className='status-box-left'>
                            <p>1</p>
                            <span>Twój wybór</span>
                        </div>
                            <div className='line-first'></div>
                        <div className='status-box-center'>
                            <p>2</p>
                            <span>Twoje Dane</span>
                        </div>
                            <div className='line-second'></div>
                        <div className='status-box-right'>
                            <p>3</p>
                            <span>Finalizacja Rezerwacji</span>
                        </div>

                    </div>
                </div>
                </div>
                <div className='hotel-top'>
                    <div className='hotel-left'>
                        <h4>{hotel.name}</h4>
                        <p className='hotel-location'>{hotel.location}</p>
                        <div className='hotel-left-opinion'>
                            <p className='hotel-guestRating'>{hotel.guestRating}</p>
                            <p>{hotel.verbalRating}</p>
                            <p className='hotel-opinion'>{hotel.reviewsCount} opini</p>
                        </div>
                        
                    </div>
                    <div className='hotel-right'>
                        <h4>Polityka anulowania</h4>
                        <p>Jeśli anulujesz rezerwację, zwrócimy Ci tylko 80% całkowitej kwoty.</p>
                    </div>
                </div>
                <div className='date-box'>
                    <div className='date-inputs'>
                        <p>Data zameldowania</p>
                        <input
                        type='date'
                        onChange={(event) => setCheckIn(event.target.value)}>
                        </input>
                    </div>

                    <div className='date-inputs'>
                        <p>Data Wymeldowania</p>
                        <input
                        type='date'
                        onChange={(event) => setCheckOut(event.target.value)}>
                        </input>
                    </div>
                </div>

                <div className='reservation-details'>
                    <h2>Wpisz dane osób</h2>
                    <div className='inputs-Group'>
                    <div className='input-box'>
                        <p>Email</p>
                        <input
                        type='email'
                        placeholder='@przykład.com'
                        onChange={e => setEmail(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className='input-box'>
                        <p>Ilość osób</p>
                        <input
                        type='number'

                        onChange={(event) =>  setPeople(event.target.value)}
                        >
                        </input>
                    </div>
                    </div>
                    

                    <div className='Cart-people'>
                        {renderPeople()}
                    
                    </div>
                </div>

                <div className='special-wishes'>
                    <h2>Życzneia specialne</h2>
                    <p>Realizacja życzeń specjalnych nie jest gwarantowana, ale obiekt postara się spełnić Twoją prośbę. Zawsze możesz dodać życzenie specjalne po sfinalizowaniu rezerwacji! </p>

                    <div className='special-wishes-box'>
                        <p>Wpisz swoje życzenia (język angielski lub hiszpański).</p>
                        <textarea
                        className='special-wishes-textarea'
                        maxLength={500}
                        onChange={ e => setSpecialWishes(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div className='Error-box'>
                {message ? <p className='Error'> * {message}</p> : ''}
                {dateMessage ? <p className='Error'> * {dateMessage}</p> : ''}
                </div>
                

                <div className='button-box'>
                <h3>{price ? `Cena rezerwacji: ${price}zł` : ''} </h3>
                    <input
                        className='submit-button'
                        type='submit'
                        value='Następny krok'
                        onClick={Check1}
                    ></input>
                </div>

                
            </div>
        </div>
    </div>
  );
}

export default Reservation;

