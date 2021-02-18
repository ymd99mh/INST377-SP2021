document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird')
    const gameDispolay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2

    function startGame() {
        bird.bottom -= gravity
        bird.getElementsByClassName.bottom = birdBottom + 'px'
        bird.getElementsByClassName.left = birdLeft + 'px'
    }
    let timerID = setInterval(startGame, 20)

    function jump() {
        birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        console.log(birdBottom)
    }
    document.addEventListener('keyup', jump)
})