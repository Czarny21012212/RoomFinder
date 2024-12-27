import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import Lot from '../Image/Loty.png';
import Car from '../Image/Car.png';
import Atrakcje from '../Image/Atrakcje.png';
import './Reservation.css'

function Reservation() {

    const check1 = localStorage.getItem('check1')
    console.log(localStorage.getItem('days'))

    const people = JSON.parse(localStorage.getItem('People'))
    console.log(people)

    function html() {
    if(check1 === 'true'){
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
                        </div>
                </div>
            </div>  
        </div>
       );
    }else{
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
        

        {html()}
    </div>
  );
}

export default Reservation;

