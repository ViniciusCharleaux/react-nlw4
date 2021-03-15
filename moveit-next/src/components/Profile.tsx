import styles from '../styles/components/Profile.module.css';
import { FaArrowCircleUp } from 'react-icons/fa';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ViniciusCharleaux.png" alt="Vinicius Charleaux"></img>
            <div>
                <strong> Vinicius Charleaux </strong>
                <p>
                    <span> <FaArrowCircleUp /> </span>
                    Level 1
                </p>
            </div>
        </div>
    ) 
}