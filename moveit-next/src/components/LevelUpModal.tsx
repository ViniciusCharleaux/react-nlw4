import styles from '../styles/components/LevelUpModal.module.css';
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

export function LevelUpModal(){
    const { level, closeLevelUpModal} = useContext(ChallengesContext);


    return (
        <div className={styles.overlay}>

            <div className={styles.container}>   
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <AiOutlineClose size={30} />
                </button>
            </div>
            
        </div>

        
    )
}