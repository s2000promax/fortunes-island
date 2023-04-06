export function getX(angel: number = 1, radius: number = 1) {
  return radius * Math.cos(angel);
}

export function getY(angel: number = 1, radius: number = 1) {
  return radius * Math.sin(angel);
}
