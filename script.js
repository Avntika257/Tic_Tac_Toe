let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newGame= document.querySelector("#newGame");
let msgContainer= document.querySelector(".msg-container")
let msg= document.querySelector("#msg");



let turnO=true;//playerX, playerO
let winningPartterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
/* **LOGIC** */
boxes.forEach((box)=>
{
 box.addEventListener("click", ()=>{
    console.log("box clicked");
    if(turnO)
    {
        box.innerText="O";
        turnO = false;
    }
    else{
        box.innerText="X";
        turnO = true;
    }
    box.disabled=true;

    checkWinner();
 });
});

const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerHTML="";
        }
    };

const showWinner=(winner)=>
{
 msg.innerHTML=`Congratulations, winner! ${winner}.`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkWinner = ()=>{
     for(let parttern of winningPartterns)
     {
        /*console.log(parttern[0],parttern[1],parttern[2]);
        console.log(
            boxes[parttern[0]].innerText,
            boxes[parttern[1]].innerText,
            boxes[parttern[2]].innerText,
        );*/
        let pos1Val=boxes[parttern[0]].innerText;
        let pos2Val=boxes[parttern[1]].innerText;
        let pos3Val=boxes[parttern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val=== pos2Val && pos2Val=== pos3Val)
            {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
     }
};

/* **RESET GAME** */

const resetGame=()=>
{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);