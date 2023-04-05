function withCoords1(coords: { x: number, y: number }) {
  return coords.x + coords.y;
  // seuls x et y sont accessible en lecture/écriture
}

// withCoords1({}); // erreur
withCoords1({ x: 1, y: 2 });
// withCoords1({ x: 1, y: 2, z: 3 }); // erreur



function withCoordsZOpt(coords: { x: number, y: number, z?: number } = { x: 1, y: 2, z: 3 }) {
  return coords.x + coords.y;
  // seuls x et y sont accessible en lecture/écriture
}

withCoordsZOpt(); // active la valeur par défault { x: 1, y: 2, z: 3 }
// withCoordsZOpt({}); // erreur
withCoordsZOpt({ x: 1, y: 2 });
withCoordsZOpt({ x: 1, y: 2, z: 3 }); // erreur

// comme any à éviter (type dynamique)
function withCoordsExtensible(coords: { x: number, [key: string]: number }) {
  // seuls x et y sont accessible en lecture/écriture
}

withCoordsExtensible({ x: 1, toto: 134, titi: 134 });
