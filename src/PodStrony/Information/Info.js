import './Info.css';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../Footer/footer.js'
import HotelData from '../Json/Hotel.json'; 
import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';

import family from '../Image/family.png'
import pool from '../Image/pool.png'
import restaurant from '../Image/restaurant.png'
import freeSmoke from '../Image/freeSmoke.png'
import parking from '../Image/parking.png'
import wifi from '../Image/wifi.png'

import info from '../Image/info.png'
import night from '../Image/night.png'
import smoking from '../Image/smoke.png'
import party from '../Image/party.png'
import payMetods from '../Image/payMetod.png'
import login from '../Image/enter.png'
import logout from '../Image/logout.png'
import family2 from '../Image/family2.png'
import visa from '../Image/visa.png'
import pet from '../Image/pet.png';
import Heart from '../Image/Heart.png'



function Info() {
  const { id } = useParams(); 
  const hotel = HotelData.find(hotel => hotel.id === parseInt(id)); 

  if (!hotel) {
    return <p>Hotel nie został znaleziony.</p>;
  }

  const opinion = (x) => {
    return x * 30
  }

  const personel = opinion(hotel.Personel)
  const amenities = opinion(hotel.Amenities)
  const cleanLiness = opinion(hotel.Cleanliness)
  const comfort = opinion(hotel.Comfort)
  const valueForMoney = opinion(hotel['Value for money'])
  const location = opinion(hotel.Location)
  const freeWiFi = opinion(hotel['Free WiFi'])

  localStorage.setItem('Hotel', hotel.id)

 
  

  return (
    <div className="hotel-details">
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
                            <p className='favouriteLinkP'><img className='heart' src={Heart}></img></p>
                        </Link>
                    </div>
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
                    <div className='infoHotel-bottom-right-top'>
                        <div className='Cart-right-top'>
                            <div className='Cart-right-top-first'>
                                <div className='Cart-right-top-first-left'>
                                    <h2>{hotel.verbalRating}</h2>
                                    <p>{hotel.reviewsCount} opinii</p>
                                </div>
                                <div className='Cart-right-top-first-right'>
                                    <h2>{hotel.guestRating}</h2>
                                </div>
                            </div>
                            <div className='Cart-right-top-second'>
                                <p>Komfort: {hotel.comfort}</p>
                            </div>
                        </div>                              
                    </div>
                    <div className='infoHotel-details'>
                        <h2>Rezerwuj Teraz i Oszczędzaj</h2>
                        <p>Skorzystaj z naszych specjalnych ofert i zniżek. Rezerwując teraz, możesz zaoszczędzić nawet do <span>30%</span> na swoim pobycie. Nie czekaj, zarezerwuj już dziś!</p>
                    </div>
                    <div className='infoHotel-bottom-right-bottom'>
                        <div className='infoHotel-bottom-right-bottom-top'>
                            <h1>{localStorage.getItem('Price') ? (hotel.pricePerNight * localStorage.getItem('Price')) + " zł" : "Brak informacji"}</h1>
                        </div>    
                        <div className='infoHotel-bottom-right-bottom-bottom'>
                            <Link to='/rezerwacja-check-1'>
                                <input
                                    type='submit'
                                    value="Zarezerwuj Teraz"
                                />
                            </Link>
                        </div>                          
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className='amenities-box'>
            <div className='amenities'>
                <div className='amenities-h1'>
                    <h1>Najpopularniejsze udogodnienia</h1>
                </div>
                <div className='amenities-text'>
                    {hotel.family && (
                        <div className='amenities-true'>
                            <img src={family}></img>
                            <p> Pokoje Rodzinne</p>
                        </div>
                    )}

                    {hotel.pool && (
                        <div className='amenities-true'>
                            <img src={pool}></img>
                            <p> basen</p>
                        </div>
                    )}

                    {hotel.restaurant && (
                        <div className='amenities-true'>
                            <img src={restaurant}></img>
                            <p> Restauracja</p>
                        </div>
                    )}

                    {hotel.freeSmoke && (
                        <div className='amenities-true'>
                            <img src={freeSmoke}></img>
                            <p> Pokoje dla niepalących </p>
                        </div>
                    )}

                    {hotel.parking && (
                        <div className='amenities-true'>
                            <img src={parking}></img>
                            <p> Prywatny parking</p>
                        </div>
                    )}

                    {hotel.wifi && (
                        <div className='amenities-true'>
                            <img src={wifi}></img>
                            <p>Darmowe WI-FI</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className='opinions-box'>
            <div className='opinions'>
                <div className='opinios-h1'>
                    <h1>Opinie Gości </h1>
                    <div>
                        <p className='opinios-h1-div-special'>{hotel.guestRating}</p>
                        <p>{hotel.verbalRating} -</p> 
                        <p style={{color: 'rgb(99, 99, 99)'}}>{hotel.reviewsCount} opinii</p>
                    </div>
                </div>
                <div className='opinions-contents'>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Personel</p>
                            <p>{hotel.Personel}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                            className='opinions-content-bottom-percent2' 
                            style={{ 
                                width: personel + 'px',
                                position: 'absolute',
                                height: '10px',
                                backgroundColor: personel < 200 ? '#f34b21d3' : personel > 280 ? 'green' : '#2195f3d3',
                                borderRadius: '200px'
                            }}
                            ></div>
                        </div>
                        
                    </div>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Udogodnienia</p>
                            <p>{hotel.Amenities}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                                className='opinions-content-bottom-percent2' 
                                style={{ 
                                    width: amenities + 'px', 
                                    position: 'absolute', 
                                    height: '10px', 
                                    backgroundColor: amenities < 200 ? '#f34b21d3' : amenities > 280 ? 'green' : '#2195f3d3',
                                    borderRadius: '200px'
                                }} 
                            ></div>
                        </div>
                    </div>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Czystość</p>
                            <p>{hotel.Cleanliness}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                            className='opinions-content-bottom-percent2' 
                            style={{ 
                                width: cleanLiness + 'px',
                                position: 'absolute',
                                height: '10px',
                                backgroundColor: cleanLiness < 200 ? '#f34b21d3' : cleanLiness > 280 ? 'green' : '#2195f3d3',
                                borderRadius: '200px'
                            }}
                            ></div>
                        </div>
                    </div>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Komfort</p>
                            <p>{hotel.Comfort}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                            className='opinions-content-bottom-percent2' 
                            style={{ 
                                width: comfort + 'px',
                                position: 'absolute',
                                height: '10px',
                                backgroundColor: comfort < 200 ? '#f34b21d3' : comfort > 280 ? 'green' : '#2195f3d3',
                                borderRadius: '200px'
                            }}
                            ></div>
                        </div>
                    </div>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Stosunek jakości do ceny</p>
                            <p>{hotel['Value for money']}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                            className='opinions-content-bottom-percent2' 
                            style={{ 
                                width: valueForMoney + 'px',
                                position: 'absolute',
                                height: '10px',
                                backgroundColor: valueForMoney < 200 ? '#f34b21d3' : valueForMoney > 280 ? 'green' : '#2195f3d3',
                                borderRadius: '200px'
                            }}
                            ></div>
                        </div>
                    </div>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Lokalizacja</p>
                            <p>{hotel.Location}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                            className='opinions-content-bottom-percent2' 
                            style={{ 
                                width: location + 'px',
                                position: 'absolute',
                                height: '10px',
                                backgroundColor: location < 200 ? '#f34b21d3' : location > 280 ? '#3a9112' : '#2195f3d3',
                                borderRadius: '200px'
                            }}
                            ></div>
                        </div>
                    </div>
                    <div className='opinions-content'>
                        <div className='opinions-content-top'>
                            <p>Bezpłatne WiFi</p>
                            <p>{hotel['Free WiFi']}</p>
                        </div>
                        <div className='opinions-content-bottom'>
                            <div className='opinions-content-bottom-percent'></div>
                            <div 
                            className='opinions-content-bottom-percent2' 
                            style={{ 
                                width: freeWiFi + 'px',
                                position: 'absolute',
                                height: '10px',
                                backgroundColor: freeWiFi < 200 ? '#f34b21d3' : freeWiFi > 280 ? 'green' : '#2195f3d3',
                                borderRadius: '200px'
                            }}
                            ></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='statute-box'>
            <div className='statute'>
                <h1>Zasady pobytu</h1>
                <div className='statute-tabel'>
                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={login}></img>
                            <p>Zameldowanie</p>
                        </div>
                        <div className='statute-cart-right'>
                            <p>{hotel.checkIn}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={logout}></img>
                            <p>Wymeldowanie</p>
                        </div>
                        <div className='statute-cart-right'>
                            <p>{hotel.checkOut}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={info}></img>
                            <p>Odwołanie rezerwacji/ przedpłata</p>
                        </div>
                        <div className='statute-cart-right'>
                            <p>{hotel.Cancellation}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={family2}></img>
                            <p>Zakwaterowanie dzieci</p>
                        </div>
                        <div className='statute-cart-right'>
                            <h3>Zasady dotyczące pobytu dzieci</h3>
                            <p>{hotel.ChildrenAccommodation1}</p>
                            <h3>Zasady dotyczące łóżeczek dziecięcych i dodatkowych łóżek</h3>
                            <p>{hotel.ChildrenAccommodation2}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={payMetods}></img>
                            <p>Karty akceptowane w tym obiekcie</p>
                        </div>
                        <div className='statute-cart-right' style={{display: 'flex', gap: '20px'}}>
                            <img src={visa}></img>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={smoking}></img>
                            <p>Palenie tytoniu</p>
                        </div>
                        <div className='statute-cart-right' >
                            <p>{(hotel.Smoking) ? 'Palenie jest dozwolone' : 'Palenie jest zabronione'}</p>
                        </div>
                    </div>

                    <hr></hr>
                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={party}></img>
                            <p>Imprezy</p>
                        </div>
                        <div className='statute-cart-right' >
                        <p>{(hotel.Party) ? 'Organizacja imprez i przyjęć jest dozwolona' : 'Organizacja imprez i przyjęć jest zabroniona'}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={night}></img>
                            <p>Cisza nocna</p>
                        </div>
                        <div className='statute-cart-right' >
                        <p>Goście muszą zachować cisze w godzinach {hotel['Silence at night']}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className='statute-cart'>
                        <div className='statute-cart-left'>
                            <img src={pet}></img>
                            <p>Zwierzęta</p>
                        </div>
                        <div className='statute-cart-right'>
                            <p>{(hotel.Pet) ? 'Zwierzęta są akceptowane' : 'Zwierzęta nie są akceptowane'}</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
           
        </div>
        <Footer></Footer>
    </div>
    
  );
}

export default Info;

