import { Metadata } from 'next';
import Header from '../ui/lotto/header';
import styles from './lotto.module.scss';
import { LottoData } from '../lib/definitions';

export const metadata: Metadata = {
  title: 'lotto',
};

export async function getData(): Promise<LottoData> {
  const res = await fetch(
    'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1113',
  );

  const data = res.json();

  return data;
}

export default async function page() {
  const data: LottoData = await getData();
  return (
    <main className={styles.lottoMain}>
      <Header data={data} />
    </main>
  );
}
