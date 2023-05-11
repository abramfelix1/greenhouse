import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const { temperature, humidity, changeTemp, changeHumid } = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {changeTemp}°F
      </div>
      <div className="humidity">
        Humidity {changeHumid}%
      </div>
    </div>
  )
}

export default ClimateStats;
