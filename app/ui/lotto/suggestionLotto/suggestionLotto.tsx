import { Suggestion } from '@/app/lib/definitions';
import React, { useContext, useEffect } from 'react';
import Balls from '../balls';
import { generateLottoArrays } from '@/app/lib/extractionControl';
import { LottoContext } from '@/app/lotto/lottoClient';
import styles from '../../styles/suggestionLotto.module.scss';

export default function SuggestionLotto({ suggestion }: Suggestion) {
  const { dispatch } = useContext(LottoContext);

  useEffect(() => {
    generateSuggestionLottos();
  }, []);

  const generateSuggestionLottos = () => {
    const methods = [
      'selectTwoOneAnother',
      'selectTwoTwoAnother',
      'selectThreeOneOther',
      'selectTwoFromThree',
      'selectThreeFromTwo',
    ];
    const quantity = '10';

    const extractionLottos = generateLottoArrays(methods, quantity);

    dispatch({
      type: 'SUGGESTION',
      suggestion: extractionLottos,
    });
  };

  const renderLottoBalls = (startIndex: number, endIndex: number) => {
    return suggestion.slice(startIndex, endIndex).map((lotto, i) => (
      <div className={styles.suggestionBalls} key={i}>
        <Balls balls={lotto} />
        <button type="button" className={styles.saveLotto}>
          저장
        </button>
      </div>
    ));
  };

  return (
    <div className={styles.suggestionComponent}>
      <div className={styles.header}>
        <h3>추천번호</h3>
      </div>
      <div className={styles.suggestionLottos}>
        <div className={styles.leftcolumn}>{renderLottoBalls(0, 5)}</div>
        <div className={styles.rightcolumn}>{renderLottoBalls(5, 10)}</div>
      </div>
      <div className={styles.bottom}>
        <button className={styles.refresh} onClick={generateSuggestionLottos}>
          새로고침
        </button>
      </div>
    </div>
  );
}
