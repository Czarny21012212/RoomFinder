import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import Lot from '../Image/Loty.png';
import Car from '../Image/Car.png';
import Atrakcje from '../Image/Atrakcje.png';
import './Reservation.css'
import { useEffect, useState } from 'react';


function Reservation() {

//Search the Hotel in Json
const id = localStorage.getItem('Hotel')
const hotel = HotelData.find(hotel => hotel.id === parseInt(id));

const [people, setPeople] = useState(null);

const[peopleData, setPeopleData] = useState([])

useEffect(() => {
    const newPeopleData = Array.from({ length: people }, (_, index) => {
        return peopleData[index] || { name: '', surName: '', pesel: '' };
    });
    setPeopleData(newPeopleData);
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
    for (let x = 0; x < people; x++) {
        elements.push(
            <div key={x} style={{backgroundColor: 'black', color: 'white', width: '200px',margin: '10px', padding: '20px', borderRadius: '10px' }}>
                <h3>Osoba {x + 1}</h3>
                <p>Podaj imie</p>
                <input type='text'
                onChange={(event) => addPerson(x, 'name', (event.target.value))}
                ></input>
                <p>Podaj Nazwisko</p>
                <input type='text'
                onChange={(event) => addPerson(x, 'surName', (event.target.value))}
                ></input>
                <p>Podaj pesel</p>
                <input type='text'
                onChange={(event) => addPerson(x, 'pesel', event.target.value)}
                ></input>
            </div>
        )
    }
    return elements
}

const[checkIn , setCheckIn] = useState(null)
const[checkOut , setCheckOut] = useState(null)

const[price, setPirce] = useState(null)
const[days, setDays] = useState(null)

useEffect(() =>{
    const date1 = new Date(checkIn)
    const date2 = new Date(checkOut)
    setDays((date2 - date1) / (1000 * 60 * 60 * 24));
}, checkOut)

useEffect(() => {
    setPirce(days * hotel.pricePerNight * people)
}, people)

const[checkTest, SetCheckTest] = useState(false)

const Check1 = () => {
    for(let x = 0; x < people; x++){
        if((data[x].pesel).length === 11 && !isNaN(data[x].pesel) && isNaN(data[x].name) && isNaN(data[x].surName)){
            SetCheckTest(true)
        }else{
            setMessage("Bląd podczas wpisywania danych " + (x + 1) + " osoby ")
            SetCheckTest(false)
            break;
        }
    }
}


useEffect(() => {
    if(checkTest){
        setMessage("Dalej")
    }else{
        console.log("Nara")
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
                    <ul>
                        <a><li><img src={Home}></img>Strona Główna</li></a>
                        <a className='Now'><li><img src={Hotel2} ></img>Hotele</li></a>
                        <a><li><img src={Lot}></img>Loty</li></a>
                        <a><li><img src={Car}></img>Wynajem samochodów</li></a>
                        <a><li><img src={Atrakcje}></img>Atrakcje</li></a>
                    </ul>
                </div>
            </div>
        </header>
        <div className='reservation-box'>
            <div className='reserwation'>
                <h1>Rezerwacja hotelu <u>{hotel.name}</u></h1>
                <p>(dane które wprowadzisz zostaną zapisane oraz przeanalizowane)</p>
                <p>(W żadnym przypadku nie podawaj fałszywych danych)</p>
                <hr></hr>
                <p>Data zameldowania</p>
                <input
                type='date'
                onChange={(event) => setCheckIn(event.target.value)}>
                </input>
                <br></br>
                <p>Data Wymeldowania</p>
                <input
                type='date'
                onChange={(event) => setCheckOut(event.target.value)}>
                </input>
                <p>Ilość osób</p>
                <input
                type='number'
                onChange={(event) =>  setPeople(event.target.value)}
                >
                </input>
                <div style={{display: 'flex'}}>
                    {renderPeople()}
                    
                    
                </div>
                <p>{message}</p>

                <h3>Cena: {price}zł</h3>

                <input
                type='submit'
                value='Dalej'
                onClick={Check1}
                ></input>
                
            </div>
        </div>
    </div>
  );
}

export default Reservation;

