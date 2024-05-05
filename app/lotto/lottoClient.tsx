'use client';

import { createContext, useReducer } from 'react';
import {
  InitialState,
  LottoAction,
  LottoContextValue,
  LottoData,
  Lottos,
} from '../lib/definitions';
import Header from '../ui/lotto/header/header';
import LottoNumGenerator from '../ui/lotto/lottoNumGenerator/lottoNumGenerator';
import styles from './lotto.module.scss';
import ShowGeneratedLotto from '../ui/lotto/showGeneratedLotto/showGeneratedLotto';
import SuggestionLotto from '../ui/lotto/suggestionLotto/suggestionLotto';

const initialState: InitialState = {
  lottos: [],
  suggestion: [],
};

const reducer = (state: InitialState, action: LottoAction): InitialState => {
  switch (action.type) {
    case 'EXTRACTION':
      const updatedLottos = [...action.lottos, ...state.lottos].slice(0, 50);
      return {
        ...state,
        lottos: updatedLottos,
      };
    case 'INITIALIZE':
      return {
        ...state,
        lottos: [],
      };
    case 'DELETELOTTO':
      return {
        ...state,
        lottos: [...action.lottos],
      };
    case 'SUGGESTION':
      const setSuggestion = [...action.suggestion];
      return {
        ...state,
        suggestion: setSuggestion,
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
        <SuggestionLotto suggestion={state.suggestion} />
      </main>
    </LottoContext.Provider>
  );
};

export default LottoClient;
