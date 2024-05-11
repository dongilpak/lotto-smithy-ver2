'use client';

import { createContext, useReducer } from 'react';
import Header from '../ui/header/header';
import LottoNumGenerator from '../ui/lotto/lottoNumGenerator/lottoNumGenerator';
import styles from './lotto.module.scss';
import ShowGeneratedLotto from '../ui/lotto/showGeneratedLotto/showGeneratedLotto';
import SuggestionLotto from '../ui/lotto/suggestionLotto/suggestionLotto';
import { InitialState, lottoDataProps } from '../lib/definitions/interfaces';
import { LottoAction, LottoContextValue } from '../lib/definitions/types';
import Cookies from 'js-cookie';

const initialState: InitialState = {
  lottos: [],
  suggestion: [],
  cookieLottos: [],
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
    case 'SAVECOOKIE':
      const newCookieLottos = [action.lotto, ...state.cookieLottos].slice(
        0,
        30,
      );
      Cookies.set('lottos', JSON.stringify(newCookieLottos), { expires: 0.5 });
      return {
        ...state,
        cookieLottos: newCookieLottos,
      };
    case 'DELETECOOKIE':
      const updateCookieLottos = state.cookieLottos.filter(
        (_, i) => i !== action.index,
      );
      Cookies.set('lottos', JSON.stringify(updateCookieLottos), {
        expires: 0.5,
      });
      return {
        ...state,
        cookieLottos: updateCookieLottos,
      };

    default:
      return state;
  }
};

export const LottoContext = createContext<LottoContextValue>({
  state: initialState,
  dispatch: () => {},
});

const LottoClient = ({ data }: lottoDataProps) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    cookieLottos: Cookies.get('lottos')
      ? JSON.parse(Cookies.get('lottos') as string)
      : [],
  });
  return (
    <LottoContext.Provider value={{ state, dispatch }}>
      <main className={styles.lottoMain}>
        <Header data={data} />
        <div className={styles.combineCreation}>
          <LottoNumGenerator />
          <ShowGeneratedLotto lottos={state.lottos} />
        </div>
        <SuggestionLotto suggestion={state.suggestion} />
      </main>
    </LottoContext.Provider>
  );
};

export default LottoClient;
