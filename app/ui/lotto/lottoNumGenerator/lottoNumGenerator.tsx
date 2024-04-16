import React, { useContext, useRef, useState } from 'react';
import styles from '../../styles/lottoNumGenerator.module.scss';
import { LottoContext } from '@/app/lotto/lottoClient';
import { generateLottoArrays } from '@/app/lib/extractionControl';

const commons = [
  {
    index: 1,
    text: '1개의 번호 목록에서 번호 2개를 선택, 남은 목록에서 번호 1개씩 선택',
    funcName: 'selectTwoOneAnother',
  },
  {
    index: 2,
    text: '2개의 번호 목록에서 각각 번호 2개를 선택, 남은 목록에서 번호 1개씩 선택',
    funcName: 'selectTwoTwoAnother',
  },
  {
    index: 3,
    text: '1개의 번호 목록에서 번호 3개를 선택, 남은 목록에서 번호 1개씩 선택',
    funcName: 'selectThreeOneOther',
  },
];

const specials = [
  {
    index: 1,
    text: '1개의 번호 목록에서 번호 4개를 선택, 남은 목록에서 번호 1개씩 선택',
    funcName: 'selectFourOneAnother',
  },
  {
    index: 2,
    text: '3개의 번호 목록에서 각각 번호 2개를 선택',
    funcName: 'selectTwoFromThree',
  },
  {
    index: 3,
    text: '2개의 번호 목록에서 각각 번호 3개를 선택',
    funcName: 'selectThreeFromTwo',
  },
];

interface Methods {
  index: number;
  text: string;
  funcName: string;
}

export default function LottoNumGenerator() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState<string>('');
  const { dispatch } = useContext(LottoContext);

  const handleCreateBtn = () => {
    const extractionLottos = generateLottoArrays(
      selectedMethods,
      selectedQuantity,
    );

    dispatch({
      type: 'EXTRACTION',
      lottos: extractionLottos,
    });

    setSelectedQuantity('');
    setSelectedMethods([]);
  };

  const renderMethodBtn = (methods: Methods[], name: string) => {
    return methods.map(method => (
      <div className={styles.methodBtn} key={method.index}>
        <h3
          className={`${styles.methodIndex} ${name === 'common' ? '' : styles.methodSpecial}`}
        >
          {method.index}
        </h3>
        <input
          type="checkbox"
          id={`${name}${method.index}`}
          value={method.funcName}
          checked={selectedMethods.includes(method.funcName)}
          onChange={() => {
            if (selectedMethods.includes(method.funcName)) {
              setSelectedMethods(
                selectedMethods.filter(m => m !== method.funcName),
              );
            } else {
              setSelectedMethods([...selectedMethods, method.funcName]);
            }
          }}
        />
        <label
          htmlFor={`${name}${method.index}`}
          className={styles.methodLabel}
        >
          {method.text}
        </label>
      </div>
    ));
  };

  return (
    <div className={styles.generator}>
      <div className={styles.methodSelector}>
        <div className={styles.commonBox}>
          <h3 className={styles.methodTitle}>보통</h3>
          {renderMethodBtn(commons, 'common')}
        </div>

        <div className={styles.specialBox}>
          <h3 className={styles.methodTitle}>특수</h3>
          {renderMethodBtn(specials, 'special')}
        </div>
      </div>
      <p className={styles.caption}>
        *번호목록은 1~10, 11~20, 21~30, 31~40, 41~45입니다.
      </p>
      <div className={styles.bottom}>
        <div className={styles.applyAmount}>
          <div className={styles.applyTitle}>
            <span>적용수량</span>
          </div>
          <div className={styles.applyNum}>
            <input
              type="radio"
              name="lotto-count"
              id="countFive"
              value="5"
              checked={selectedQuantity === '5'}
              onChange={() => setSelectedQuantity('5')}
            />
            <label className={styles.applyLabel} htmlFor="countFive">
              5
            </label>
          </div>
          <div className={styles.applyNum}>
            <input
              type="radio"
              name="lotto-count"
              id="countTen"
              value="10"
              checked={selectedQuantity === '10'}
              onChange={() => setSelectedQuantity('10')}
            />
            <label className={styles.applyLabel} htmlFor="countTen">
              10
            </label>
          </div>
        </div>
        <button
          className={styles.creation}
          type="button"
          onClick={handleCreateBtn}
        >
          생성
        </button>
      </div>
    </div>
  );
}
