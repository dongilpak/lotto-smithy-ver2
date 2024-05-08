import { rewardProps } from '@/app/lib/definitions/interfaces';
import styles from './header.module.scss';

export default function Reward({
  firstAccumamnt,
  firstPrzwnerCo,
  firstWinamnt,
}: rewardProps) {
  const sliceAccmamnt = firstAccumamnt.toString().slice(0, -8);
  const sliceWinamnt = firstWinamnt.toString().slice(0, -8);

  return (
    <div>
      <p className={styles.rewardTitle}>1등 총 당첨금액</p>
      <p className={styles.rewardAmount}>
        {`${sliceAccmamnt}억`}
        <span
          className={styles.rewardWinner}
        >{`(${firstPrzwnerCo}명 / ${sliceWinamnt}억)`}</span>
      </p>
    </div>
  );
}
