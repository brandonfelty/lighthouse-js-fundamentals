let finalPosition = function (moves) {
  let position = [];
  let xPosition = 0;
  let yPosition = 0;
  for (let move of moves) {
    if (move === 'north') {
      yPosition++;
    } else if(move === "west") {
      xPosition--;
    } else if (move === "south") {
      yPosition++;
    } else {
      xPosition++;
    }    
  } 
  position.push(xPosition);
  position.push(yPosition);
  return(position);
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));