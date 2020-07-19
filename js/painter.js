const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

context.strokeStyle = '#fff'
context.lineWidth = 10
context.lineCap = 'round'

let shouldPaint = false

// Desktop
document.addEventListener('mousedown', function(event) {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener('mouseup', function(event) {
  shouldPaint = false
})

document.addEventListener('mousemove', function(event) {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
  }
})

// Mobile
document.addEventListener('touchstart', function(event) {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener('touchend', function(event) {
  shouldPaint = false
})

document.addEventListener('touchmove', function(event) {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
  }
})

// Change BG color
const changer = document.querySelector('div.color-changer input')
const bodyTag = document.querySelector('body')

changer.addEventListener('input', function() {
  bodyTag.style.backgroundColor = changer.value

  const color = chroma(changer.value)

  if (color.luminance() > 0.3) {
    bodyTag.classList.add('dark')
  } else {
    bodyTag.classList.remove('dark')
  }
})

// Change pencil color
const changerPencil = document.querySelector('div.color-changer-pencil input')

changerPencil.addEventListener('input', function() {
  context.strokeStyle = changerPencil.value
})

// Erase stuff
// document.getElementById('erase').addEventListener('click', function() {
//   context.strokeStyle = changer.value
// })

// Clearing the canvas
document.getElementById('clear').addEventListener('click', function() {
  context.clearRect(0, 0, canvas.width, canvas.height), false
})

// Download canvas drawing as a jpeg
// 1. when I click download, download my canvas as a jpg
//   const downloadBtn = document.querySelector('button.download')

//   downloadBtn.addEventListener('click', function () {
// 		const image = canvas.toDataURL("image/jpg")
//     console.log('my button works')
//   })

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
