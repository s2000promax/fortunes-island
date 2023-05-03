import React, { ReactNode } from 'react';
// import '@babylonjs/core/Physics/physicsEngineComponent';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Canvas.module.scss';
import { Engine, Scene } from 'react-babylonjs';

interface CanvasProps {
  className?: string;
  children: ReactNode;
}

export const Canvas = (props: CanvasProps) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.canvas, {}, [className])}>
      <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" autoFocus>
        <Scene>
          {children}
        </Scene>
      </Engine>
    </div>
  );
};
