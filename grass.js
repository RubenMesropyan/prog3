class Grass extends LivingCreature {


    mul() {
        this.multiply++;
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);


        if (newCell && this.multiply >= 8) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = this.index

            let newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }

    }
}