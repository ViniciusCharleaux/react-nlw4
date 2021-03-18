import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'
import { FcOk } from "react-icons/fc";

let countdownTimeout : NodeJS.Timeout;

export function Countdown(){
    const [time, setTime] = useState(6);
    const [isActive, setIsActive] = useState(false);    
    const [hasFinished, setHasFinished] = useState(false);

    const min = Math.floor(time / 60);
    const sec = time%60;

    const [minuteLeft, minuteRight] = String(min).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(sec).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout); //cancelando um timeout
        setIsActive(false);
        setTime(6);
    }

    useEffect(() =>{
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span> 
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span> 
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}                 
                    >
                    Ciclo Encerrado
                    <FcOk/>
                </button>
                
            ):(
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>

                    ):(
                        <button 
                            type="button" 
                            className={ styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
                )}
                

            

            
        </div>
    );

}