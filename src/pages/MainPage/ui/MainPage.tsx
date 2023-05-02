import { type ReactElement } from 'react';
import { WelcomePageContent } from '@/shared/uiKit/pagesConents/WelcomePageContent';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { MainAuthPageContent } from '@/shared/uiKit/pagesConents/MainAuthPageContent';

const MainPage = (): ReactElement => {
  const authData = useSelector(getUserAuthData);

  return (
    <>
      {
        authData
          ? (
            <MainAuthPageContent />
          )
          : (
            <WelcomePageContent/>
          )
      }
    </>
  );
};

export default MainPage;
