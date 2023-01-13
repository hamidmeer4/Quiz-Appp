const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')

let highScores = JSON.parse(localStorage.getItem("highScores"));
highScores=[]

const MAX_HIGH_SCORES = 1;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup" , () => {
    saveScoreBtn.disabled = !username.value;

});


saveHighScore = e => { 
    console.log ("clicked The Save Btn")
    e.preventDefault();

    const score = {
        score :finalScore.innerHTML ,
        name : username.value,
    
    }
    
    highScores.push(score)
    console.log(highScores)

    // highScores.sort((a, b) => b.score - a.score)
    // highScores.splice(5)
    localStorage.setItem("highScores",JSON.stringify(highScores))
    window.location.assign('/')
};