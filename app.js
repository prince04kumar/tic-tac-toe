let boxes=document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn0 = true;

const winPattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="O";
            turn0 =false;
        
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () =>{
    for( let pattern of winPattern){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;


        if ( pos1Val != "" && pos2Val != "" && pos3Val != ""){

            if (pos1Val === pos2Val &&pos2Val === pos3Val){
                console.log("winner");
                document.querySelector("#winPopup").style.display="block";

            }
        }

        document.getElementById('closePopup').addEventListener('click', function() {
            document.getElementById('winPopup').style.display = 'none';});

        
    }}

    document.getElementById("reset").addEventListener("click", resetGame);

    function resetGame() {
        // Clear content and enable boxes
        boxes.forEach(box => {
          box.innerText = "";
          box.disabled = false;
        });
    }
