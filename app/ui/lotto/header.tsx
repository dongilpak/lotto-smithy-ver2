import styles from '../styles/header.module.scss';
import Countdown from './countdown';
import Reward from './reward';

export default function Header() {
  return (
    <header className={styles.lottoHeader}>
      <div className={styles.innerBox}>
        <Countdown />
        <div className="result">result</div>
        <Reward />
      </div>
    </header>
  );
}
