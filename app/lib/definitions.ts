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

export type LottoAction =
  | {
      type: 'EXTRACTION';
      lottos: number[][];
    }
  | {
      type: 'INITIALIZE';
    }
  | {
      type: 'DELETELOTTO';
      lottos: number[][];
    }
  | {
      type: 'SUGGESTION';
      suggestion: number[][];
    };

export type InitialState = {
  lottos: number[][];
  suggestion: number[][];
};

export type Lottos = {
  lottos: number[][];
};

export type Suggestion = {
  suggestion: number[][];
};

export type LottoContextValue = {
  state: {
    lottos: number[][];
    suggestion: number[][];
  };
  dispatch: React.Dispatch<LottoAction>;
};
