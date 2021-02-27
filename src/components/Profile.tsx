import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const contextData = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/juancarllos88.png" />

      <div>
        <strong>Juan Carlos</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {contextData.level}
        </p>
      </div>
    </div>
  );
}
