let n = parseInt(prompt("Введите количество строк:"));
let m = parseInt(prompt("Введите количество столбцов:"));
let board = ""; 

for (let i = 0; i < n; i++) { 
  for (let j = 0; j < m; j++) { 
    
    if ((j + i) % 2 === 0) {
      board += "*";
    } else {
      board += "#";
    }
  }
  board += "\n"; 
  alert(board);
}
