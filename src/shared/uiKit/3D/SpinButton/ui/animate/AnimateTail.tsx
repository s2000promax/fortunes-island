import React, { useMemo, useRef, useState } from 'react';
import * as BABYLON from '@babylonjs/core';
import * as earcut from 'earcut';
import { useBeforeRender, useScene } from 'react-babylonjs';
import { Mesh, Nullable } from '@babylonjs/core';

interface AnimateTailProps {
  name?: string;
  rotation?: BABYLON.Vector3;
  position?: BABYLON.Vector3;
}

export const AnimateTail = (props: AnimateTailProps) => {
  const {
    name = 'SpinButton',
    rotation,
    position,
  } = props;

  const [mesh, setMesh] = useState<BABYLON.Nullable<BABYLON.Mesh>>(null);
  const spinButtonRef = useRef<Nullable<Mesh>>(null);
  const scene = useScene() as BABYLON.Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new BABYLON.AxesViewer(scene, 2);
    }
    const light1 = new BABYLON.HemisphericLight(`${name}-hemiLight-1`, new BABYLON.Vector3(-10, 10, -5), scene);

    const spinButtonMaterial = new BABYLON.StandardMaterial(`${name}-material`);

    let alpha = Math.PI;
// Create a mesh for the trail to follow.
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {}, scene);
    // cube.scaling.y = 2;
    sphere.bakeCurrentTransformIntoVertices();
    sphere.position.x = Math.sin(alpha) * 10;
    sphere.position.z = Math.cos(alpha) * 10;
    sphere.computeWorldMatrix(true);

    const trail = new BABYLON.TrailMesh('new', sphere, scene, 0.5, 60, true);

    const sourceMat = new BABYLON.StandardMaterial('sourceMat', scene);
    sourceMat.emissiveColor = sourceMat.diffuseColor = BABYLON.Color3.Red();
    sourceMat.specularColor = BABYLON.Color3.Black();

    trail.material = sourceMat;

    /*
    const observer = scene.onBeforeRenderObservable.add(animate);
    function animate() {
      alpha += Math.PI / 120;
      cube.position.x = Math.sin(alpha) * 10;
      cube.position.z = Math.cos(alpha) * 10;
      cube.rotation.x = (Math.PI * alpha) / 2;
      cube.rotation.y = alpha;
    }

     */

    /*
    sphere.actionManager = new BABYLON.ActionManager(scene);

    const hl = new BABYLON.HighlightLayer('hl1', scene, {
      isStroke: true,
      // blurHorizontalSize: 4,
      // blurVerticalSize: 2,
    });

    //ON MOUSE ENTER
    cube.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
        function (ev) {
          scene.hoverCursor = 'pointer';
          hl.addMesh(cube, BABYLON.Color3.White());
        }));

    //ON MOUSE EXIT
    cube.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
        function (ev) {
          hl.removeMesh(cube);
        }));

    // ON CLICK
    cube.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
        function (ev) {
          console.log('click', ev);
        },
      ),
    );
     */

    setMesh(sphere);
  }, [name, scene]);

  let alpha = Math.PI;
  useBeforeRender((scene) => {
    if (spinButtonRef.current) {
      alpha += Math.PI / 120;
      spinButtonRef.current.position.x = Math.sin(alpha) * 10;
      spinButtonRef.current.position.z = Math.cos(alpha) * 10;
      spinButtonRef.current.rotation.x = (Math.PI * alpha) / 2;
      spinButtonRef.current.rotation.y = alpha;
    }
  });

  return (
    <>
      {mesh && (
        <mesh
          name={name}
          fromInstance={mesh}
          // ref={spinButtonRef}
          rotation={rotation}
          position={position}
          disposeInstanceOnUnmount
        />
      )}
    </>
  );
};
