import Home from '../Image/Home.png';
import Hotel2 from '../Image/Hotel.png';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer/footer';
import { Link } from 'react-router-dom';
import YourReservation  from '../Image/yourReservation.png';
import Information  from '../Image/information.png';
import Heart from '../Image/Heart.png'
import './Agreement.css'


function Agreement() {
    return(
        <div>
        <header>
            <div className='header-items'>
                <div className='header'>
                    <div className='header-top'>
                        <h1>RoomFinder.com</h1>
                        
                    </div>
                    <div className='header-center'>
                        <ul className="nav-list">
                            <li><Link to={'/Home'}><img src={Home} alt="Home"/>Strona Główna</Link></li>
                            <li><Link to={'/Hotel-Search'}><img src={Hotel2} alt="Hotel"/>Hotele</Link></li>
                            <li><Link to={'/TwojeRezerwacja'}><img src={YourReservation} alt="Reservation"/>Twoja Rezerwacja</Link></li>
                            <li><Link to={'/Zasady-Umowy'} className='Now'><img src={Information} alt="Info"/>Zasady umowy</Link></li>
                        </ul>
                        <Link to={`/ulubione`} className='favouriteLink'>
                            <p className='favouriteLinkP'><img className='heart' src={Heart}></img></p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        <div className='Agreement'>
    <div className='Agreement-Box'>
        <h1>Zasady umowy</h1>
        <section>
            <h2>1. Wprowadzenie</h2>
            <p>Witamy w RoomFinder.com. Niniejsze zasady umowy określają warunki korzystania z naszych usług rezerwacji hoteli. Prosimy o dokładne zapoznanie się z poniższymi warunkami przed dokonaniem rezerwacji.</p>
        </section>
        <section>
            <h2>2. Rezerwacja</h2>
            <p>Rezerwacja pokoju w hotelu za pośrednictwem naszej strony internetowej jest równoznaczna z akceptacją niniejszych warunków. Po dokonaniu rezerwacji otrzymasz potwierdzenie na podany adres e-mail.</p>
        </section>
        <section>
            <h2>3. Anulowanie rezerwacji</h2>
            <p>Możesz anulować swoją rezerwację bezpłatnie do 24 godzin przed planowanym zameldowaniem. W przypadku anulowania rezerwacji po tym terminie, może zostać naliczona opłata za anulowanie w wysokości jednej nocy pobytu.</p>
        </section>
        <section>
            <h2>4. Zmiany w rezerwacji</h2>
            <p>Wszelkie zmiany w rezerwacji muszą być zgłoszone co najmniej 48 godzin przed planowanym zameldowaniem. Zmiany są uzależnione od dostępności pokoi i mogą wiązać się z dodatkowymi opłatami.</p>
        </section>
        <section>
            <h2>5. Płatności</h2>
            <p>Wszystkie płatności za rezerwacje muszą być dokonane kartą kredytową lub debetową. Akceptujemy karty Visa, MasterCard i American Express. Płatność jest pobierana w momencie dokonania rezerwacji.</p>
            <p>W przypadku anulowania rezerwacji zgodnie z naszymi zasadami anulowania, zwrot środków zostanie dokonany na kartę, z której dokonano płatności, w ciągu 7-10 dni roboczych.</p>
        </section>
        <section>
            <h2>6. Odpowiedzialność</h2>
            <p>RoomFinder.com nie ponosi odpowiedzialności za jakiekolwiek straty lub szkody wynikające z korzystania z naszych usług rezerwacji hoteli. Wszelkie reklamacje dotyczące pobytu w hotelu należy zgłaszać bezpośrednio do hotelu.</p>
        </section>
        <section>
            <h2>7. Prywatność</h2>
            <p>Twoja prywatność jest dla nas ważna. Wszystkie dane osobowe są przetwarzane zgodnie z naszą Polityką Prywatności, którą można znaleźć na naszej stronie internetowej.</p>
        </section>
        <section>
            <h2>8. Kontakt</h2>
            <p>W przypadku jakichkolwiek pytań lub wątpliwości dotyczących niniejszych warunków, prosimy o kontakt z naszym działem obsługi klienta pod adresem e-mail: support@roomfinder.com.</p>
        </section>
        <section>
            <h2>9. Postanowienia końcowe</h2>
            <p>Niniejsze zasady umowy podlegają prawu polskiemu. Wszelkie spory wynikające z niniejszej umowy będą rozstrzygane przez sądy właściwe dla siedziby RoomFinder.com.</p>
        </section>
    </div>
    </div>
    <Footer></Footer>
    </div>
    

    );
}

export default Agreement;
