import './secondary.scss';
import thunder from '../../assets/thunder.png';
import sunny from '../../assets/sunny.png';
import rain from '../../assets/rain.png';
import partlycloudy from '../../assets/partlycloudy.png';
import cloudy from '../../assets/cloudy.png';
import suntime from '../../assets/suntime.svg';
import air from '../../assets/air.png';

const Secondary = () => {
    const images = [
        {
            src: sunny, 
            title: 'Friday',
            hightemp: 28,
            lowtemp: 20,
        },
        {
            src: rain,
            title: 'Saturday',
            hightemp: 25,
            lowtemp: 21,
        },{
            src: thunder, 
            title: 'Sunday',
            hightemp: 20,
            lowtemp: 14,
        },
        {
            src: cloudy, 
            title: 'tomorrow',
            hightemp: 21,
            lowtemp: 16,
        },
        {
            src: partlycloudy, 
            title: 'Monday',
            hightemp: 24,
            lowtemp: 18,
        }
    ]
    const decimals = [
    {
        top:"12.9",
        bottom:"PM2.5",
    },
    {
        top:"12.9",
        bottom:"PM10",
    },
    {
        top:"2.1",
        bottom:"SO2",
    },
    {
        top:"1.4",
        bottom:"NO2",
    },
    {
        top:"21.2",
        bottom:"O3",
    },
    {
        top:"0.7",
        bottom:"CO",
    },
    ]
    return (
        <div className = "secondary">
            <div className = "airquality">
                <div className = 'airqualityHeading'>
                    <img src = {air} alt = {air} />
                     Air Quality
                </div>
                <div className = 'airnow'>
                    <div className ='good'>
                        Good
                    </div>
                    <div className = 'aircalculation'>
                        21
                    </div>
                </div>
                <div className = 'decimals'>
                    {decimals.map((item)=>{
                        return (
                                <div className = 'decimalbox'>
                                    <div className = 'topboxnum'>
                                        {item.top}
                                    </div>
                                    <div className = 'bottomboxnum'>
                                        {item.bottom}
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
            <div className ="suntime">
                <div className = "sunTimeHeading">
                    <img src = {suntime} alt = {suntime} />   
                      Sun Time
                </div>
                <div>
                    <div className = "sundiagram">
                        <div className = "sundiagram-inside">
                            <span>16:01</span>
                            <div className = 'gradient'>
                            <div className="round"></div>
                            </div>
                        </div>
                    </div>
                    <div className = 'sunrisesunset'>
                        <span>6:12</span><span>18:52</span>
                    </div>
                </div>
            </div>
            <div className="week">
                {images.map((item)=>{
                    return (
                        <div className='weekBox'>
                            <span>{item.title}</span>
                            <img src ={item.src} alt={item.src} width ='110px' height = '90px' className = {item.src}/>
                            <span className = "hightemp">{item.hightemp}<sup>o</sup>
                                <span className = "lowtemp">{item.lowtemp}<sup>o</sup></span>
                            </span>
                        </div>
                    )
                })}
            
            </div>
        </div>
    )
}

export default Secondary;