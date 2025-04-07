const DIRECTION = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
}

function mapKeyCode(keyCode) {
    const direction = {
        37: DIRECTION.LEFT,
        38: DIRECTION.UP,
        39: DIRECTION.RIGHT,
        40: DIRECTION.DOWN,
    }
    return direction[keyCode]
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}