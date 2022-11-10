const board = document.querySelector('#board')
const colors = ['#E0FFFF', '#E6E6FA', '#EE82EE', '#9370DB', '#9370DB', '#9370DB', '#800080', '	#4B0082', '#483D8B', '#7B68EE', '#191970', '#008080']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => 
    setColor(square))
    //square.addEventListener('mouseover', setColor) - способ 2
    
    square.addEventListener('mouseleave', () => 
    removeColor(square))
    //square.addEventListener('mouseleave', removeColor) - способ 2
    
    board.append(square)
}

function setColor(element) {
    const color =getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

/*function setColor(event) {     - способ 2
    const element = event.target
    const color =getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
*/

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

/*function removeColor(event) {       - способ 2
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
*/

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   //return colors[Math.floor(Math.random() * colors.length)] //можно писать в одну строчку 
   return colors[index]
}