import { MainSectionsValue } from './definitions/interfaces';
import { LottoNumber } from './definitions/types';

const numStorage: LottoNumber = {
  sections: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45],
  ],
};

const selectRandomNumbers = (numbers: number[], count: number): number[] => {
  const result: number[] = [];
  const availableNumbers = [...numbers];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    result.push(availableNumbers[randomIndex]);
    availableNumbers.splice(randomIndex, 1);
  }

  return result;
};

const selectRandomIndices = (length: number, count: number): number[] => {
  const indices: number[] = [];
  const availableIndices = Array.from({ length }, (_, i) => i);
  for (let i = 0; i < count; i++) {
    const randomControl =
      availableIndices.length === 5 ? 0.45 : availableIndices.length;

    const randomIndex = Math.floor(Math.random() * randomControl);
    indices.push(availableIndices[randomIndex]);
    availableIndices.splice(randomIndex, 1);
  }

  return indices;
};

const selectMainSections = (
  sections: number[][],
  mainCount: number = 1,
  numCount: number = 1,
): MainSectionsValue => {
  const mainSectionIndices = selectRandomIndices(sections.length, mainCount);
  const mainSections = mainSectionIndices.map(index => sections[index]);

  const mainSectionNumbers = mainSections.flatMap(section =>
    selectRandomNumbers(section, numCount),
  );
  return {
    mainIndices: mainSectionIndices,
    numbers: mainSectionNumbers,
  };
};

const selectSubSections = (
  mainIndices: number[],
  sections: number[][],
  numCount: number = 1,
): number[] => {
  const subSections = sections.filter(
    (_, index) => index !== mainIndices[0] && index !== mainIndices[1],
  );
  const subSectionNumbers = subSections.flatMap(section =>
    selectRandomNumbers(section, numCount),
  );

  return subSectionNumbers;
};

export const generateLottoNumbers = (logic: string): number[] => {
  const { sections } = numStorage;

  switch (logic) {
    case 'selectTwoOneAnother': //보통1
      return handleSelectTwoOneAnother(sections);
    case 'selectThreeOneOther': //보통3
    case 'selectFourOneAnother': //특수1
      return handleSelectMultipleOneAnother(sections, logic);
    case 'selectTwoTwoAnother': //보통2
      return handleSelectTwoTwoAnother(sections);
    case 'selectTwoFromThree': //특수2
      return handleSelectTwoFromThree(sections);
    case 'selectThreeFromTwo': //특수3
      return handleSelectThreeFromTwo(sections);
    default:
      throw new Error('Invalid logic provided');
  }
};

const handleSelectTwoOneAnother = (sections: number[][]): number[] => {
  const { mainIndices, numbers: mainNumbers } = selectMainSections(
    sections,
    1,
    2,
  );
  const subSectionNumbers = selectSubSections(mainIndices, sections);
  const lottoNumbers = [...mainNumbers, ...subSectionNumbers].sort(
    (a, b) => a - b,
  );
  return lottoNumbers;
};

const handleSelectMultipleOneAnother = (
  sections: number[][],
  logic: string,
): number[] => {
  const mainCount = logic === 'selectThreeOneOther' ? 3 : 4;
  const { mainIndices, numbers: mainNumbers } = selectMainSections(
    sections,
    1,
    mainCount,
  );
  const remainingSections = sections.filter(
    (_section, index) => index !== mainIndices[index],
  );
  const subCount = logic === 'selectThreeOneOther' ? 3 : 2;
  const subSectionIndices = selectRandomIndices(
    remainingSections.length,
    subCount,
  );
  const subSections = subSectionIndices.map(index => remainingSections[index]);
  const subSectionNumbers = subSections.flatMap(section =>
    selectRandomNumbers(section, 1),
  );
  const lottoNumbers = [...mainNumbers, ...subSectionNumbers].sort(
    (a, b) => a - b,
  );
  return lottoNumbers;
};

const handleSelectTwoTwoAnother = (sections: number[][]): number[] => {
  const { mainIndices, numbers: mainNumbers } = selectMainSections(
    sections,
    2,
    2,
  );
  const remainingSections = sections.filter(
    (_section, index) => !mainIndices.includes(index),
  );
  const subSectionIndices = selectRandomIndices(remainingSections.length, 2);
  const subSections = subSectionIndices.map(index => remainingSections[index]);
  const subSectionNumbers = subSections.flatMap(section =>
    selectRandomNumbers(section, 1),
  );
  const lottoNumbers = [...mainNumbers, ...subSectionNumbers].sort(
    (a, b) => a - b,
  );
  return lottoNumbers;
};

const handleSelectTwoFromThree = (sections: number[][]): number[] => {
  const { numbers } = selectMainSections(sections, 3, 2);
  return numbers;
};

const handleSelectThreeFromTwo = (sections: number[][]): number[] => {
  const { numbers } = selectMainSections(sections, 2, 3);
  return numbers;
};
