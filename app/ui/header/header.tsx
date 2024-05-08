import styles from './header.module.scss';
import Countdown from './countdown';
import Reward from './reward';
import Balls from '../lotto/balls/balls';
import { lottoDataProps } from '@/app/lib/definitions/interfaces';

export default function Header({ data }: lottoDataProps) {
  const balls = [
    data.drwtNo1,
    data.drwtNo2,
    data.drwtNo3,
    data.drwtNo4,
    data.drwtNo5,
    data.drwtNo6,
  ];
  return (
    <header className={styles.lottoHeader}>
      <div className={styles.innerBox}>
        <Countdown latest={data.drwNo} />
        <div className={styles.result}>
          <p className={styles.resultTitle}>
            <span className={styles.resultEmphasis}>{data.drwNo}</span>회
            당첨결과
          </p>
          <Balls balls={balls} bonus={data.bnusNo} />
        </div>
        <Reward
          firstAccumamnt={data.firstAccumamnt}
          firstPrzwnerCo={data.firstPrzwnerCo}
          firstWinamnt={data.firstWinamnt}
        />
      </div>
    </header>
  );
}
