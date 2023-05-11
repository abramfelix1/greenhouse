import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';
import { useEffect } from 'react';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  // useEffect(()=> console.log(themeName), [themeName]);
  return (
    <div className="light-switch day">
      <div className="on" onClick={ ()=> setThemeName("Day")}>DAY</div>
      <div className="off" onClick={ () => setThemeName("Night")}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
