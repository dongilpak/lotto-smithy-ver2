import { useEffect } from 'react';
import styles from './paging.module.scss';
import { PagingProps } from '@/app/lib/definitions/interfaces';

export default function Paging({ length, pageNum, setPageNum }: PagingProps) {
  const pageLength = length % 5 === 0 ? length / 5 : length / 5 + 1;
  const listOfPages = Array.from({ length: pageLength }, (_, i) => i + 1);
  useEffect(() => {
    if (length !== 0 && pageNum * 5 - 5 === length) {
      setPageNum(pageLength);
    }
  });
  return (
    <div className={styles.paging}>
      {listOfPages.map(page => (
        <div className={styles.pageItem} key={page}>
          <input
            type="radio"
            name="paging"
            className={styles.pageInputRadio}
            id={`${page}`}
            checked={pageNum === page}
            onChange={() => setPageNum(page)}
          />
          <label className={styles.pageLabel} htmlFor={`${page}`}>
            {page}
          </label>
        </div>
      ))}
    </div>
  );
}
