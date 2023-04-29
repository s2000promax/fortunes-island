import React, { useEffect, useTransition } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CurrentBetWindow.module.scss';
import { useTranslation } from 'react-i18next';
import { CurrentBet, getCurrentBets, getCurrentWinDelta, rouletteActions } from 'entities/Roulette';
import { useSelector } from 'react-redux';
import { getUserBalance, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface CurrentBetWindowProps {
  className?: string;
}

export const CurrentBetWindow = (props: CurrentBetWindowProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('RoulettePage');
  const dispatch = useAppDispatch();
  const currentBets = useSelector(getCurrentBets) || [];
  const currentWinDelta = useSelector(getCurrentWinDelta);
  const userBalance = useSelector(getUserBalance);

  useEffect(() => {
    if (currentWinDelta && userBalance) {
      dispatch(userActions.setBalance(userBalance + currentWinDelta));
      dispatch(rouletteActions.fixResult());
    }
  }, [currentWinDelta, dispatch, userBalance]);

  return (
    <div className={classNames(cls.currentBetWindow, {}, [className])}>
      <div className={cls.header}>{t('Current bets')}</div>
      {
          currentBets?.map(({ bet, chip }, index) => (
            <div className={cls.bet}
              key={`bet-${index}`}
            >
              <div>${chip}</div>
              <div>{bet}</div>
            </div>
          ))
        }
    </div>
  );
};
