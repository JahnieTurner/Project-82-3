canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
mouseEvent = "";
lastposX = 0;
lastposY = 0;
color = "black";
width = 5
radius = 20;
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    color = document.getElementById("text_input_color").value
    width = document.getElementById("text_input_width").value
    radius = document.getElementById("text_input_radius").value
    mouseEvent = "mousedown"
}


canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
    currentposX = e.clientX - canvas.offsetLeft
    currentposY = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.arc(currentposX, currentposY, radius, 0, 2 * Math.PI)
        ctx.stroke()
    }
}

function cleararea() {
    ctx.clearRect(0, 0, 800, 600)
}