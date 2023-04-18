import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { Roulette } from 'features/Roulette';
import { InteractiveTable } from 'features/InteractiveTable';


const RoulettePage = (): ReactElement => {
  const { t } = useTranslation('RoulettePage');
  // @ts-ignore
  return (
    <div>
      {t('Roulette page')}
      <Canvas>
        <arcRotateCamera
          name="camera1"
          target={new Vector3(-5, 12, 0)}
          alpha={Math.PI / 2}
          beta={Math.PI / 6}
          radius={40}
        />
        <hemisphericLight
          name="light1"
          intensity={0.1}
          direction={Vector3.Up()}
        />

        {/*<ground name="ground" width={6} height={6} />*/}
        {/*<SpinningBox*/}
        {/*  name={'left'}*/}
        {/*  size={2}*/}
        {/*  position={new Vector3(-2, 0, 0)}*/}
        {/*  hoveredColor={Color3.FromHexString('#C26DBC')}*/}
        {/*  color={Color3.FromHexString('#EEB5EB')}*/}
        {/*/>*/}
        {/*<SpinningBox*/}
        {/*  name={'right'}*/}
        {/*  size={2}*/}
        {/*  position={new Vector3(2, 0, 0)}*/}
        {/*  color={Color3.FromHexString('#C8F4F9')}*/}
        {/*  hoveredColor={Color3.FromHexString('#3CACAE')}*/}
        {/*/>*/}


        <Roulette
          position={new Vector3(0, 0, -23)}
        />

        <InteractiveTable />

      </Canvas>
    </div>
  );
};

export default RoulettePage;
