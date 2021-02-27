import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  startNewChallenge:()=> void;
  resetChallenge:()=> void;
  experienceToNextLevel: number;

}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setlLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);


  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);  // O 4 é o fator de dificuldade

  function levelUp() {
    setlLevel(level + 1);
  }

  function startNewChallenge(){
    const randowChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randowChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{ level, 
        levelUp, 
        currentExperience, 
        challengesCompleted,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel
         }}>
      {children}
    </ChallengesContext.Provider>
  );
}
