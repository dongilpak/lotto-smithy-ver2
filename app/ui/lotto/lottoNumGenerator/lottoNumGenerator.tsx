import React, { useState } from 'react';
import styles from '../../styles/lottoNumGenerator.module.scss';

const commons = [
  {
    index: 1,
    text: '1개의 번호 목록에서 번호 2개를 선택, 남은 목록에서 번호 1개씩 선택',
  },
  {
    index: 2,
    text: '2개의 번호 목록에서 각각 번호 2개를 선택, 남은 목록에서 번호 1개씩 선택',
  },
  {
    index: 3,
    text: '1개의 번호 목록에서 번호 3개를 선택, 남은 목록에서 번호 1개씩 선택',
  },
];

const specials = [
  {
    index: 1,
    text: '1개의 번호 목록에서 번호 4개를 선택, 남은 목록에서 번호 1개씩 선택',
  },
  {
    index: 2,
    text: '3개의 번호 목록에서 각각 번호 2개를 선택',
  },
  {
    index: 3,
    text: '2개의 번호 목록에서 각각 번호 3개를 선택',
  },
];

interface Methods {
  index: number;
  text: string;
}

export default function LottoNumGenerator() {
  const [quantity, setQuantity] = useState<string>('');
  const [logics, setLogics] = useState<string[]>([]);

  const getQuantity = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const targetQuantity = e.currentTarget.value;
    quantity === targetQuantity
      ? setQuantity(quantity)
      : setQuantity(targetQuantity);
  };
  const renderMethodBtn = (methods: Methods[], name: string) => {
    return methods.map(method => (
      <div className={styles.methodBtn} key={method.index}>
        <h3
          className={`${styles.methodIndex} ${name === 'common' ? '' : styles.methodSpecial}`}
        >
          {method.index}
        </h3>
        <input type="checkbox" id={`${name}${method.index}`} />
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
              onClick={e => getQuantity(e)}
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
              onClick={e => getQuantity(e)}
            />
            <label className={styles.applyLabel} htmlFor="countTen">
              10
            </label>
          </div>
        </div>
        <button className={styles.creation} type="button">
          생성
        </button>
      </div>
    </div>
  );
}
