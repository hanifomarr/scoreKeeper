const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScoreSelect')

let p1Score = 0;
let p2Score = 0;
let winningScore = null;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver && winningScore != null){
        p1Score += 1;
        if(p1Score === winningScore){
            p1Display.classList.add('win')
            p2Display.classList.add('lose')
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
})

p2Button.addEventListener('click', function(){
    if(!isGameOver && winningScore != null){
        p2Score += 1;
        if(p2Score === winningScore){
            p2Display.classList.add('win')
            p1Display.classList.add('lose')
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    isGameOver = false;
    p2Display.classList.remove('win', 'lose')
    p1Display.classList.remove('win', 'lose')
}