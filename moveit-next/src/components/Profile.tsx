import styles from '../styles/components/Profile.module.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { useContext } from 'react';

export function Profile(){

    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ViniciusCharleaux.png" alt="Vinicius Charleaux"></img>
            <div>
                <strong> Vinicius Charleaux </strong>
                <p>
                    <span> <FaArrowCircleUp /> </span>
                    Level {level}
                </p>
            </div>
        </div>
    ) 
}