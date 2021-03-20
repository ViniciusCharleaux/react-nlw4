import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css'
import { FcOk } from "react-icons/fc";
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown(){

    const { 
        min, 
        sec, 
        hasFinished, 
        isActive,
        startCountdown,
        resetCountdown
    } =  useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(min).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(sec).padStart(2, '0').split('');


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
                    <FcOk className={styles.icon}/>
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