import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas } from 'widgets/Canvas';
import { Vector3, Color3 } from '@babylonjs/core';
import { Chips, ChipsNominals } from 'shared/uiKit/3D/Chips';


const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about');
  // @ts-ignore
  return (
    <div>
      {t('About page')}
      <Canvas>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 2}
          beta={Math.PI / 4}
          radius={8}
        />
        <hemisphericLight
          name="light1"
          intensity={0.8}
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
        <Chips
          nominal={ChipsNominals.CHIP_10_DOLLARS}
          />
      </Canvas>
    </div>
  );
};

export default AboutPage;
