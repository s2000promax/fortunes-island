import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GameScoreWindow.module.scss';
import { useTranslation } from 'react-i18next';
import { BetsNumbers } from '@/entities/InteractiveTable';
import { useSelector } from 'react-redux';
import { getUserBalance } from '@/entities/User';
import { getAllDrawnNumbers } from '@/entities/Roulette';

interface GameScoreWindowProps {
  className?: string;
  // allDrawnNumbers: Array<string>;
}

export const GameScoreWindow = (props: GameScoreWindowProps) => {
  const {
    className,
    // allDrawnNumbers,
  } = props;
  const { t } = useTranslation('RoulettePage');
  const userBalance = useSelector(getUserBalance);
  const allDrawnNumbers = useSelector(getAllDrawnNumbers) || [];

  return (
    <div className={classNames(cls.gameScoreWindow, {}, [className])}>
      <div className={cls.header}>{t('Game score')}</div>
      <div className={cls.balance}>
        <div>{t('You balance:')}</div>
        <div>{`$${userBalance}`}</div>
      </div>
      <p>----------------------------</p>

      <div className={cls.header}>{t('All the drawn numbers:')}</div>
      {
        allDrawnNumbers.map((number, index) => (
          <div className={cls.number} key={`allDrawnNumber-${index}-${number}`}>{number}</div>
        ))
      }
    </div>
  );
};
