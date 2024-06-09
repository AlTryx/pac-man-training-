document.addEventListener('DOMContentLoaded', () => {

const scoreDisplay = document.getElementById("score")
const width = 28
let score = 0
const grid = document.querySelector('.grid')

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]


// 0 - pac - dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
//4 - empty


const squares = []

// create your board
function createBoard() {
    for (let i = 0; i< layout.length; i++) {
        const square = document.createElement('div')
        square.id = i  // to see what index the i is in
        grid.appendChild(square)
        squares.push(square)

        //add layout to the board
        if(layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        }
        if(layout[i] === 1) {
            squares[i].classList.add('wall')
        }
        if(layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        }
        if(layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
        if(layout[i] === 4) {
            squares[i].classList.add('empty')
        }

    }
}
createBoard()


// create the characters

// draw pac-man

let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pac-man')

// move pacman

function movePacman(e) {

squares[pacmanCurrentIndex].classList.remove('pac-man')

switch (e.key) {

    case 'ArrowLeft':
        if(
            pacmanCurrentIndex % width !==0 && 
            !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
        ) {
            (pacmanCurrentIndex-=1)    
        }
        if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
        }
         break

    case 'ArrowRight' :
        if(
            pacmanCurrentIndex % width < width - 1 && 
            !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
        ) {
            (pacmanCurrentIndex+=1)
        }
        if(
            squares[pacmanCurrentIndex +1] === squares[392] 
        ) {
            pacmanCurrentIndex = 364
        }
        break

    case 'ArrowUp' :
        if(pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentInde - width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
        ) {
            (pacmanCurrentIndex-= width)
        }
        break

    case 'ArrowDown' :
        if(pacmanCurrentIndex + width < width * width &&
            squares[pacmanCurrentIndex + width].classList.contains('wall') &&
            squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
        ) {
            (pacmanCurrentIndex+= width)
        }
        
        break
    
}
squares[pacmanCurrentIndex].classList.add('pac-man')
pacDotEaten()
// powerPelletEaten()
// checkForGameOver()
// checkForWin()
}

document.addEventListener('keyup',movePacman)

//what happens when you eat a pac-dot
function pacDotEaten() {
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
}

//what happens when you eat a power-pellet
function powerPelletEaten() {
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score+= 10
        scoreDisplay.innerHTML = scoresquares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
}

//create ghosts using Constructor
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}


//all my ghosts
ghosts = [
    new Ghost ('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky',351, 300),
    new Ghost('clyde',379, 500)
]

// draw my ghosts onto the grid
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classlist.add(ghost.className)
    squares[ghost.currentIndex].classlist.add('ghost')
})

// move ghosts randomly
ghosts.forEach(ghost => moveGhost())

function moveGhost(ghost) {
    const directions = [-1, 1, width, -width]
    const direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInnterval(function() {
        //if next square your ghost is going to go to doesn't have a ghost and wall
        if(
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost')
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        
    }, ghost.speed)
}



})