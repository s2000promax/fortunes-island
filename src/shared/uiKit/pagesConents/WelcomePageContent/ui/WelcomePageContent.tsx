import React, { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './WelcomePage.module.scss';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByUsername';

interface WelcomePageProps {
  className?: string;
}

export const WelcomePageContent = (props: WelcomePageProps) => {
  const { className } = props;
  const { t } = useTranslation('main');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.welcomePage, {}, [className])}>
      <header>
        <h1>{'Welcome to Fortune Island Casino'}</h1>
      </header>
      <main>
        <div className={classNames(cls.img)}>
          <img src={'assets/MainImage.png'} alt={''}/>
        </div>
        <section className={classNames(cls.intro)}>
          <h2>{'Experience the thrill of the game!'}</h2>
          <p>
            {`At Fortune Island Casino, we offer the best gaming experience, 
            top-notch services, and luxurious amenities`}
          </p>
        </section>
        <section className={classNames(cls.cta)}>

          <a href="#"
             className={classNames(cls.btn)}
             onClick={onShowModal}
          >
            {t('Join Now')}
          </a>
          <a href="#" className={classNames(cls.btn)}>{t('Learn More')}</a>
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
          />
        </section>
      </main>
      <footer>
        <p>{'2023 Fortune Island Casino. All rights reserved.'}</p>
      </footer>
    </div>
  );
};
