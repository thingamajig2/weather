import './main.scss';
import cloud from '../../assets/weather.png';
import location from '../../assets/location1.svg';
import wind from '../../assets/wind2.svg';
import humidity from '../../assets/humidity1.svg';
import rainpercentage from '../../assets/rainpercentage1.svg';

const Main = () =>{
    return (
        <div className="main">
            <div className = "tempnow">
                <div className = "icon">
                    <img src = {cloud} alt = {cloud} />
                </div>
                <div className ="temp">
                    <span>
                        18
                        <sup>
                            <sup><sup>o</sup></sup><sup>
                                C
                            </sup>
                        </sup>
                    </span>
                    <span className = "hightemp">123<sup>o</sup>
                        <span className = "lowtemp">321<sup>o</sup></span>
                    </span>
                </div>
                <div className = "location">
                    <div className = 'locationimg'>
                        <img src = {location} alt = {location} />
                    </div>
                    <span>Rio Do Sul, SC</span>
                </div>
            </div>
            <div className = "statistics">
                <div className = "wind">
                    <img src = {wind} alt = {wind} />
                    <div>
                        <span>Wind</span>
                        <span>17 km/h</span>
                    </div>
                </div>
                <div className = "humidity">
                    <img src = {humidity} alt = {humidity} />
                    <div>
                        <span>Humidity</span>
                        <span>31%</span>
                    </div>
                </div>
                <div className = "rainpercentage">
                    <img src = {rainpercentage} alt = {rainpercentage} />
                    <div>
                        <span>Rain</span>
                        <span>10%</span>
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default Main;