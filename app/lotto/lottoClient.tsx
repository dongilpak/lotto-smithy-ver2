'use client';

import { createContext, useReducer } from 'react';
import {
  LottoAction,
  LottoContextValue,
  LottoData,
  Lottos,
} from '../lib/definitions';
import Header from '../ui/lotto/header/header';
import LottoNumGenerator from '../ui/lotto/lottoNumGenerator/lottoNumGenerator';
import styles from './lotto.module.scss';
import ShowGeneratedLotto from '../ui/lotto/showGeneratedLotto/showGeneratedLotto';

const initialState: Lottos = {
  lottos: [],
};

const reducer = (state: Lottos, action: LottoAction): Lottos => {
  switch (action.type) {
    case 'EXTRACTION':
      const updatedLottos = [...action.lottos, ...state.lottos].slice(0, 30);
      return {
        ...state,
        lottos: updatedLottos,
      };
    default:
      return state;
  }
};

type ClientProps = {
  data: LottoData;
};

export const LottoContext = createContext<LottoContextValue>({
  state: initialState,
  dispatch: () => {},
});

const LottoClient = ({ data }: ClientProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LottoContext.Provider value={{ state, dispatch }}>
      <main className={styles.lottoMain}>
        <Header data={data} />
        <LottoNumGenerator />
        <ShowGeneratedLotto lottos={state.lottos} />
      </main>
    </LottoContext.Provider>
  );
};

export default LottoClient;
