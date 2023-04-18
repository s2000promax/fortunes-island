import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { InteractiveButton } from 'shared/uiKit/3D/InteractiveButton';
import { InteractiveButtonSize } from 'shared/uiKit/3D/InteractiveButton/model/types';
import { InteractiveTable } from 'features/InteractiveTable';
import { SpinButton } from 'shared/uiKit/3D/SpinButton';

const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('About page')}
      <Canvas>
        <arcRotateCamera
          name="camera1"
          target={new Vector3(0, 5, 5)}
          alpha={Math.PI / 2}
          beta={Math.PI / 3}
          radius={12}
        />
        <hemisphericLight
          name="light1"
          intensity={0.01}
          direction={Vector3.Down()}
        />
        {/*<InteractiveButton size={InteractiveButtonSize.SIZE1} name='Button1' />*/}
        {/*<InteractiveTable />*/}
        <SpinButton />
      </Canvas>
    </div>
  );
};

export default AboutPage;
