'use client';

import { createContext, useReducer } from 'react';
import { Action, LottoContextValue, LottoData } from '../lib/definitions';
import Header from '../ui/lotto/header/header';
import LottoNumGenerator from '../ui/lotto/lottoNumGenerator/lottoNumGenerator';
import styles from './lotto.module.scss';

const initialState: number[][] = [];

const reducer = (state: number[][], action: Action): number[][] => {
  switch (action.type) {
    case 'extraction':
      return state;
    default:
      return state;
  }
};

type ClientProps = {
  data: LottoData;
};

export const LottoContext = createContext<LottoContextValue | null>(null);

const LottoClient = ({ data }: ClientProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LottoContext.Provider value={{ state, dispatch }}>
      <main className={styles.lottoMain}>
        <Header data={data} />
        <LottoNumGenerator />
      </main>
    </LottoContext.Provider>
  );
};

export default LottoClient;
