import { Mesh, Scene, Vector3, VertexData } from '@babylonjs/core';

function sampleSuperEllipsoid(
  phi: number,
  beta: number,
  n1: number,
  n2: number,
  scaleX: number,
  scaleY: number,
  scaleZ: number,
  ) {
  const cosPhi = Math.cos(phi);
  const cosBeta = Math.cos(beta);
  const sinPhi = Math.sin(phi);
  const sinBeta = Math.sin(beta);
  const vertex = new Vector3();

  vertex.x =
    scaleX * Math.sign(cosPhi)
    * Math.pow(Math.abs(cosPhi), n1)
    * Math.sign(cosBeta)
    * Math.pow(Math.abs(cosBeta), n2);

  vertex.z =
    scaleY * Math.sign(cosPhi)
    * Math.pow(Math.abs(cosPhi), n1)
    * Math.sign(sinBeta)
    * Math.pow(Math.abs(sinBeta), n2);

  vertex.y =
    scaleZ * Math.sign(sinPhi)
    * Math.pow(Math.abs(sinPhi), n1);

  return vertex;
}

function calculateNormal(
  phi: number,
  beta: number,
  n1: number,
  n2: number,
  scaleX: number,
  scaleY: number,
  scaleZ: number,
) {
  const normal = new Vector3();
  const cosPhi = Math.cos(phi);
  const cosBeta = Math.cos(beta);
  const sinPhi = Math.sin(phi);
  const sinBeta = Math.sin(beta);

  normal.x =
    Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi),
      2 - n1) * Math.sign(cosBeta) * Math.pow(Math.abs(cosBeta),
      2 - n2) / scaleX;

  normal.z = Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi),
    2 - n1) * Math.sign(sinBeta) * Math.pow(Math.abs(sinBeta),
    2 - n2) / scaleY;

  normal.y = Math.sign(sinPhi) * Math.pow(Math.abs(sinPhi),
    2 - n1) / scaleZ;

  //normal=normal.normalize();
  normal.normalize();
  return normal;
}

export function createSuperEllipsoid(
  samples: number,
  n1: number,
  n2: number,
  scalex: number,
  scaley: number,
  scalez: number,
  scene: Scene) {
  const superello = new Mesh('superello', scene);
  let phi = 0.0, phi2 = 0.0, beta = 0.0;
  const dB = Math.PI * 2.0 / samples;
  const dP = Math.PI * 2.0 / samples;

  phi = -Math.PI / 2;

  const vertices = [];
  const normals = [];

  for (let j = 0; j <= samples / 2; j++) {
    beta = -Math.PI;
    for (let i = 0; i <= samples; i++) {
      //Triangle #1
      vertices.push(sampleSuperEllipsoid(phi, beta, n1, n2, scalex, scaley, scalez));
      normals.push(calculateNormal(phi, beta, n1, n2, scalex, scaley, scalez));
      vertices.push(sampleSuperEllipsoid(phi + dP, beta, n1, n2, scalex, scaley, scalez));
      normals.push(calculateNormal(phi + dP, beta, n1, n2, scalex, scaley, scalez));
      vertices.push(sampleSuperEllipsoid(phi + dP, beta + dB, n1, n2, scalex, scaley, scalez));
      normals.push(calculateNormal(phi + dP, beta + dB, n1, n2, scalex, scaley, scalez));
      //Triangle #2
      vertices.push(sampleSuperEllipsoid(phi, beta, n1, n2, scalex, scaley, scalez));
      normals.push(calculateNormal(phi, beta, n1, n2, scalex, scaley, scalez));
      vertices.push(sampleSuperEllipsoid(phi + dP, beta + dB, n1, n2, scalex, scaley, scalez));
      normals.push(calculateNormal(phi + dP, beta + dB, n1, n2, scalex, scaley, scalez));
      vertices.push(sampleSuperEllipsoid(phi, beta + dB, n1, n2, scalex, scaley, scalez));
      normals.push(calculateNormal(phi, beta + dB, n1, n2, scalex, scaley, scalez));
      beta += dB;
    }
    phi += dP;
  }
  const shapeReturned = new VertexData();
  shapeReturned.positions = [];
  shapeReturned.normals = [];
  shapeReturned.indices = [];
  shapeReturned.uvs = [];
  let indice = 0;

  for (let i = 0; i < vertices.length; i++) {
    shapeReturned.indices.push(indice++);
    shapeReturned.positions.push(vertices[i].x);
    shapeReturned.positions.push(vertices[i].y);
    shapeReturned.positions.push(vertices[i].z);
    shapeReturned.normals.push(normals[i].x);
    shapeReturned.normals.push(normals[i].y);
    shapeReturned.normals.push(normals[i].z);

  }
  shapeReturned.applyToMesh(superello);

  return superello;
}





