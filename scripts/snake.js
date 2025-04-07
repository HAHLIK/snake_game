const moveSnake = () => {
    let snake = state.snake

    let head = snake.body[snake.body.length - 1]
    let newHead = {x: 0, y: 0, direction: DIRECTION.UP}

    switch (snake.direction) {
        case DIRECTION.UP:
            newHead.x = head.x
            newHead.y =  (head.y + (rows - 1)) % rows
            break;
        
        case DIRECTION.RIGHT:
            newHead.x = (head.x + 1) % columns
            newHead.y = head.y
            break;

        case DIRECTION.DOWN:
            newHead.x = head.x
            newHead.y = (head.y + 1) % rows
            break;
        
        case DIRECTION.LEFT:
            newHead.x = (head.x + (columns - 1)) % columns
            newHead.y = head.y
            break;

        default:
            break;
    }
    
    if (head.x == state.point.x && head.y == state.point.y) {
        eatPoint()
    }
    else {
        let emptyCell = snake.body.shift()
        state.cellsField[emptyCell.y][emptyCell.x] = true
    }

    if (state.cellsField[newHead.y][newHead.x] == true) {
        state.cellsField[newHead.y][newHead.x] = false
        newHead.direction = snake.direction
        snake.body.push(newHead)
    }
    else {
        gameOver()
        return
    }

    state.snake.changeDirFlag = true
}

const changeDirSnake = (direction) => {
    if (!state.snake.changeDirFlag) return;
    if ((direction + state.snake.direction) % 2 == 0) return;

    state.snake.direction = direction
    body = state.snake.body
    body[body.length - 1].direction = direction

    state.snake.changeDirFlag = false
}

const eatPoint = () => {
    generatePoint()
    state.score++
}

const gameOver = () => {
    state.live = false
    newGame()
    state.point = {}
}