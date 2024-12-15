import './Hotel.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import HotelData from './Json/Hotel.json';
import Favourite from './Favorite.js'

import Home from './Image/Home.png';
import Hotel2 from './Image/Hotel.png';
import Lot from './Image/Loty.png';
import Car from './Image/Car.png';
import Atrakcje from './Image/Atrakcje.png';

export function Hotel() {

    function sendToFavourite(id){
        localStorage.setItem('FavouritID', id)
    }

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
    const[localPeople, setLocalPeople] = useState(localStorage.getItem('People'))
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
    

    useEffect(() => {
        if (localTrue) {
            setPlace(localStorage.getItem('Country'));
            setPeople(localStorage.getItem('People'));
            setStart(localStorage.getItem('Start'));
            setEnd(localStorage.getItem('End'));
            setLocalPrice(parseInt(localStorage.getItem('Price')));
            setValueOfPrice(localStorage.getItem('PricePerNight'))
        }
    }, [localTrue]);

    
    useEffect(() =>{
        if(place){
            localStorage.setItem('Country', place)
                if(localTrue){    
                    setPlace(localStorage.getItem('Country'))
                }
        }
        if(people){
            localStorage.setItem('People', people)
                if(localTrue){
                    setPeople(localStorage.getItem('People'))
                }
        }
        if(start){
            localStorage.setItem('Start', start)
                if(localTrue){
                    setStart(localStorage.getItem('Start'))
                }
        }
        if(end){
            localStorage.setItem('End', end)
                if(localTrue){
                    setEnd(localStorage.getItem('End'))
                }
        }
        if (DayOfTrip && people) {
            const price = parseInt(DayOfTrip);
            setLocalPrice(price);
            localStorage.setItem('Price', price);
        }
        if(filtrStart){
            localStorage.setItem('PricePerNight', RealvalueOfPrice)
            setFiltrStart(true)
        }
        
        localStorage.setItem('Search', true)
        localStorage.setItem('localTrue', true)

    }, [search, save])


    const[checkBoxTrue1, setCheckBoxTrue1] = useState(localStorage.getItem('checkBox1'))
    const[checkBoxTrue2, setCheckBoxTrue2] = useState(localStorage.getItem('checkBox2'))
    const[checkBoxTrue3, setCheckBoxTrue3] = useState(localStorage.getItem('checkBox3'))

    const[ratingCheckBoxTrue1, setRatingCheckBoxTrue1]= useState(localStorage.getItem('ratingCheckBoxTrue1'))
    const[ratingCheckBoxTrue2, setRatingCheckBoxTrue2]= useState(localStorage.getItem('ratingCheckBoxTrue2'))
    const[ratingCheckBoxTrue3, setRatingCheckBoxTrue3]= useState(localStorage.getItem('ratingCheckBoxTrue3'))

    const[pricePerNightTrue, setPricePerNightTrue] = useState(localStorage.getItem('PricePerNightTrue'))

    useEffect(() => {
        
        setPlace(localStorage.getItem('Country'))
        setPeople(localStorage.getItem('People'))
        setStart(localStorage.getItem('Start'))
        setEnd(localStorage.getItem('End'))
        setRealValueOfPrice(localStorage.getItem('FiltrPrice'))

        if (checkBoxTrue1 === 'true') {
            setDistanceToCenter();
            setDistanceToCenter(localStorage.getItem('distanceToCenter'))
            setDistanceToCenterTrue(true);
        } else if (checkBoxTrue2 === 'true') {
            setDistanceToCenter(2);
            setDistanceToCenter(localStorage.getItem('distanceToCenter'))
            setDistanceToCenterTrue(true);
        } else if (checkBoxTrue3 === 'true') {
            const newDistance = distanceToCenter > 2 ? distanceToCenter : 3;
            localStorage.setItem("distanceToCenter", newDistance);
            setDistanceToCenter(newDistance);
            console.log("Setting distanceToCenter to", newDistance);
            setDistanceToCenterTrue(true);
        }
        
        

        if(ratingCheckBoxTrue1 == 'true'){
            setRatingToFiltr(5)
            setRatingTrue(true)
        }else if(ratingCheckBoxTrue2 == 'true'){
            setRatingToFiltr(4.5)
            setRatingTrue(true)
        }else if(ratingCheckBoxTrue3 == 'true'){
            setRatingToFiltr(4)
            setRatingTrue(true)
        }

        if(pricePerNightTrue){
            setRealValueOfPrice(localStorage.getItem('PricePerNight'))
            setFiltrStart(true)
        }

        const beachCheckboxTrue = localStorage.getItem('beachCheckbox')
        console.log("Tutaj: " + beachCheckboxTrue);

        if(beachCheckboxTrue == 'true'){
            setBeachToFiltr(true)
        }else{
            setBeachToFiltr(false)
        }

        filterHotels()
    }, [localTrue])
    
    const filterHotels = () => {
        console.log("distanceToCenterTrue:", distanceToCenterTrue);
        console.log("distanceToCenter:", distanceToCenter);
    
        return HotelData.filter(index =>
            index.country === place &&
            index.maxPeople >= people &&
            search &&
            (filtrStart
                ? index.pricePerNight * people * DayOfTrip <= Number(localStorage.getItem('PricePerNight'))
                : index.pricePerNight > 0) &&
            (!distanceToCenterTrue || index.distanceToCenter === Number(distanceToCenter)) &&
            (!ratingTrue || index.rating === ratingToFiltr) &&
            (!beachToFiltr || index.isBeachfront === true)
        );
    };

    const Search = () => {
        setSearch(true)
    }

    const[RealvalueOfPrice, setRealValueOfPrice] = useState(1000);
    const[checkbox1, setCheckbox1] = useState(false)
    const[checkbox2, setCheckbox2] = useState(false)
    const[checkbox3, setCheckbox3] = useState(false)
    const[distanceToCenterTrue, setDistanceToCenterTrue] = useState(false)
    const[distanceToCenter, setDistanceToCenter] = useState();
    const[ratingTrue, setRatingTrue] = useState(false)

    const[ratingCheckbox1, setRatingCheckbox1] = useState(false);
    const[ratingCheckbox2, setRatingCheckbox2] = useState(false);
    const[ratingCheckbox3, setRatingCheckbox3] = useState(false);
    const[ratingToFiltr, setRatingToFiltr] = useState()

    const[beachCheckbox1, setbeachCheckbox1] = useState(false);
    const[beachCheckbox2, setbeachCheckbox2] = useState(false);
    const[beachToFiltr, setBeachToFiltr] = useState(false)
    const[filtrStart, setFiltrStart] = useState(false)
    const[localDistanceToCenterTrue, setLoaclDistanceToCenterTrue] = useState(false)

    const FiltrStart = () => {
            setFiltrStart(true)

           if(localTrue){
                if(valueOfPrice === localStorage.getItem('PricePerNight')){
                    setRealValueOfPrice(localStorage.getItem('PricePerNight'));
                }else{
                    localStorage.setItem('PricePerNight', valueOfPrice)
                    setRealValueOfPrice(localStorage.getItem('PricePerNight'))
                }
           }else{
                setRealValueOfPrice(valueOfPrice)
                if(valueOfPrice){
                    localStorage.setItem('PricePerNight', valueOfPrice)
                }else{
                    localStorage.setItem('PricePerNight', localStorage.getItem('PricePerNight'))
                }
                localStorage.setItem('PricePerNightTrue', true)
           }

           if (localTrue) {
            const storedDistance = parseInt(localStorage.getItem('distanceToCenter'));
        
            if (checkbox1) {
                localStorage.setItem('checkBox1', true);
                localStorage.setItem('checkBox2', false);
                localStorage.setItem('checkBox3', false);
                localStorage.setItem('distanceToCenter', 1);
                setDistanceToCenter(1);
            } else if (checkbox2) {
                localStorage.setItem('checkBox1', false);
                localStorage.setItem('checkBox2', true);
                localStorage.setItem('checkBox3', false);
                localStorage.setItem('distanceToCenter', 2);
                setDistanceToCenter(2);
            } else if (checkbox3) {
                const newDistance = distanceToCenter > 2 ? distanceToCenter : 3;
                localStorage.setItem('checkBox1', false);
                localStorage.setItem('checkBox2', false);
                localStorage.setItem('checkBox3', true);
                localStorage.setItem('distanceToCenter', newDistance);
                setDistanceToCenter(newDistance);
            } else {
                setDistanceToCenter(storedDistance || 1);
            }
        } else {
            if (checkbox1) {
                setDistanceToCenterTrue(true);
                localStorage.setItem('checkBox1', true);
                localStorage.setItem('checkBox2', false);
                localStorage.setItem('checkBox3', false);
                localStorage.setItem('distanceToCenterTrue', true);
                localStorage.setItem('distanceToCenter', 1);
                setDistanceToCenter(1);
            } else if (checkbox2) {
                setDistanceToCenterTrue(true);
                localStorage.setItem('checkBox1', false);
                localStorage.setItem('checkBox2', true);
                localStorage.setItem('checkBox3', false);
                localStorage.setItem('distanceToCenterTrue', true);
                localStorage.setItem('distanceToCenter', 2);
                setDistanceToCenter(2);
            } else if (checkbox3) {
                setDistanceToCenterTrue(true);
                const newDistance = distanceToCenter > 2 ? distanceToCenter : 3;
                localStorage.setItem('checkBox1', false);
                localStorage.setItem('checkBox2', false);
                localStorage.setItem('checkBox3', true);
                localStorage.setItem('distanceToCenterTrue', true);
                localStorage.setItem('distanceToCenter', newDistance);
                setDistanceToCenter(newDistance);
            } else {
                setDistanceToCenterTrue(false);
                localStorage.setItem('distanceToCenterTrue', false);
                localStorage.setItem('distanceToCenter', 1);
                setDistanceToCenter(1);
            }
        }
        
        const updatedDistance = parseInt(localStorage.getItem('distanceToCenter'));
        console.log("Systans " + updatedDistance);
        
        

        

            if(localTrue){
                console.log("Ratting: " + ratingToFiltr)
                console.log((parseInt(ratingToFiltr) === parseInt(localStorage.getItem('resultRating'))))

                if(parseInt(ratingToFiltr) === parseInt(localStorage.getItem('resultRating'))){
                    setRatingToFiltr(ratingToFiltr);
                }else{
                    localStorage.setItem('resultRating', ratingToFiltr);
                    setRatingToFiltr(parseInt(localStorage.getItem('resultRating')));
                }
            }else{
                if(ratingCheckbox1){
                    setRatingToFiltr(5)
                    localStorage.setItem('resultRating', 5)
                    localStorage.setItem('ratingCheckBoxTrue1', true)
                    localStorage.setItem('ratingCheckBoxTrue2', false)
                    localStorage.setItem('ratingCheckBoxTrue3', false)
                    setRatingTrue(true)
                }else if(ratingCheckbox2){
                    setRatingToFiltr(4.5)
                    localStorage.setItem('resultRating', 4.5)
                    localStorage.setItem('ratingCheckBoxTrue1', false)
                    localStorage.setItem('ratingCheckBoxTrue2', true)
                    localStorage.setItem('ratingCheckBoxTrue3', false)
                    setRatingTrue(true)
                }else if(ratingCheckbox3){
                    setRatingToFiltr(4)
                    localStorage.setItem('resultRating', 4)
                    localStorage.setItem('ratingCheckBoxTrue1', false)
                    localStorage.setItem('ratingCheckBoxTrue2', false)
                    localStorage.setItem('ratingCheckBoxTrue3', true)
                    setRatingTrue(true)
                }else{
                    setRatingTrue(false)
                }
            }


            if(beachCheckbox1){
                setBeachToFiltr(true)
                localStorage.setItem('beachCheckbox', true)
            }else if(beachCheckbox2){
                setBeachToFiltr(false)
                localStorage.setItem('beachCheckbox', false)
            }
    }

    useEffect(() => {
        const filtred = filterHotels()
        setCountCarts(filtred.length)

    },[Search, FiltrStart, localTrue] )

    const[sortTrue, setSortTrue] = useState(false)
    const[Sort, setSort] = useState(false);
    const[hotelSort, setHotelSort] = useState(HotelData);

    const SortOption1 = () => {
        setSortTrue(false)

        const priceSort = [...HotelData].sort((a, b) => a.pricePerNight - b.pricePerNight )
        setHotelSort(priceSort)
    }

    const SortOption2 = () => {
        setSortTrue(false)

        const priceSort = [...HotelData].sort((a, b) => b.pricePerNight - a.pricePerNight )
        setHotelSort(priceSort)
    }

    const SortOption3 = () => {
        setSortTrue(false)

        const ratingSort = [...HotelData].sort((a, b) => b.rating - a.rating )
        setHotelSort(ratingSort)
    }

    const SortOption4 = () => {
        setSortTrue(false)

        const distanceSort = [...HotelData].sort((a, b) => a.distanceToCenter - b.distanceToCenter);
        setHotelSort(distanceSort)
        
    } 


    const sort = () => {
        setSort(true);
        return(
            setSortTrue((prev) => !prev)
        );   
    }

    console.log(localStorage.getItem('ratingCheckBoxTrue1'))

  return (
   <div className='all'>
        <header>
            <div className='header-items'>
                <div className='header-top'>
                    <h1>RoomFinder.com</h1>
                    <Link to={`/ulubione`} className='favouriteLink'>
                        <p className='favouriteLinkP'>❤️</p>
                    </Link>
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
                <div className='header-bottom'>
                    <div className='header-bottom-items'>
                        <input type='input' placeholder='Dokąd się wybierasz?'  defaultValue={localCountry} onChange={(event) => setPlace(event.target.value)}></input>
                        <input type='date' placeholder='Od Kiedy?' defaultValue={localTrue ? localStart : ''} onChange={(event) => setStart(event.target.value)}></input>
                        <input type='date' placeholder='Do kiedy?' defaultValue={localEnd} onChange={(event) => setEnd(event.target.value)}></input>
                        <input type='Number' placeholder='Ile osób podróżuje?' defaultValue={localPeople} onChange={(event) => setPeople(event.target.value)}></input>
                        <input type='submit' value="Szukaj" onClick={Search}></input>
                    </div>
                </div>
            </div>
        </header>
        <div className='hotelSearch'>
            <div className='hotelSearch-items'>
                

                <div className='hotelSearch-center'>

                <div className='hotelSearch-center-left'>

                    <div className='hotelSearch-center-left-items'>
                    <div className='Filter'>
                            <h1>Filtruj według następujących kryteriów:</h1>
                        </div>
                        <div className='Filter'>
                            <h2>Twój przedział cenowy</h2>
                            <p>Cena: 0zł - {valueOfPrice}zł</p>
                                <input 
                                    type="range" 
                                    id="PriceMax" 
                                    max={search ? 1000 * DayOfTrip : 1000} 
                                    value={valueOfPrice} 
                                    defaultValue={localStorage.getItem('PricePerNight')}
                                    onChange={(event) => setValueOfPrice(Number(event.target.value))}
                                />
                                </div>

                        <div className='Filter'>
                            <h2>Odległość od centrum</h2>
                            <div className='Filter-items'>
                            
                                <input 
                                type='checkbox' 
                                defaultChecked={localStorage.getItem('checkBox1') === 'true'} 
                                onChange={(event) => setCheckbox1(event.target.checked)} 
                                value={true}
                                />
                                <label>1km</label><br></br>
                            
                                <input 
                                type='checkbox'
                                defaultChecked={localStorage.getItem('checkBox2') === 'true'} 
                                onChange={(event) => setCheckbox2(event.target.checked)} 
                                />
                                <label>2km</label><br></br>

                                <input 
                                type='checkbox' 
                                defaultChecked={localStorage.getItem('checkBox3') === 'true'}
                                onChange={(event) => setCheckbox3(event.target.checked)} 
                                />
                                <label>Dalej</label>
                            </div>
                        </div>

                        <div className='Filter'>

                            <h2>Ocena ogólna</h2>

                            <input 
                            type='checkbox' 
                            defaultChecked={localStorage.getItem('ratingCheckBoxTrue1') === 'true'} 
                            onChange={(event) => setRatingCheckbox1(event.target.checked)} 
                            ></input>
                            <label>5.0⭐</label><br></br>

                            <input 
                            type='checkbox' 
                            defaultChecked={localStorage.getItem('ratingCheckBoxTrue2') === 'true'}  
                            onChange={(event) => setRatingCheckbox2(event.target.checked)} 
                            ></input>
                            <label>4.5⭐</label><br></br>

                            <input 
                            type='checkbox' 
                            defaultChecked={localStorage.getItem('ratingCheckBoxTrue3') === 'true'} 
                            onChange={(event) => setRatingCheckbox3(event.target.checked)} 
                            ></input>
                            <label>4.0⭐</label><br></br>
                        </div>

                        <div className='Filter'>
                            <h2>Blisko plarzy</h2>
                            <input
                            type='checkbox'
                            defaultChecked={localStorage.getItem('beachCheckbox') === 'true'}
                            onChange={(event) => setbeachCheckbox1(event.target.checked)}
                            ></input><label>Tak</label><br></br>

                            <input
                            type='checkbox'
                            defaultChecked={localStorage.getItem('beachCheckbox') === 'false'}
                            onChange={(event) => setbeachCheckbox2(event.target.checked)}
                            ></input><label>Nie</label><br></br>
                        </div>

                        <div className='FilterSubmit'>
                            <input type='submit' value="Zastosuj Zminay" onClick={FiltrStart} className='submitFilter'></input>
                        </div>
                    </div>
                </div>
                <div className='hotelSearch-center-right'>
                    <div className='sortBox1'>
                        <p>{city} Znaleziono {countCarts} obiektów</p>
                    </div>
                
                    <div className='sortBox2'>
                        <input
                        type='submit'
                        onClick={sort}
                        className='sortButton'
                        value="Sortuje według"
                        ></input>
                        {sortTrue && 
                        <div className='sortOptions'>
                            <div className='sortOptions-1' onClick={SortOption1}>
                                <p>Cena (od najniższej)</p>
                            </div>

                            <div className='sortOptions-2' onClick={SortOption2}>
                                <p>Cena (od najwyższej)</p>
                            </div>

                            <div className='sortOptions-3' onClick={SortOption3}>
                                <p>Najlepiej oceniane</p>
                            </div>

                            <div className='sortOptions-4' onClick={SortOption4}>
                                <p>Najbliżej centrum</p>
                            </div>


                        </div>
                        }
                        
                    </div>
                     {hotelSort.map(index => {

                        const filterIf = (index.country === place &&
                            index.maxPeople >= people &&
                            search &&
                            (filtrStart
                                ? index.pricePerNight * people * DayOfTrip <= Number(localStorage.getItem('PricePerNight'))
                                : index.pricePerNight > 0) &&
                            (!distanceToCenterTrue || index.distanceToCenter === Number(distanceToCenter)) &&
                            (!ratingTrue || index.rating === ratingToFiltr) &&
                            (!beachToFiltr || index.isBeachfront === true))
                        const filterIf2 = (index.country === place &&index.maxPeople >= people && index.pricePerNight * people <= RealvalueOfPrice &&(!distanceToCenterTrue || index.distanceToCenter === distanceToCenter) && (!ratingTrue || index.rating === ratingToFiltr) && (!beachToFiltr || index.isBeachfront === true))                       
                    if(index.country === place){
                        if(filterIf){
                            return(
                                <div key={index.id} className='Cart'>
                                    
                                    <div className='Cart-items'>
                                    <div className='Cart-left'>
                                                <img src={index.photo} style={{width: '250px',height: '250px', borderRadius: '10px', objectFit: 'cover' }}></img>
                                                <input
                                                    type='submit'
                                                    value="❤️"
                                                    onClick={() => sendToFavourite(index.id)}
                                                ></input>
                                            </div>
                                            <div className='Cart-center'>
                                                <div>
                                                    <h1>{index.name}</h1>
                                                </div>
                                                <div>
                                                    <p>{index.description}</p>
                                                </div>
                                            </div>
                                            <div className='Cart-right'>
                                                <div className='Cart-right-top'>
                                                    <div className='Cart-right-top-first'>
                                                        <div className='Cart-right-top-first-left'>
                                                            <h2>{index.verbalRating}</h2>
                                                            <p>{index.reviewsCount} opinii</p>
                                                        </div>
                                                        <div className='Cart-right-top-first-right'>
                                                            <h2>{index.guestRating}</h2>
                                                        </div>
                                                    </div>
                                                    <div className='Cart-right-top-second'>
                                                        <p>Komfort {index.comfort}</p>
                                                    </div>
                                                </div>
    
                                                <div className='Cart-right-bottom'>
                                                        <div>
                                                            <p className='Price'>{people <= 0 ? index.pricePerNight * people * DayOfTrip  : (!localTrue ? index.pricePerNight * people * DayOfTrip : index.pricePerNight * localPrice  )}
                                                            zł</p>
                                                            <p className='bills'>Zawiera opłaty i podatki</p>
                                                            <Link to={`/hotel/${index.id}`}>
                                                                    <input
                                                                    type='submit'
                                                                    value="Zobacz dostępność"
                                                                    className='inputLink'
                                                                    onClick={save}
                                                                    ></input>
                                                                    
                                                            </Link>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                            ) 
                        }else if(!index.country){
                            return(
                                <div className='info2'>
                                    <p>Brak ofert...</p>
                                </div>
                            )
                        };
                    }else if(search){
                       return(
                        <div className='info'>
                            <p className='pl'>!</p>
                            <p>Coś poszło nie tak</p>
                        </div>
                       );
                    }else if(!search || filterIf){
                        return(
                            <div key={index.id} className='Cart'>
                                <div className='Cart-items'>
                                        <div className='Cart-left'>
                                            <img src={index.photo} style={{width: '250px',height: '250px', borderRadius: '10px' ,objectFit: 'cover'}}></img>
                                            <input
                                                        type='submit'
                                                        value="❤️"
                                                        onClick={() => sendToFavourite(index.id)}
                                                    ></input>
                                        </div>
                                        <div className='Cart-center'>
                                            <div>
                                                <h1>{index.name}</h1>   
                                            </div>
                                            <div>
                                                <p>{index.description}</p>
                                            </div>
                                        </div>
                                        <div className='Cart-right'>
                                            <div className='Cart-right-top'>
                                                <div className='Cart-right-top-first'>
                                                    <div className='Cart-right-top-first-left'>
                                                        <h2>{index.verbalRating}</h2>
                                                        <p>{index.reviewsCount} opinii</p>
                                                    </div>
                                                    <div className='Cart-right-top-first-right'>
                                                        <h2>{index.guestRating}</h2>
                                                    </div>
                                                </div>
                                                <div className='Cart-right-top-second'>
                                                    <p>Komfort {index.comfort}</p>
                                                </div>
                                            </div>

                                            <div className='Cart-right-bottom'>
                                                    <div>
                                                        <p className='Price'>{localTrue ? parseInt(localPrice) * index.pricePerNight : index.pricePerNight}  zł</p>
                                                        <p className='bills'>Zawiera opłaty i podatki</p>
                                                        <Link to={`/hotel/${index.id}`}>
                                                                <input
                                                                type='submit'
                                                                value="Zobacz dostępność"
                                                                className='inputLink'
                                                                ></input>
                                                                
                                                        </Link>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        ) 
                    }
                })}
                </div>
                </div>
            </div>
        </div>      
   </div>
  );
}

export default Hotel;
