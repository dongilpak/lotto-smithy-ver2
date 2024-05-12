import { LottoData } from './types';

// useInterval
export interface CallbackFunction {
  (): void;
}

// lottoData props
export interface lottoDataProps {
  data: LottoData;
}

// reducer initialState
export interface InitialState {
  lottos: number[][];
  suggestion: number[][];
  cookieLottos: number[][];
}

// show generated lotto props
export interface Lottos {
  lottos: number[][];
}

// suggestion lotto props
export interface Suggestion {
  suggestion: number[][];
}

// extractionLogic.ts selectMainSections func
export interface MainSectionsValue {
  mainIndices: number[];
  numbers: number[];
}

// countdown props
export interface countdownProps {
  latest: number;
}

// reward props
export interface rewardProps {
  firstAccumamnt: number;
  firstPrzwnerCo: number;
  firstWinamnt: number;
}

// balls props
export interface ballsProps {
  balls: number[];
  bonus?: number;
}

// lottoNumGenerator.tsx
export interface Methods {
  index: number;
  text: string;
  funcName: string;
}

// paging props
export interface PagingProps {
  length: number;
  pageNum: number;
  setPageNum: (page: number) => void;
}

// savedLottoModal

export interface SavedLottoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
