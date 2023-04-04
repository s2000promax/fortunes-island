import React, { ReactNode } from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Canvas.module.scss';

interface CanvasProps {
  className?: string;
  children: ReactNode;
}

export const Canvas = (props: CanvasProps) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.canvas, {}, [className])}>
      <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
        <Scene>{children}</Scene>
      </Engine>
    </div>
  );
};