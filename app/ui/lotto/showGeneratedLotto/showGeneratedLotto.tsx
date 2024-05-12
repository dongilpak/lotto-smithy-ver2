import { Lottos } from '@/app/lib/definitions/interfaces';
import Balls from '../balls/balls';
import Paging from '../../paging/paging';
import styles from './showGeneratedLotto.module.scss';
import { LottoContext } from '@/app/lotto/lottoClient';
import { useContext, useState } from 'react';
import SavedLottoModal from '../savedLottoModal/savedLottoModal';

export default function ShowGeneratedLotto({ lottos }: Lottos) {
  const [pageNum, setPageNum] = useState<number>(1);
  const { dispatch } = useContext(LottoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInitialize = () => {
    dispatch({
      type: 'INITIALIZE',
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteLotto = (index: number) => {
    const availableLottos = lottos;
    const deleteIndex = index + pageNum * 5 - 5;
    availableLottos.splice(deleteIndex, 1);
    dispatch({
      type: 'DELETELOTTO',
      lottos: availableLottos,
    });
  };

  const handleSaveLotto = (lotto: number[]) => {
    dispatch({
      type: 'SAVECOOKIE',
      lotto,
    });
  };

  const renderLottoNumItems = () => {
    const itemLength = 5 * pageNum;
    const lottoList = lottos.slice(itemLength - 5, itemLength);

    return lottoList.map((lotto, index) => (
      <div className={styles.lottoContainer} key={index}>
        <span className={styles.lottoIndex}>
          {index === 0
            ? 'A'
            : index === 1
              ? 'B'
              : index === 2
                ? 'C'
                : index === 3
                  ? 'D'
                  : 'E'}
        </span>
        <Balls balls={lotto} />
        <div className={styles.controlLotto}>
          <button
            className={styles.deleteLotto}
            onClick={() => handleDeleteLotto(index)}
          >
            삭제
          </button>
          <button
            className={styles.saveLotto}
            onClick={() => handleSaveLotto(lotto)}
          >
            저장
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div className={styles.lottoListComponent}>
      <div className={styles.top}>
        <h3 className={styles.title}>생성번호 확인</h3>
        <div className={styles.controlPanel}>
          <button className={styles.initialize} onClick={handleInitialize}>
            초기화
          </button>
          <button className={styles.savedLists} onClick={handleOpenModal}>
            저장목록
          </button>
        </div>
      </div>
      <div className={styles.main}>{renderLottoNumItems()}</div>
      <div className={styles.bottom}>
        <Paging
          length={lottos.length}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </div>
      <SavedLottoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
