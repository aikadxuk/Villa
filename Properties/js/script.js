let buttons = document.querySelector('.buttons')
let properties = document.querySelectorAll('.properties section')

buttons.querySelectorAll('button').forEach(function (showHide) {
    showHide.addEventListener('click', function () {
        if (showHide.id == 'show') {
            properties.forEach(function (cardsShowAllHide) {
                cardsShowAllHide.classList.add('flex')
                cardsShowAllHide.classList.remove('hidden')
            })
        } else if (showHide.id == 'appartment') {
            properties.forEach((properties, index) => {
                if (index === 0 || index === 2 || index === 5 || index === 7 || index === 8) {
                    properties.classList.add('flex')
                    properties.classList.remove('hidden')
                }
            })
            properties.forEach((properties, index) => {
                if (index === 1 || index === 3 || index === 4 || index === 6 || index === 9) {
                    properties.classList.remove('flex')
                    properties.classList.add('hidden')
                }
            })
        } else if (showHide.id == 'villa') {
            properties.forEach((properties, index) => {
                if (index === 1 || index === 3 || index === 4 || index === 6) {
                    properties.classList.add('flex')
                    properties.classList.remove('hidden')
                }
            })
            properties.forEach((properties, index) => {
                if (index === 0 || index === 2 || index === 5 || index === 7 || index === 8 || index === 9) {
                    properties.classList.remove('flex')
                    properties.classList.add('hidden')
                }
            })
        } else if (showHide.id == 'penthouse') {
            properties.forEach((properties, index) => {
                if (index === 2 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8) {
                    properties.classList.add('flex')
                    properties.classList.remove('hidden')
                }
            })
            properties.forEach((properties, index) => {
                if (index === 0 || index === 1 || index === 3 || index === 9) {
                    properties.classList.remove('flex')
                    properties.classList.add('hidden')
                }
            })
        }
    })
})

let hamburguer = document.querySelector('.hamburguer-icon')
let nav = document.querySelector('.navigation')

hamburguer.addEventListener('click', openCloseMenu)

function openCloseMenu() {
    if (nav.classList.contains('hidden','sm:hidden', 'md:hidden')) {
        hamburguer.classList.replace('fa-bars', 'fa-xmark')
        nav.classList.remove('hidden', 'sm:hidden', 'md:hidden')
        nav.classList.add('block', 'sm:block', 'md:block')
    } else {
        hamburguer.classList.replace('fa-xmark', 'fa-bars')
        nav.classList.remove('block', 'sm:block', 'md:block')
        nav.classList.add('hidden', 'sm:hidden', 'md:hidden')
    }
}