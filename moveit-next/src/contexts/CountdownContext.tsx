import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContexts";

interface CountdownContextData{

    min: number;
    sec: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;

}

interface CountdownContextProps{
    children: ReactNode;
}

export const CountdownContext =  createContext({} as CountdownContextData);

let countdownTimeout : NodeJS.Timeout;

export function CountdownProvider({children}){

    const timeToCount = 25 * 60;

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(timeToCount);
    const [isActive, setIsActive] = useState(false);    
    const [hasFinished, setHasFinished] = useState(false);

    const min = Math.floor(time / 60);
    const sec = time%60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout); //cancelando um timeout
        setIsActive(false);
        setTime(timeToCount);
        setHasFinished(false);
    }

    useEffect(() =>{
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            min,
            sec,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}