import { generateLottoNumbers } from './extractionLogic';

const handlePickOutLogic = (logics: string[]): string[] => {
  const pickedLogics = [...logics];
  const randomIndex = Math.floor(Math.random() * pickedLogics.length);
  pickedLogics.splice(randomIndex, 1);
  return pickedLogics.slice();
};

const calculateRepeatsAndRemaining = (
  logicsLength: number,
  quantity: number,
) => {
  const fullRepeats = Math.floor(quantity / logicsLength);
  const remainingCount = quantity % logicsLength;
  return { fullRepeats, remainingCount };
};

const getRepeatLogics = (logics: string[], repeats: number): string[] => {
  const repeatedLogics: string[] = [];
  for (let i = 0; i < repeats; i++) {
    repeatedLogics.push(...logics);
  }

  return repeatedLogics;
};

const getRandomLogics = (logics: string[], count: number): string[] => {
  const randomLogics: string[] = [];
  const availableLogics = [...logics];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableLogics.length);
    randomLogics.push(availableLogics[randomIndex]);
    availableLogics.splice(randomIndex, 1);
  }
  return randomLogics;
};

export const generateLottoArrays = (
  logics: string[],
  quantity: string,
): number[][] => {
  const quantityValue = quantity === '5' ? 5 : 10;
  const lottos: number[][] = [];

  if (logics.length > quantityValue) {
    const pickOutLogic = handlePickOutLogic(logics);
    for (let i = 0; i < quantityValue; i++) {
      const value = generateLottoNumbers(pickOutLogic[i]);
      lottos.push(value);
    }
  } else if (logics.length === quantityValue) {
    for (let i = 0; i < quantityValue; i++) {
      const value = generateLottoNumbers(logics[i]);
      lottos.push(value);
    }
  } else {
    const { fullRepeats, remainingCount } = calculateRepeatsAndRemaining(
      logics.length,
      quantityValue,
    );
    const repeatedLogicsValue = getRepeatLogics(logics, fullRepeats);
    const remainingLogics = getRandomLogics(logics, remainingCount);
    const lottoLogics = [...repeatedLogicsValue, ...remainingLogics];

    for (let i = 0; i < lottoLogics.length; i++) {
      const value = generateLottoNumbers(lottoLogics[i]);
      lottos.push(value);
    }
  }

  return lottos;
};
