let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScr=document.querySelector("#user-score");
const compScr=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoiceId=choice.getAttribute("id");
        console.log("choice was clicked",userChoiceId);
        playGame(userChoiceId);
    })
})


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);   //floor removes decimal value
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp choice=",compChoice);

    if(userChoice===compChoice){
        console.log("Game was draw.")
        msg.innerText="Draw"
        msg.style.backgroundColor="purple";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //compChoice=scissors,paper
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //compChoice=rock,scissors
            userWin=compChoice==="scissors"? false:true;
        }else{
            //compChoice=rock,paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        console.log("You Win!")
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        userScore=++userScore;
        userScr.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("Computer Win!")
        msg.innerText=`You Loose! Comp ${compChoice} beats yours ${userChoice}`;
        compScore=++compScore;
        compScr.innerText=compScore;
        msg.style.backgroundColor="red";

    }
}