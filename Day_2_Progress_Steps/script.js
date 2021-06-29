const progressElement = document.querySelector('#progress')
const btnNextElement = document.querySelector('#next')
const btnPrevElement = document.querySelector('#prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

btnNextElement.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

btnPrevElement.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progressElement.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (currentActive === 1) {
        btnPrevElement.disabled = true
    } else if (currentActive === circles.length) {
        btnNextElement.disabled = true
    } else {
        btnNextElement.disabled = false
        btnPrevElement.disabled = false
    }
}
