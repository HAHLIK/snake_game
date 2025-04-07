const width = 640
const height = 640
const cellSize = 32

const columns = width / cellSize
const rows = height / cellSize

const speed = 5
const winScore = columns * rows - 3

const COLORS = {
    HEAD: "rgb(193, 13, 61)",
    TALE: "rgba(162, 42, 74, 0.8)"
}