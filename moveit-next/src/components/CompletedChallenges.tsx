import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedeChallenges(){
    const {challengesCompleted} = useContext(ChallengesContext);


    return (
        <div className={styles.completedChallengesConteiner}>
            <span> Desafios completos </span>
            <span> {challengesCompleted} </span>
        </div>
    )
}