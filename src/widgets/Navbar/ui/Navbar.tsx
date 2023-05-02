import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, VariantButton } from '@/shared/uiKit/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';
import cls from './Navbar.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from '@/shared/uiKit/AppLink';
import ThemeToggle from '@/shared/assets/ui/ThemeToggle.svg';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          <span>{t('Main')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          <span>{t('About')}</span>
        </AppLink>
        {
          authData &&
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/roulette'}>
              <span>{t('Roulette')}</span>
            </AppLink>
        }
      </div>
      <Button
        variant={VariantButton.CLEAR_INVERTED}
        onClick={toggleTheme}
      >
        <ThemeToggle />
      </Button>
      <Button
        variant={VariantButton.CLEAR_INVERTED}
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
      >
        {i18n.language}
      </Button>
      {
        authData ? (
          <Button
            variant={VariantButton.CLEAR_INVERTED}
            className={cls.links}
            onClick={onLogout}
          >
            {t('Logout')}
          </Button>
        ) : (
          <>
            <Button
              variant={VariantButton.CLEAR_INVERTED}
              className={cls.links}
              onClick={onShowModal}
            >
              {t('Login')}
            </Button>
            {isAuthModal && (
              <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
              />
            )}
          </>
        )
      }
    </div>
  )
    ;
});
