document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.grid');
  const squares = document.querySelectorAll('.square');
  const displayScore = document.querySelector('.score');
  const timeLeft = document.querySelector('#timeLeft');


  let hitPosition;
  let move = null;
  let score = 0;
  let currentTimeLeft = timeLeft.textContent

  // Move Mole
  function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole');
    })
    
    // Random position
    const randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
  }

  squares.forEach(id => {
    id.onclick = () => {
      if (id.id == hitPosition) {
        score ++
        displayScore.innerHTML = score;
      } 
    }
  })

  move = setInterval(randomSquare, 1000)

  // Keep track of score

  // Time reducing
  function timeTicking() {
    currentTimeLeft --;
    timeLeft.innerHTML = currentTimeLeft;

    if (currentTimeLeft === 0) {
      alert('Game over!');
      clearInterval(move);
      clearInterval(timerId)
    }
  }

  let timerId = setInterval(timeTicking, 1000)
  
})