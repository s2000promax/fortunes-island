import { Color3, Mesh, MeshBuilder, Nullable, Scene, StandardMaterial, Vector3 } from '@babylonjs/core';
import { getX, getY } from '@/shared/lib/utils/utils';
import * as earcut from 'earcut';

export function CreateMainConeElement(scene: Scene, name: string): Nullable<Mesh> {
  const myShape = [
    new Vector3(7.08, 0, 0),
    new Vector3(7.08, 0.7, 0),
    new Vector3(10.8, 2.02, 0),
    new Vector3(10.8, 0, 0),
  ];
  myShape.push(myShape[0]);  //close profile

  const myPath = [];

  for (let i = 0; i <= 6.8; i += 0.2) {
    myPath.push(new Vector3(getX(i, 0.1),0, getY(i, 0.1)));
  }

  const mainCone = MeshBuilder.ExtrudeShape(
    `${name}-extrudeShape`,
    {
      shape: myShape,
      path: myPath,
      sideOrientation: Mesh.DOUBLESIDE,
    }, scene) as Mesh;

  const mainConeMaterial = new StandardMaterial(`${name}-mainConeMaterial`, scene);
  mainConeMaterial.diffuseColor = new Color3(0.2, 0.2, 0.2);
  mainCone.material = mainConeMaterial;

  return mainCone;
}

export function CreateBarrierElement(scene: Scene, name: string): Nullable<Mesh> {
  const barrierShape = [
    new Vector3(0.2, 0, 0.3),
    new Vector3(0.05, 0, 0.6),
    new Vector3(-0.05, 0, 0.6),
    new Vector3(-0.2, 0, 0.3),
    new Vector3(-0.2, 0, -0.3),
    new Vector3(-0.05, 0, -0.6),
    new Vector3(0.05, 0, -0.6),
    new Vector3(0.2, 0, -0.3),
  ];

  const barrier = MeshBuilder.ExtrudePolygon(
    `${name}-extrudeBarrier`,
    {
      shape: barrierShape,
      depth: 0.5,
      sideOrientation: Mesh.DOUBLESIDE,
    }, scene, earcut);

  const barrierMaterial = new StandardMaterial(`${name}-barrierMaterial`, scene);
  barrierMaterial.diffuseColor = Color3.Red();
  barrier.material = barrierMaterial;

  return barrier;
}
