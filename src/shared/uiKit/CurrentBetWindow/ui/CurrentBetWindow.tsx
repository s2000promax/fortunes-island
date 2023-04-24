import React, { useTransition } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CurrentBetWindow.module.scss';
import { useTranslation } from 'react-i18next';
import { CurrentBet } from 'entities/InteractiveTable';

interface CurrentBetWindowProps {
  className?: string;
  currentBets: Array<CurrentBet> | undefined;
}

export const CurrentBetWindow = (props: CurrentBetWindowProps) => {
  const {
    className,
    currentBets,
  } = props;
  const { t } = useTranslation('RoulettePage');

  return (
    <div className={classNames(cls.currentBetWindow, {}, [className])}>
      <div className={cls.header}>{t('Current bets')}</div>
      {
          currentBets?.map(({ bet, chip }, index) => (
            <div className={cls.bet}
              key={`bet-${index}`}
            >
              <div>{chip}</div>
              <div>{bet}</div>
            </div>
          ))
        }
    </div>
  );
};
