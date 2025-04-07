const newGame = () => {
    state.snake = {
        body: [
            {x: 6, y: 10, direction: DIRECTION.RIGHT},
            {x: 7, y: 10, direction: DIRECTION.RIGHT},
            {x: 8, y: 10, direction: DIRECTION.RIGHT},
        ]
        ,
        direction: DIRECTION.RIGHT,
        changeDirFlag: true
    }
        
    state.point = {x:12, y:12}
    state.score = 0,
    state.cellsField = []
    
    for (let y = 0; y < rows; y++) {
        state.cellsField.push([])
        for (let x = 0; x < columns; x++) {
            state.cellsField[y].push(true)
        }
    }
    state.cellsField[10][6] = false
    state.cellsField[10][7] = false
    state.cellsField[10][8] = false
}

let state = {
    live: true
}
newGame()