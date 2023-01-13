const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScoresList.innerHTML = highScores.map(score => { 
    return `<li class = "high-score"> name : ${score.name} </li>
    <li class = "high-score"> Marks : ${score.score}</li>
    <li class = "high-score"> Percentage : ${(score.score/100)*100}%</li>`
})
.join("")