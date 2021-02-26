function rotateImage(a){
  let size = a.length
  for(let r = a.length-1; r >= 0; r--){
    for(let c = 0; c < size; c++){
      let num = a[r].shift();
      a[c].push(num)
    }
  }
  return a;
}
rotateImage(
  [[10, 9, 6, 3, 7],
  [6, 10, 2, 9, 7],
  [7, 6, 3, 8, 2],
  [8, 9, 7, 9, 9],
  [6, 8, 6, 8, 2]]
)

// Expected Output:
// [[6,8,7,6,10], 
//  [8,9,6,10,9], 
//  [6,7,3,2,6], 
//  [8,9,8,9,3], 
//  [2,9,2,7,7]]


































// function rotateImage(a) {
  
//   for( let row = a.length - 1; row >= 0; row-- ) {
//     for( let col = 0; col < a.length; col++ ) {
//       let elem = a[row].shift();
//       console.log('elem', elem)
//       a[col].push(elem);
//       console.log('matrix', a)
//     }
 
//   }
  
//   return a;
// }
// rotateImage(
//   [[10, 9, 6, 3, 7],
//   [6, 10, 2, 9, 7],
//   [7, 6, 3, 8, 2],
//   [8, 9, 7, 9, 9],
//   [6, 8, 6, 8, 2]]
// )

// [[6,8,7,6,10], 
//  [8,9,6,10,9], 
//  [6,7,3,2,6], 
//  [8,9,8,9,3], 
//  [2,9,2,7,7]]

// rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())