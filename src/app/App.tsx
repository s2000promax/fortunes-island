import { type ReactElement, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Button, VariantButton } from 'shared/uiKit/Button';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = (): ReactElement => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);


  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={toggleTheme} style={{ display: 'block' }}>{t('Toggle Theme')}</button>
        <Button
          variant={VariantButton.OUTLINE}
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
          style={{ display: 'block' }}
        >
          {t('Toggle Language')}
        </Button>
        <div className="content-page">
          <div style={{ display: 'block' }}>{t('Links')}</div>
          <Link to={'/'} style={{ display: 'block' }}>{t('Main')}</Link>
          <Link to={'/about'} style={{ display: 'block' }}>{t('About')}</Link>
          <Link to={'/roulette'} style={{ display: 'block' }}>{t('Roulette')}</Link>
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
