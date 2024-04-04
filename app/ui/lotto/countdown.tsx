'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/header.module.scss';
import { useInterval } from '@/app/lib/utils';

type countdownProps = {
  latest: number;
};

export default function Countdown({ latest }: countdownProps) {
  const [message, setMessage] = useState<string>('');
  const [remainingTime, setRemainingTime] = useState<string>('');

  const determineSaleStatus = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    let referenceTime = new Date(currentDate);
    referenceTime.setDate(referenceTime.getDate() + ((6 - currentDay + 7) % 7));
    referenceTime.setHours(20);
    referenceTime.setMinutes(0);
    referenceTime.setSeconds(0);

    const timeDifference = referenceTime.getTime() - currentDate.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );

    if (
      (currentDay === 6 && currentHour >= 20) ||
      (currentDay === 0 && currentHour < 6)
    ) {
      setMessage('판매 시간이 아닙니다.');
    } else if (
      currentDay === 6 &&
      currentHour === 19 &&
      currentMinute >= 0 &&
      currentMinute < 60
    ) {
      const timeDifferenceSeconds = Math.floor(
        (timeDifference % (1000 * 60)) / 1000,
      );
      setMessage('');
      setRemainingTime(`${minutes}:${timeDifferenceSeconds}`);
    } else {
      setMessage('');
      setRemainingTime(`${days}일 ${hours}:${minutes}`);
    }
  };

  useInterval(determineSaleStatus, 1000);
  return (
    <div className={styles.countdown}>
      <p>
        제 <span className={styles.countText}>{latest + 1}</span>회
      </p>
      {message ? (
        <span className={styles.countText}>{message}</span>
      ) : (
        <p>
          남은시간 <span className={styles.countText}>{remainingTime}</span>
        </p>
      )}
    </div>
  );
}
