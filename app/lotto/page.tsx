import { Metadata } from 'next';
import styles from './lotto.module.scss';
import { Action, LottoContextValue, LottoData } from '../lib/definitions';
import LottoClient from './lottoClient';

export const metadata: Metadata = {
  title: 'lotto',
};

export async function getData(): Promise<LottoData> {
  const standard = Number(new Date('2002-12-07'));
  const today = Number(new Date());
  const diff = today - standard;

  const period = Math.floor(diff / (1000 * 60 * 60 * 24));
  const round =
    new Date().getDay() === 6 && new Date().getHours() < 21
      ? Math.floor(period / 7)
      : Math.floor(period / 7 + 1);

  const res = await fetch(
    `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`,
  );

  const data = res.json();

  return data;
}

export default async function page() {
  const data: LottoData = await getData();
  return <LottoClient data={data} />;
}
