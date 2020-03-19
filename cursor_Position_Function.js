function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
}

const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})