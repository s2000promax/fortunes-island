import { Color3, Mesh, MeshBuilder, Nullable, Scene, StandardMaterial, Vector3 } from '@babylonjs/core';
import { getX, getY } from 'shared/lib/utils/utils';

function CreateDecorateElement1(scene: Scene, name: string): Nullable<Mesh> {
  const cyl7 = MeshBuilder.CreateCylinder(`${name}-cyl7`, {
    diameterBottom: 0.3,
    diameterTop: 0.6,
    height: 0.5,
  }, scene);
  const cyl8 = MeshBuilder.CreateCylinder(`${name}-cyl8`, {
    diameterBottom: 0.6,
    diameterTop: 0.15,
    height: 1.5,
  }, scene);
  cyl8.position.y = 1;
  const ball9 = MeshBuilder.CreateSphere(`${name}-ball9`, { diameter: 0.3 }, scene);
  ball9.position.y = 1.85;

  return Mesh.MergeMeshes([cyl7, cyl8, ball9]);
}

export function CreateCentralElement(scene: Scene, name: string): Nullable<Mesh> {
  const cyl1 = MeshBuilder.CreateCylinder(`${name}-cyl1`, { diameter: 2.5, height: 0.7 }, scene);
  const cyl2 = MeshBuilder.CreateCylinder(`${name}-cyl2`, { diameter: 1, height: 1.5 }, scene);
  cyl2.position.y = 0.7;
  const cyl3 = MeshBuilder.CreateCylinder(`${name}-cyl3`, {
    diameterBottom: 1.7,
    diameterTop: 1,
    height: 2,
  }, scene);
  cyl3.position.y = 2.2;
  const cyl4 = MeshBuilder.CreateCylinder(`${name}-cyl4`, { diameter: 2, height: 0.5 }, scene);
  cyl4.position.y = 3.2;
  const cyl5 = MeshBuilder.CreateCylinder(`${name}-cyl5`, { diameter: 1, height: 0.5 }, scene);
  cyl5.position.y = 3.7;
  const ball6 = MeshBuilder.CreateSphere(`${name}-ball6`, { diameter: 1 }, scene);
  ball6.position.y = 3.9;

  const decorateElement1 = CreateDecorateElement1(scene, 'decorateElement1');
  if (decorateElement1) {
    decorateElement1.position.x = 1.2;
    decorateElement1.position.y = 3.2;
    decorateElement1.rotation.z = -1.5;
  }
  const decorateElement2 = CreateDecorateElement1(scene, 'decorateElement2');
  if (decorateElement2) {
    decorateElement2.position.x = -1.2;
    decorateElement2.position.y = 3.2;
    decorateElement2.rotation.z = 1.5;
  }
  const decorateElement3 = CreateDecorateElement1(scene, 'decorateElement3');
  if (decorateElement3) {
    decorateElement3.position.z = 1.2;
    decorateElement3.position.y = 3.2;
    decorateElement3.rotation.x = 1.5;
  }
  const decorateElement4 = CreateDecorateElement1(scene, 'decorateElement4');
  if (decorateElement4) {
    decorateElement4.position.z = -1.2;
    decorateElement4.position.y = 3.2;
    decorateElement4.rotation.x = -1.5;
  }

  const resultMesh = Mesh.MergeMeshes([
    cyl1, cyl2, cyl3, cyl4, cyl5, ball6,
    decorateElement1 as Mesh,
    decorateElement2 as Mesh,
    decorateElement3 as Mesh,
    decorateElement4 as Mesh,
  ]);

  const resultMaterial = new StandardMaterial('resultMesh', scene);
  resultMaterial.diffuseColor = new Color3(0.9, 1, 0);

  if (resultMesh) {
    resultMesh.material = resultMaterial;
  }

  return resultMesh;
}

export function CreateCentralConeElement(scene: Scene, name: string): Nullable<Mesh> {
  const centralCone = MeshBuilder.CreateCylinder(`${name}-con1`, {
    diameterTop: 2.5,
    diameterBottom: 10,
    height: 1,
  }, scene) as Mesh;

  const centralConeMaterial = new StandardMaterial('centralConeMaterial', scene);
  centralConeMaterial.diffuseColor = new Color3(0, 0, 0);
  centralCone.material = centralConeMaterial;

  return centralCone;
}

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
