import styles from '../styles/header.module.scss';

export default function Reward() {
  return (
    <div>
      <p className={styles.rewardTitle}>1등 총 당첨금액</p>
      <p className={styles.rewardAmount}>
        278억<span className={styles.rewardWinner}>(14명 / 20억)</span>
      </p>
    </div>
  );
}
