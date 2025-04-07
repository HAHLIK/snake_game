const onload = () => {
    setInterval(renderGame, 100)
    setInterval(moveSnake, 1000 / speed)

    const onKeyDown = (e) => {
        if (state.live == false) {
            if (e.keyCode == 32) {
                state.live = true
                generatePoint()
            }
            return
        }
        if (37 <= e.keyCode && e.keyCode <= 40) {
            changeDirSnake(mapKeyCode(e.keyCode))
        }
    }
    document.addEventListener("keydown", onKeyDown)
}
window.addEventListener("load", onload)