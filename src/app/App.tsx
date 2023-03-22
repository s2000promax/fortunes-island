import { type ReactElement, Suspense } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';
import { useTranslation } from 'react-i18next';
import { Button, VariantButton } from 'shared/uiKit/Button';

const App = (): ReactElement => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme} style={{ display: 'block' }}>{t('Toggle Theme')}</button>
      <Button
        variant={VariantButton.OUTLINE}
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        style={{ display: 'block' }}
      >
        {t('Toggle Language')}
      </Button>
      <div style={{ display: 'block' }}>{t('Links')}</div>

      <Link to={'/'} style={{ display: 'block' }}>{t('Main')}</Link>
      <Link to={'/about'} style={{ display: 'block' }}>{t('About')}</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
