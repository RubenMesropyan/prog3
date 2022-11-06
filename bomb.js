// class Bomb {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.directions = []
//         this.energy = 1
//         matrix[y][x] = 6
//         bomb.push(this);


//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }

//         }
//         return found;

//     }


//     move() {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);

//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];

//             matrix[newY][newX] = 6
//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;
//         }

//         this.energy++

//         if (this.energy >= 8) {
//             this.explode()
//             this.energy = 0
//         }



//     } 


//     explode() {

//         this.getNewCoordinates()

//        for (const i in this.directions) {
           
//         var newX = this.directions[i][0];
//          var newY = this.directions[i][1];



            
//             if (newX >= 0 && newX < matrix[0].length && newY >= 0 && newY < matrix.length) {
//                 let current = matrix[newY][newX]

//                 if (current == 1) {
//                     for (const i in grassArr) {
//                        grassArr.splice(i, 1)
//                     }
//                 }

//                 matrix[newY][newX] = 0;

//             }
            
         
          


            


//         }

//        }


// }