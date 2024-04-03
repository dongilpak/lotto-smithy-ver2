import { Metadata } from 'next';
import Header from '../ui/lotto/header';
import styles from './lotto.module.scss';

export const metadata: Metadata = {
  title: 'lotto',
};

export default function page() {
  return (
    <main className={styles.lottoMain}>
      <Header />
    </main>
  );
}
