import {
  Color3,
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial, Texture,
  Vector3,
  Vector4,
} from '@babylonjs/core';
import * as earcut from 'earcut';
import cellsNumberSprite from '../../../../../assets/cellsNumberSprite.png';
import { RouletteCells } from '@/entities/Roulette';

export function CreateCellBase(
  scene: Scene,
  name: string,
  cell: RouletteCells,
  // position: Vector3 = Vector3.Zero(),
  // rotation: Vector3 = Vector3.Zero(),
): Mesh {

  const cellBaseMaterial = new StandardMaterial(`${name}-material`);
  cellBaseMaterial.diffuseTexture = new Texture(cellsNumberSprite, scene);

  const rows = 3;
  const columns = 18;
  const r: number = cell.row;
  const c: number = cell.column;

  const faceUV = [
    new Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows),
    new Vector4(0, 0, 0, 0),
  ];

  const shapeBase = [
    new Vector3(0.42, 0, 0),
    new Vector3(0.585, 0, 2),
    new Vector3(-0.585, 0, 2),
    new Vector3(-0.42, 0, 0),
  ];

  const cellBase = MeshBuilder.ExtrudePolygon(`${name}-cellBasePolygon`, {
    shape: shapeBase,
    depth: 0.2,
    sideOrientation: Mesh.DOUBLESIDE,
    faceUV: faceUV,
  }, scene, earcut);

  cellBase.material = cellBaseMaterial;

  const shapeBorder = [
    new Vector3(0, 0, 2),
    new Vector3(0.7, 0, 2),
    new Vector3(0.7, 0, 1.8),
    new Vector3(0, 0, 0),
  ];

  const cellLeftBorder = MeshBuilder.ExtrudePolygon(`${name}-cellBorderLeftPolygon`, {
    shape: shapeBorder,
    depth: 0.05,
    sideOrientation: Mesh.DOUBLESIDE,
  }, scene, earcut);
  cellLeftBorder.rotation.z = 1.5;
  cellLeftBorder.rotation.y = 0.075;
  cellLeftBorder.position.x = 0.37;

  const cellRightBorder = MeshBuilder.ExtrudePolygon(`${name}-cellRightBorderPolygon`, {
    shape: shapeBorder,
    depth: 0.05,
    sideOrientation: Mesh.DOUBLESIDE,
  }, scene, earcut);
  cellRightBorder.rotation.z = 1.5;
  cellRightBorder.rotation.y = -0.075;
  cellRightBorder.position.x = -0.37 - 0.05;

  const shapeBack = [
    new Vector3(0, 0, 1.12),
    new Vector3(0.7, 0, 1.12),
    new Vector3(0.7, 0, 0),
    new Vector3(0, 0, 0),
  ];

  const cellBackBorder = MeshBuilder.ExtrudePolygon(`${name}-cellBackBorderPolygon`, {
    shape: shapeBack,
    depth: 0.05,
    sideOrientation: Mesh.DOUBLESIDE,
  }, scene, earcut);
  cellBackBorder.rotation.z = 1.6;
  cellBackBorder.rotation.y = 1.58;
  cellBackBorder.position.x = -0.585 + 0.05 + 0.025;
  cellBackBorder.position.z = 2;

  const cellBorderMaterial = new StandardMaterial(`${name}-cellBorderMaterial`, scene);
  cellBorderMaterial.diffuseColor = Color3.Yellow();

  const resultCellBorder = Mesh.MergeMeshes([cellLeftBorder, cellRightBorder, cellBackBorder]) as Mesh;
  resultCellBorder.material = cellBorderMaterial;

  const resultMesh = Mesh.MergeMeshes([
    cellBase,
    resultCellBorder,
  ],
    true,
    true,
    undefined,
    false,
    true,
  ) as Mesh;

  if (resultMesh) {
    resultMesh.visibility = 1;
    // resultMesh.position = position;
    // resultMesh.rotation = rotation;
  }

  return resultMesh;
}
