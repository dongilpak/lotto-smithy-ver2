// useInterval
export interface CallbackFunction {
  (): void;
}

// fetch lotto data
export interface LottoData {
  drwNo: number;
  drwtNo1: number;
  drwtNo2: number;
  drwtNo3: number;
  drwtNo4: number;
  drwtNo5: number;
  drwtNo6: number;
  bnusNo: number;
  returnValue: string;
  firstAccumamnt: number;
  firstWinamnt: number;
  firstPrzwnerCo: number;
}

export type LottoAction = {
  type: 'EXTRACTION';
  lottos: number[][];
};

export type Lottos = {
  lottos: number[][];
};

export type LottoContextValue = {
  state: {
    lottos: number[][];
  };
  dispatch: React.Dispatch<LottoAction>;
};
