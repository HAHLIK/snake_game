const $canvas = document.getElementById("canvas")
const context = $canvas.getContext("2d")

$canvas.width = width
$canvas.height = height

const field = new Image()
field.src = "/assets/sprites/fieldx32.png"
const point = new Image()
point.src = "/assets/sprites/point.png"
const gameover = new Image()
gameover.src = "/assets/sprites/game_over.png"

const renderGame = () => {
    context.drawImage(field, 0, 0)

    let x = state.point.x * cellSize
    let y = state.point.y * cellSize
    context.drawImage(point, x, y)

    let body = state.snake.body
    let len = body.length

    context.fillStyle = COLORS.HEAD
    let head = body[len-1]
    context.fillRect(head.x * cellSize + 3, head.y * cellSize + 3, cellSize - 6, cellSize - 6)
        
    context.fillStyle = COLORS.TALE
    for (let tale in body.slice(0, len-1)) {
        let x = body[tale].x * cellSize
        let y = body[tale].y * cellSize

        switch (body[tale].direction) {
            case DIRECTION.UP:
                context.fillRect(x + 3, y - 3, cellSize - 6, cellSize)
                break;
            case DIRECTION.DOWN:
                context.fillRect(x + 3, y + 3, cellSize - 6, cellSize)
                break;
                
            case DIRECTION.RIGHT:
                context.fillRect(x + 3, y + 3, cellSize, cellSize - 6)
                break;
                
            case DIRECTION.LEFT:
                context.fillRect(x - 3, y + 3, cellSize, cellSize - 6)
                break;

            default:
                break;
        }
    }
    if (!state.live) {
        context.drawImage(gameover, 120, 135)
    }
}