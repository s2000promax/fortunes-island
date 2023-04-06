import React, { useMemo, useState } from 'react';
import {
  AxesViewer,
  Mesh,
  MeshBuilder, Nullable,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';

interface TempConeCentralProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const TempConeCentral = (props: TempConeCentralProps) => {
  const {
    name = 'TempConeCentral',
    rotation,
    position,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new AxesViewer(scene, 2);
    }
    // const light1 = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(-10, 10, -5), scene);
    // const light2 = new HemisphericLight(`${name}-hemiLight-2`, new Vector3(-10, -10, -5), scene);

    const myShape = [
      new Vector3(7.08, 0, 0),
      new Vector3(7.08, 0.7, 0),
      new Vector3(10.8, 2.02, 0),
      new Vector3(10.8, 0, 0),
    ];
    myShape.push(myShape[0]);  //close profile

    const r = 7.08;
    function getX(angel: number = 1) {
      return r * Math.cos(angel);
    }

    function getY(angel: number = 1) {
      return r * Math.sin(angel);
    }

    const myPath = [];

    for (let i = 0; i < 6.5; i += 0.1) {
      myPath.push(new Vector3(getX(i),0, getY(i)));
    }

    const extrusion = MeshBuilder.ExtrudeShape(
      'star',
      {
        shape: myShape,
        path: myPath,
        sideOrientation: Mesh.DOUBLESIDE,
      }, scene) as Mesh;



    setMesh(extrusion);
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
