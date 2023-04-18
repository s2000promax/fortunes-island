import React, { useMemo, useState } from 'react';
import {
  AxesViewer,
  Color3, Color4,
  HemisphericLight,
  Mesh, MeshBuilder,
  Nullable,
  Scene,
  StandardMaterial, Texture,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import { createSuperEllipsoid } from './utils/utils';
import tableTexture from './assets/tableTexture.png';

interface TableProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const Table = (props: TableProps) => {
  const { name = 'Table', rotation, position } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new AxesViewer(scene, 2);
    }
    // const light = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(-30, 20, -50), scene);
    // light.intensity = 0.2;

    const tableMaterial = new StandardMaterial('tableMaterial', scene);
    tableMaterial.diffuseTexture = new Texture(tableTexture, scene);
    tableMaterial.backFaceCulling = false;

    const table = createSuperEllipsoid(48, 0.2, 0.2, 30,10,0.6, scene)  as Mesh;
    //table.scaling.x = 2;
    table.material = tableMaterial;

    const points: Array<Vector3> = [
      new Vector3(18,0.6,-8),
      new Vector3(-18,0.6,-8),
      new Vector3(-18,0.6,2),
      new Vector3(18,0.6,2),
      new Vector3(18,0.6,-8),
      new Vector3(18,0.6,-6),
      new Vector3(-18,0.6,-6),
      new Vector3(-18,0.6,-4),
      new Vector3(18,0.6,-4),
      new Vector3(18,0.6,-2),
      new Vector3(-18,0.6,-2),
      new Vector3(-18,0.6,0),
      new Vector3(18,0.6,0),

      new Vector3(18,0.6,-8),
      new Vector3(6,0.6,-8),
      new Vector3(6,0.6,2),
      new Vector3(-6,0.6,2),
      new Vector3(-6,0.6,-8),

      new Vector3(-9,0.6,-8),
      new Vector3(-9,0.6,-2),
      new Vector3(-12,0.6,-2),
      new Vector3(-12,0.6,-8),
      new Vector3(-15,0.6,-8),
      new Vector3(-15,0.6,-2),

      new Vector3(15,0.6,-2),
      new Vector3(15,0.6,-8),
      new Vector3(12,0.6,-8),
      new Vector3(12,0.6,-2),
      new Vector3(9,0.6,-2),
      new Vector3(9,0.6,-8),

      new Vector3(3,0.6,-8),
      new Vector3(3,0.6,-2),
      new Vector3(0,0.6,-2),
      new Vector3(0,0.6,-8),
      new Vector3(-3,0.6,-8),
      new Vector3(-3,0.6,-2),

      new Vector3(-22,0.6,-2),
      new Vector3(-22,0.6,-8),
      new Vector3(-18,0.6,-8),
      new Vector3(-18,0.6,-6),
      new Vector3(-22,0.6,-6),
      new Vector3(-22,0.6,-4),
      new Vector3(-18,0.6,-4),

      new Vector3(18,0.6,-4),
      new Vector3(18,0.6,-2),
      new Vector3(21,0.6,-2),
      new Vector3(22,0.6,-3.5),
      new Vector3(21,0.6,-5),
      new Vector3(18,0.6,-5),
      new Vector3(21,0.6,-5),
      new Vector3(22,0.6,-6.5),
      new Vector3(21,0.6,-8),
      new Vector3(18,0.6,-8),

      new Vector3(18,0.6,2),
      new Vector3(12,0.6,2),
      new Vector3(12,0.6,0),
      new Vector3(0,0.6,0),
      new Vector3(0,0.6,2),
      new Vector3(-12,0.6,2),
      new Vector3(-12,0.6,0),
    ];

    const colors: Array<Color4> = [];

    for (let i = 0; i < points.length; i += 1) {
      colors.push(new Color4(1, 1, 1, 1));
    }

    const lines = MeshBuilder.CreateLines('lines', {
      points: points,
      colors: colors,
    }, scene) as Mesh;
/*
    const resultMesh = Mesh.MergeMeshes([
      table,
      lines,
    ], true, true, undefined, false, true);
*/

    setMesh(lines);
}, [scene]);

  return (
    <>
      {mesh && (
        <mesh
          name={name}
          fromInstance={mesh}
          rotation={rotation}
          position={position}
          disposeInstanceOnUnmount
        />
      )}
    </>
  );
};

/*
var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  // Create a rotating camera
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, 12, BABYLON.Vector3.Zero(), scene);
  camera.setPosition(new BABYLON.Vector3(0, 0, 10));

  // Attach it to handle user inputs (keyboard, mouse, touch)
  camera.attachControl(canvas, false);

  // Add a light
  var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);


  // material
  var mat = new BABYLON.StandardMaterial("mat", scene);
  mat.diffuseColor = BABYLON.Color3.Green();
  mat.backFaceCulling = false;
  var mat2 = new BABYLON.StandardMaterial("mat2", scene);
  mat2.diffuseColor = BABYLON.Color3.Red();
  mat2.backFaceCulling = false;
  var mat3 = new BABYLON.StandardMaterial("mat3", scene);
  mat3.diffuseColor = BABYLON.Color3.Blue();
  mat3.backFaceCulling = false;
  var mat4 = new BABYLON.StandardMaterial("mat4", scene);
  mat4.diffuseColor = BABYLON.Color3.Blue();
  mat4.backFaceCulling = false;
  var mat5 = new BABYLON.StandardMaterial("mat5", scene);
  mat5.diffuseColor = BABYLON.Color3.Yellow();
  mat5.backFaceCulling = false;
  var superello = createSuperEllipsoid(48, 0.2, 0.2, 1,1,1, scene);
  //superello.scaling.x = 2;
  superello.material = mat2;

  var superello2 = createSuperEllipsoid(48, 0.2, 0.2, 1,1,1, scene);
  superello2.position.x += 2.5;
  superello2.material = mat;
  superello2.material.wireframe = true;


  var superello3 = createSuperEllipsoid(48, 1.8, 0.2, 1,1,1, scene);
  superello3.position.x -= 2.5;
  superello3.material = mat3;
  var superello3 = createSuperEllipsoid(48, 1.8, 0.2, 1,1,1, scene);
  superello3.position.z += 2.5;
  superello3.material = mat4;
  mat4.wireframe = true;
  var superello5 = createSuperEllipsoid(48, 0.2, 2.9, 1,1,1, scene);
  superello5.position.z -= 2.5;
  superello5.material = mat5;
  //mat5.wireframe = true;
  return scene;
}
 */
