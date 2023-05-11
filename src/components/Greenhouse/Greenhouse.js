import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  const [imgSrc, setImgsrc ] = useState(dayImage);

  useEffect(()=> {
    if(themeName === "Day") setImgsrc(dayImage);
    if(themeName === "Night") setImgsrc(nightImage);
  }, [themeName]);

  return (
    <section>
      <img  className='greenhouse-img'
            src={imgSrc}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
