import 'regenerator-runtime/runtime';
import React, { ReactNode, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Canv.module.scss';
import * as BABYLON from '@babylonjs/core';
import Ammo from 'ammojs-typed';

import { scene, engine } from '../lib/scene';

interface CanvProps {
  className?: string;
  children?: ReactNode;
}

export const Canv = (props: CanvProps) => {
  const { className, children } = props;

  useEffect(() => {
    engine.runRenderLoop(() => scene.render());

    // return () => engine.
  }, []);

  return (
    <div className={classNames(cls.canv, {}, [className])}>
      {/*<canvas id='renderCanvas' >{children}</canvas>*/}
    </div>
  );
};
