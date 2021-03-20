import styles from '../styles/components/ChallengeBox.module.css'
import { FcUp } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';


export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded (){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed (){
        resetChallenge();
        resetCountdown();
    }


    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}> 
                    <header>Ganhe {activeChallenge.amount}XP</header>
                    <main>
                        <FcSportsMode className={styles.icon} size={130}/>
                        <strong> Novo Desafio </strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>

                   
                </div>

            ) : (

                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <FcUp size={70}/>
                <p>
                    Avance de level completando desafios!
                </p>
                </div>
            )}
        </div>
    )

}