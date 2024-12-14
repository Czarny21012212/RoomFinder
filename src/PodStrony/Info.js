import './Info.css';
import { Link, useParams } from 'react-router-dom';
import HotelData from './Json/Hotel.json'; // Załaduj dane hotelu
import Home from './Image/Home.png';
import Hotel2 from './Image/Hotel.png';
import Lot from './Image/Loty.png';
import Car from './Image/Car.png';
import Atrakcje from './Image/Atrakcje.png';

function Info() {
  const { id } = useParams(); // Pobierz parametr 'id' z URL
  const hotel = HotelData.find(hotel => hotel.id === parseInt(id)); 

  if (!hotel) {
    return <p>Hotel nie został znaleziony.</p>;
  }
  return (
    <div className="hotel-details">
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

        <div className='infoHotel'>
          <div className='firstInfoHotel'>
              <div className='infoHotel-top'>
                  <p className='name'>{hotel.name}</p>
                  <p className='location'>{hotel.location}</p>
              </div>
              <div className='infoHotel-bottom'>
                <div className='infoHotel-bottom-left'>
                      <div className='infoHotel-bottom-left-top'>
                          <div className='infoHotel-bottom-left-top-left'>
                              <img src={hotel.photo} className='mainPhoto'></img>
                          </div>
                          <div className='infoHotel-bottom-left-top-right'>
                              <img src={hotel.photo2} className='rightPhoto'></img>
                              <img src={hotel.photo3} className='rightPhoto'></img>
                          </div>
                      </div>
                      <div className='infoHotel-bottom-left-bottom'>
                        <div className='infoHotel-bottom-left-bottom'>
                                <img src={hotel.photo4} className='bottomPhoto'></img>
                                <img src={hotel.photo5} className='bottomPhoto'></img>
                                <img src={hotel.photo6} className='bottomPhoto'></img>
                                <img src={hotel.photo7} className='bottomPhoto'></img>
                                <img src={hotel.photo8} className='bottomPhotoEffect'></img>
                          </div>
                      </div>
                </div>
                <div className='infoHotel-bottom-right'>
                    
                    </div>

              </div>
          </div>
        </div>

    </div>
  );
}

export default Info;

