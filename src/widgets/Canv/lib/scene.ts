
import * as BABYLON from '@babylonjs/core';
import { canvas } from './domItems';

export const engine = new BABYLON.Engine(canvas, true);
export const scene = makeScene();

function makeScene(): BABYLON.Scene {
  const scene = new BABYLON.Scene(engine);

  createCamera(scene);
  createLight(scene);
  setBackground(scene);

  return scene;
}

function createCamera(scene: BABYLON.Scene): void {
  const alpha: number = Math.PI / 4;
  const beta: number = Math.PI / 3;
  const radius: number = 8;
  const target: BABYLON.Vector3 = new BABYLON.Vector3(0,0,0);

  new BABYLON.ArcRotateCamera(
    'Camera',
    alpha,
    beta,
    radius,
    target,
    scene,
  );
}

function createLight(scene: BABYLON.Scene): void {
  new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(1, 1, 0),
    scene,
  );
}

function setBackground(scene: BABYLON.Scene): void {
  scene.clearColor = new BABYLON.Color4(0,0,0,1);
}
