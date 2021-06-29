'use strict'

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('panel--active')
    })
})

function removeActiveClasses() {
    const panel = document.querySelector('.panel--active')
    panel.classList.remove('panel--active')
}
