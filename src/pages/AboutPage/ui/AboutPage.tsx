import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { TestCell } from 'features/TestCell';
import { TestRoulette } from 'features/TestRoulette';

const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('About page')}
      <Canvas>
        <arcRotateCamera
          name="camera1"
          target={new Vector3(0, 6, 0)}
          alpha={Math.PI / 3}
          beta={Math.PI / 6}
          radius={20}
        />
        <hemisphericLight
          name="light1"
          intensity={0.8}
          direction={Vector3.Up()}
        />
        <TestCell />
      </Canvas>
    </div>
  );
};

export default AboutPage;
