let userScore = 0;
let compScore = 0;
let msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
});

const playGame = (userChoice)=>{
    
    //gen comp choice
    let compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if (userChoice === "paper") {
            if (compChoice === "rock") {
                userWin = true;     
            } else {
                userWin = false;
            }
        }
        else{
            if (compChoice === "rock") {
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

const drawGame = ()=>{
    msg.innerText = "It is a Draw. Play again"
    msg.style.backgroundColor = "#4A4A48"
}
const genCompChoice = ()=>{
    const choices = ["rock","paper","scissors"]
    let randIdx = Math.floor(Math.random()*3);
    return choices[randIdx];
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if (userWin) {
        userScore++;
        document.querySelector("#user_score").innerText = userScore;
        msg.innerText = `You win, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        document.querySelector("#comp_score").innerText = compScore;
        msg.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}