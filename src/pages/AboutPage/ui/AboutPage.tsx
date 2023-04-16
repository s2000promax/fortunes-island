import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { InteractiveButton } from 'shared/uiKit/3D/InteractiveButton';
import { InteractiveButtonSize } from 'shared/uiKit/3D/InteractiveButton/model/types';
import { InteractiveTable } from 'features/InteractiveTable';

const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('About page')}
      <Canvas>
        <arcRotateCamera
          name="camera1"
          target={new Vector3(2, 2, 2)}
          alpha={Math.PI / 3}
          beta={Math.PI / 6}
          radius={5}
        />
        <hemisphericLight
          name="light1"
          intensity={0.8}
          direction={Vector3.Up()}
        />
        {/*<InteractiveButton size={InteractiveButtonSize.SIZE1} name='Button1' />*/}
        <InteractiveTable />
      </Canvas>
    </div>
  );
};

export default AboutPage;
