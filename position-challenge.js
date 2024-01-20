const finalPosition = function (moves) {
  let position = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      position[1] += 1;
    }
    if (move === "east") {
      position[0] += 1;
    }
    if (move === "south") {
      position[1] -= 1;
    }
    if (move === "west") {
      position[0] -= 1;
    }
  }
  return position;
};

console.log(finalPosition(moves));

