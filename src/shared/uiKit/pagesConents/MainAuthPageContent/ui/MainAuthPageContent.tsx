import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainAuthPage.module.scss';
import { useSelector } from 'react-redux';
import { getUserBalance } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface MainAuthPageProps {
  className?: string;
}

export const MainAuthPageContent = (props: MainAuthPageProps) => {
  const { className } = props;
  const { t } = useTranslation('main');
  const userBalance = useSelector(getUserBalance) || 0;

  return (
    <div className={classNames(cls.mainAuthPage, {}, [className])}>
      {
        userBalance > 0 ? (
          <>
            <div>
              <p>{`Step right up and immerse yourself in the world of American Roulette at Fortune Island Casino, 
      where excitement and anticipation swirl around the roulette wheel! 
      Will the ball land on your lucky number, or will it be the color you've been dreaming of?`}
              </p>
              <p>{`Fortune favors the bold, and with a balance of $${userBalance}, 
      you're well on your way to discovering your destiny at the American Roulette table. `}
              </p>
              <p>{`Place your bets and watch as the wheel unveils the secrets of your fortune. 
      It's time to spin, win, and revel in the exhilarating American Roulette experience that awaits!`}
              </p>
            </div>
            <div>
              <img src={'/assets/RouletteImage.png'} alt={''}/>
            </div>
            <div>
              <Link
                to={'/roulette'}
                className={classNames(cls.btn)}
              >
                {t('Play')}
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <p>
                {`So you find yourself at the Roulette table with empty pockets, 
                but fret not, for the wheel of fortune always has a way of turning things around. 
                As you witness the mesmerizing spin of the wheel, take this moment to strategize 
                and envision your path to prosperity. Study the moves of others and learn 
                from their successes and setbacks.`}
              </p>
              <p>
                {`Soon, your fortune will change, and the Roulette table will be waiting 
                for you with open arms, ready to welcome you to a world of thrilling risks 
                and exhilarating rewards. Remember, in the game of Roulette, 
                where the ball lands is just the beginning - your luck and determination 
                will write the rest of the story. 
                So keep your spirits high, for the wheel of fortune is ready to spin 
                in your favor when the time is right!`}
              </p>
            </div>
            <div>
              <img src={'/assets/TopUpBalanceImage.png'} alt={''}/>
            </div>
            <div>
              <a href="#" className={classNames(cls.btn)}>{t('Top up balance')}</a>
            </div>
          </>
        )
      }
    </div>
  );
};
