// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState, useEffect } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [changeTemp, setChangeTemp] = useState(temperature);
    const [changeHumid, setChangeHumid] = useState(humidity);

    useEffect(()=>{
       const timer = setTimeout(()=>{
        setChangeTemp((prevTemp)=>{
            if(prevTemp > temperature) {
                return prevTemp-1
            }
            if(prevTemp < temperature) {
                return prevTemp+1
            }
            if(prevTemp === temperature) {
                clearTimeout(timer);
                return prevTemp
            }
        });
       }, 1000);
       return ()=>{clearTimeout(timer)};
    }, [temperature, changeTemp, setChangeTemp])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setChangeHumid((prevHumid)=>{
             if(prevHumid > humidity) {
                 return prevHumid -2
             }
             if(prevHumid < humidity) {
                 return prevHumid +2
             }
             if(prevHumid === humidity) {
                 clearTimeout(timer);
                 return prevHumid
             }
             return prevHumid
         });
        }, 1000);
        return ()=>{clearTimeout(timer)};
     }, [humidity, changeHumid, setHumidity])

    return (
        <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity, changeTemp, changeHumid}}>
            {children}
        </ClimateContext.Provider>
    );
}
