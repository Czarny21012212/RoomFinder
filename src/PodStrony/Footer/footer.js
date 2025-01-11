import './footer.css'
import Itaka from '../Image/itaka.jpg'
import Rainbow from '../Image/rainbow.jpg'
import Grecos from '../Image/grecos.jpg'
import EccoHoliday from '../Image/ecco-holiday.jpg'
import Anex from '../Image/anex.png'
import Regobis from '../Image/regobis.jpg'
import Exim from '../Image/exim.jpg'


export function Footer() {
    return (
        <div className="all-footer">
            <div className="footer-box">
                <div className="footer">
                    <div className="footer-top">
                        <div className="footer-top-section">
                            <ul>
                                <li className='footer-top-section-special'>RoomFinder.com</li>
                                <li>Pomoc i kontakt</li>
                                <li>Jak rezerwować</li>
                                <li>O firmie</li>
                                <li>Polityka prywatności</li>
                                <li>Ustawienia prywatności</li>
                                <li>Regulamin</li>
                                <li>Mapa serwisu</li>
                                <li>Reklamacje</li>
                                <li>Regulacje prawne</li>
                            </ul>
                        </div>
                        <div className="footer-top-section">
                            <ul>
                                <li className='footer-top-section-special'>Współpraca</li>
                                <li>Partnerzy</li>
                                <li>Franczyza</li>
                                <li>Program partnerski</li>
                                <li>Kariera</li>
                                <li>Centrum prasowe</li>
                                <li>Regulamin</li>
                                <li>Mapa serwisu</li>
                                <li>Reklamacje</li>
                                <li>Regulacje prawne</li>
                            </ul>
                        </div>
                        <div className="footer-top-section">
                        <ul>
                                <li className='footer-top-section-special'>Kontakt</li>
                                <li>FindRooms.com S.A.</li>
                                <li>ul. Wojtka Chmiela 432</li>
                                <li>80-309 Orliska</li>
                                <li>telefon: +48 58 770 60 05</li>
                                <li>fax: +48 58 325 29 01</li>
                            </ul>
                        </div>

                    </div>
                    <hr></hr>
                    <div className="footer-center">
                        <div className="footer-center-top">
                            <p>Biura podrózy</p>
                        </div>
                        <div className="footer-center-bottom">
                            <img src={Itaka}></img>
                            <img src={Rainbow}></img>
                            <img src={Grecos}></img>
                            <img src={Exim}></img>
                            <img src={EccoHoliday}></img>
                            <img src={Anex}></img>
                            <img src={Regobis}></img>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} RoomFinder.com. All rights reserved.</p>
                    </div>
                </div>
            </div>   
        </div>
    );
}