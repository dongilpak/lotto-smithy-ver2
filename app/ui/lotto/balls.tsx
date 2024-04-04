import styles from '../styles/ball.module.scss';
import { FaPlus } from 'react-icons/fa6';

interface Part {
  range: number[];
  name: string;
}

const parts: Part[] = [
  { range: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], name: 'singleDigits' },
  { range: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], name: 'teens' },
  { range: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], name: 'twenties' },
  { range: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], name: 'thirties' },
  { range: [41, 42, 43, 44, 45], name: 'forties' },
];

const getPartNameForNumber = (num: number): string | undefined => {
  const part = parts.find(p => p.range.includes(num));
  return part?.name;
};

type ballsProps = {
  balls: number[];
  bonus?: number;
};

export default function Balls({ balls, bonus }: ballsProps) {
  const renderBalls = () => {
    return balls.map(ball => (
      <div
        key={ball}
        className={`${styles.ball} ${styles[getPartNameForNumber(ball) || '']}`}
      >
        <span>{ball}</span>
      </div>
    ));
  };

  return (
    <div className={styles.balls}>
      {renderBalls()}
      {bonus !== undefined && (
        <div className={`${styles.bonus}`}>
          <span className={styles.plus}>
            <FaPlus />
          </span>
          <div
            className={`${styles.ball} ${styles[getPartNameForNumber(bonus) || '']}`}
          >
            {bonus}
          </div>
        </div>
      )}
    </div>
  );
}
