var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var mouseEvent = "empty"
var lastPositionX,lastPositionY
color = "black"
widthline = 1

canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e) {
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e) {
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
positionMouseX = e.clientX - canvas.offsetLeft
positionMouseY = e.clientY - canvas.offsetTop
if (mouseEvent == "mousedown") {
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = widthline
ctx.moveTo(lastPositionX, lastPositionY)
ctx.lineTo(positionMouseX, positionMouseY)
ctx.stroke()
}
lastPositionX = positionMouseX
lastPositionY = positionMouseY
}