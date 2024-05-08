// Lotto data fetched with fetch
export type LottoData = {
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
};

// lotto reducer action
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

// lotto context
export type LottoContextValue = {
  state: {
    lottos: number[][];
    suggestion: number[][];
  };
  dispatch: React.Dispatch<LottoAction>;
};

// extractionLogic.ts numStorage value
export type LottoNumber = {
  sections: number[][];
};

// balls.ts lotto range
export type Part = {
  range: number[];
  name: string;
};
