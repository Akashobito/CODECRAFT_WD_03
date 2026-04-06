const array = [
  ["x", "o", ""],
  ["", "x", ""],
  ["o", "", "x"],
];

function checkWin() {
  let horizontal = [];
  let vertical = [];
  let xway = [];
  for (let a = 0; a < 3; a++) {
    for (let i = 0; i <= 0; i++) {
      for (let j = 1; j <= 1; j++) {
        for (let k = 2; k <= 2; k++) {
          horizontal[a] = array[a][i] + array[a][j] + array[a][k];
        }
      }
    }
  }

  for (let a = 0; a < 3; a++) {
    for (let i = 0; i <= 0; i++) {
      for (let j = 1; j <= 1; j++) {
        for (let k = 2; k <= 2; k++) {
          vertical[a] = array[i][a] + array[j][a] + array[k][a];
        }
      }
    }
  }

    for(let i = 0; i <=0 ; i++){
      for(let j = 1; j <=1; j++ ){
        for(let k = 2; k <=2; k++){
          xway[i] = array[i][i]+ array[j][j]+ array[k][k]
          xway[j] = array[i][k] + array[j][j] + array[k][i]
        }
      }
    }


  function findWin() {
    for (let i = 0; i < 3; i++) {
      switch (horizontal[i]) {
        case "xxx": {
          return console.log("x win");
        }
        case "ooo": {
          return console.log("o win");
        }
      }
      switch (vertical[i]) {
        case "xxx": {
          return console.log("x win");
        }
        case "ooo": {
          return console.log("o win");
        }
      }

      switch(xway[i]){
        case "xxx": {
          return console.log("x win");
        }
        case "ooo": {
          return console.log("o win");
        }
      }
    }
    return console.log("draw");
  }
  findWin();
}

checkWin();
