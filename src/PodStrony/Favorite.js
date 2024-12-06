import React, { useEffect, useState } from 'react';
import HotelData from './Json/Hotel.json';

function Favourite() {
    const [favouriteHotel, setFavouriteHotel] = useState(() => {
        const storedHotels = localStorage.getItem('Hotel');
        const parsedHotels = storedHotels ? JSON.parse(storedHotels) : [];
        // Zwracamy tablicę, niezależnie od tego, co było zapisane
        return Array.isArray(parsedHotels) ? parsedHotels : [];
    });

    useEffect(() => {
        const favouriteId = localStorage.getItem('FavouritID');
        if (favouriteId) {
            const selectedHotel = HotelData.find(hotel => hotel.id === parseInt(favouriteId));
            if (selectedHotel) {
                // Jeśli hotel nie jest jeszcze w liście, dodajemy go
                if (!favouriteHotel.some(hotel => hotel.id === selectedHotel.id)) {
                    const updatedHotels = [...favouriteHotel, selectedHotel];
                    setFavouriteHotel(updatedHotels);
                    localStorage.setItem('Hotel', JSON.stringify(updatedHotels)); // Zapisz nowe dane
                }
            }
        }
    }, []); // Używamy pustej tablicy, aby wykonać ten kod tylko raz

    return (
        <div>
            <h2>Ulubiony hotel</h2>
            {favouriteHotel.length > 0 ? (
                favouriteHotel.map(hotel => (
                    <p key={hotel.id}>{hotel.name}</p>
                ))
            ) : (
                <p>Brak ulubionych hoteli</p>
            )}
        </div>
    );
}

export default Favourite;
