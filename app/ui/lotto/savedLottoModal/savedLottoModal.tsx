import React, { useContext, useState } from 'react';
import styles from './SavedLottoModal.module.scss';
import Balls from '../balls/balls';
import Paging from '../../paging/paging';
import { LottoContext } from '@/app/lotto/lottoClient';
import { SavedLottoModalProps } from '@/app/lib/definitions/interfaces';

const SavedLottoModal = ({ isOpen, onClose }: SavedLottoModalProps) => {
  const { state, dispatch } = useContext(LottoContext);
  const [pageNum, setPageNum] = useState(1);

  const handleDeleteLotto = (index: number) => {
    dispatch({
      type: 'DELETECOOKIE',
      index,
    });
  };

  const renderSavedLottos = () => {
    const itemLength = 5 * pageNum;
    const lottoList = state.cookieLottos.slice(itemLength - 5, itemLength);

    return lottoList.map((lotto, index) => (
      <div key={index} className={styles.lottoItem}>
        <Balls balls={lotto} />
        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteLotto(index + itemLength - 5)}
        >
          삭제
        </button>
      </div>
    ));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>저장목록</h3>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.modalContent}>{renderSavedLottos()}</div>
        <div className={styles.modalFooter}>
          <Paging
            length={state.cookieLottos.length}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
        </div>
      </div>
    </div>
  );
};

export default SavedLottoModal;
