console.log("Website is working");
let user_score=0;
let comp_score=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const generate_comp_choice=() =>{
   const options=["rock","paper","scissor"];
   const random_index= Math.floor(Math.random()*3);
   return options[random_index];
};

const drawGame = () => {
msg.innerText="It's a draw! Play again";
};

const showWinner = (userWin,user_choice,comp_choice) => {

    if(userWin)
    {   
        user_score++;
        userScorePara.innerText = user_score;
        console.log("you win!");
        msg.innerText=`You won! Your choice= ${user_choice} beats Computer's choice= ${comp_choice}`;
    }
    else
    {   
        comp_score++;
        compScorePara.innerText = comp_score;
        console.log("you lose!");
        msg.innerText=`You lose! Your choice= ${user_choice} losed by Computer's choice= ${comp_choice}`;
    }
};
const playGame=(user_choice) => {
    console.log("user choice = ",user_choice);
   const comp_choice=generate_comp_choice();
   console.log("computer choice = ",comp_choice);
   
   if(user_choice===comp_choice)
   {
      drawGame();
   }
   else{
    let userWin=true;
    if(user_choice==="paper"){
        userWin = comp_choice ==="rock" ? true : false;
    }
    else if(user_choice==="rock"){
        userWin = comp_choice ==="scissor" ? true : false;
    }
    else{
        userWin = comp_choice ==="paper" ? true : false;
    }
    showWinner(userWin,user_choice,comp_choice);
   }
};

choices.forEach((choice) => {
   choice.addEventListener("click",() => {
     const user_choice=choice.getAttribute("id");
     playGame(user_choice);
   });
});