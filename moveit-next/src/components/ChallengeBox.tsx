import styles from '../styles/components/ChallengeBox.module.css'
import { FcUp } from "react-icons/fc";


export function ChallengeBox(){
    const hasActiveChallenge = true;




    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}> 
                    <header>Ganhe 400XP</header>
                    <main>
                        <strong> Novo Desafio </strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
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