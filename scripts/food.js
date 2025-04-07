const generatePoint = () => {
    emptyCells = []
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            if (state.cellsField[y][x] == true) {
                emptyCells.push({x: x, y: y})
            }
        }
    }
    let index = randomInt(emptyCells.length)
    state.point = emptyCells[index]
}