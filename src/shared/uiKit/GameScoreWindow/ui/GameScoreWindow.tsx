import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GameScoreWindow.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserBalance } from '@/entities/User';
import { getAllDrawnNumbers } from '@/entities/Roulette';

interface GameScoreWindowProps {
  className?: string;
}

export const GameScoreWindow = (props: GameScoreWindowProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('roulettePage');
  const userBalance = useSelector(getUserBalance);
  const allDrawnNumbers = useSelector(getAllDrawnNumbers) || [];

  return (
    <div className={classNames(cls.gameScoreWindow, {}, [className])}>
      <div className={cls.header}>{t('Game score')}</div>
      <div className={cls.balance}>
        <div>
          {t('You balance')}
          <span>:</span>
        </div>
        <div>{`$${userBalance}`}</div>
      </div>
      <p>----------------------------</p>

      <div className={cls.header}>
        {t('All the drawn numbers')}
        <span>:</span>
      </div>
      {
        allDrawnNumbers.map((bet, index) => (
          <div className={cls.number} key={`allDrawnNumber-${index}-${bet.drawnNumber}`}>
            <div>{bet.drawnNumber}</div>
            {
              bet.status
                ? (<div>{t('WIN')}</div>)
                : (<div>{t('LOST')}</div>)
            }
          </div>
        ))
      }
    </div>
  );
};
