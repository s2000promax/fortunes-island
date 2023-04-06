import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about');
  // @ts-ignore
  return (
    <div>
      {t('About page')}
    </div>
  );
};

export default AboutPage;
