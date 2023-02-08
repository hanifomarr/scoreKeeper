const p1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score: 0,
}

const p2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score: 0,
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScoreSelect');

let winningScore = null;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver && winningScore != null){
        player.score += 1;
        if(player.score === winningScore){
            player.display.classList.add('win')
            opponent.display.classList.add('lose')
            isGameOver = true;
            player.button.classList.add('cursor-not-allowed')
            opponent.button.classList.add('cursor-not-allowed')
        }
        player.display.textContent = player.score;
    } 
}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1)
})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    isGameOver = false;
    for(p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('win', 'lose')
        p.button.classList.remove('cursor-not-allowed')
    }
}