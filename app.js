const field = document.querySelectorAll(".field");

for(let i=0;i<field.length;i++){
    field[i].addEventListener("click", (e)=> {
        if(e.currentTarget.classList.contains("filled") || e.currentTarget.classList.contains("enemyFilled") ){
            
        }else{
            e.currentTarget.classList.add("filled");
            checkWinner();
        
           ++isFull;
           console.log(isFull);
            com();
            if(winner == null){
              checkWinner();  
            }
            if(isFull == 9&&winner == null){
                restart();
            }
            console.log(isFull);
            
        }
        
        
    })
}

let isFull = 0;
let winner = null;
let playerOneScore = 0;
let playerTwoScore = 0;


function com(){


let i;


    while (isFull<9 && winner == null) {
        
        
        i = Math.floor(Math.random() * 9);
        if(field[i].classList.contains("filled") || field[i].classList.contains("enemyFilled")){
            continue;
        }else{
            field[i].classList.add("enemyFilled");
            ++isFull;
           break;
        }

    
       
    }




}


function restart(){
    const backGround = document.createElement("div");
     backGround.classList.add("modal");
    const modal = document.createElement("div");
    modal.classList.add("modal-content");
    const showWinner = document.createElement("p");
    const button =document.createElement("button");

    if(isFull == 9){
        showWinner.innerHTML = "It's a Draw!";
    } else{
         showWinner.innerHTML = winner + " Wins!";
    }
    
    button.innerHTML = "restart";

    modal.appendChild(showWinner);
    modal.appendChild(button);
    backGround.appendChild(modal);
    document.querySelector("body").appendChild(backGround);

    button.addEventListener("click", ()=> {
        isFull = 0;
        winner = null;
        backGround.style.display = "none";
    for (let i = 0; i < field.length; i++) {
        field[i].classList.remove("filled");
        field[i].classList.remove("enemyFilled");
        
    }

    })
}


function checkWinner(){
    
    let playerOne = "Player One";
    let playerTwo = "Player Two";
    const coloumnOne = [document.querySelector("#field-one"),document.querySelector("#field-two"),document.querySelector("#field-three")];
    let coloumnOneFilled = 0;
    let coloumnOneEnemy = 0;
    for(let i = 0; i<coloumnOne.length;i++){
        if(coloumnOne[i].classList.contains("filled")){
            coloumnOneFilled++;
        } else if(coloumnOne[i].classList.contains("enemyFilled")){
            coloumnOneEnemy++;
        }
        
    }
    if(coloumnOneFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(coloumnOneEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const coloumnTwo = [document.querySelector("#field-four"),document.querySelector("#field-five"),document.querySelector("#field-six")];
    let coloumnTwoFilled = 0;
    let coloumnTwoEnemy = 0; 
    for(let i = 0; i<coloumnTwo.length;i++){
        if(coloumnTwo[i].classList.contains("filled")){
            coloumnTwoFilled++;
        } else if(coloumnTwo[i].classList.contains("enemyFilled")){
            coloumnTwoEnemy++; 
        }
        
    }
    if(coloumnTwoFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(coloumnTwoEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const coloumnThree = [document.querySelector("#field-seven"),document.querySelector("#field-eight"),document.querySelector("#field-nine")];
    let coloumnThreeFilled = 0;
    let coloumnThreeEnemy = 0;
    for(let i = 0; i<coloumnThree.length;i++){
        if(coloumnThree[i].classList.contains("filled")){
            coloumnThreeFilled++;
        }
        else if(coloumnThree[i].classList.contains("enemyFilled")){
            coloumnThreeEnemy++;
        }
        
    }
    if(coloumnThreeFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(coloumnThreeEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const rowOne = [document.querySelector("#field-one"),document.querySelector("#field-four"),document.querySelector("#field-seven")];
    let rowOneFilled = 0;
    let rowOneEnemy = 0;
    for(let i = 0; i<rowOne.length;i++){
        if(rowOne[i].classList.contains("filled")){
            rowOneFilled++;
        }
        else if(rowOne[i].classList.contains("enemyFilled")){
            rowOneEnemy++;
        }
        
    }
    if(rowOneFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(rowOneEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const rowTwo = [document.querySelector("#field-two"),document.querySelector("#field-five"),document.querySelector("#field-eight")];
    let rowTwoFilled = 0;
    let rowTwoEnemy = 0;
    for(let i = 0; i<rowTwo.length;i++){
        if(rowTwo[i].classList.contains("filled")){
            rowTwoFilled++;
        } 
        else if(rowTwo[i].classList.contains("enemyFilled")){
            rowTwoEnemy++;
        } 
        
    }
    if(rowTwoFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(rowTwoEnemy == 3) {
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const rowThree = [document.querySelector("#field-three"),document.querySelector("#field-six"),document.querySelector("#field-nine")];
    let rowThreeFilled = 0;
    let rowThreeEnemy = 0;
    for(let i = 0; i<rowThree.length;i++){
        if(rowThree[i].classList.contains("filled")){
            rowThreeFilled++;
        }
        else if(rowThree[i].classList.contains("enemyFilled")){
            rowThreeEnemy++;
        }
        
    }
    if(rowThreeFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(rowThreeEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const diagonalOne = [document.querySelector("#field-one"),document.querySelector("#field-five"),document.querySelector("#field-nine")];
    let diagonalOneFilled = 0;
    let diagonalOneEnemy = 0;
    for(let i = 0; i<diagonalOne.length;i++){
        if(diagonalOne[i].classList.contains("filled")){
            diagonalOneFilled++;
        }
       else if(diagonalOne[i].classList.contains("enemyFilled")){
            diagonalOneEnemy++;
        }
        
    }
    if(diagonalOneFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    }else if(diagonalOneEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }


    const diagonalTwo = [document.querySelector("#field-three"),document.querySelector("#field-five"),document.querySelector("#field-seven")];
    let diagonalTwoFilled = 0;
    let diagonalTwoEnemy = 0;
    for(let i = 0; i<diagonalTwo.length;i++){
        if(diagonalTwo[i].classList.contains("filled")){
            diagonalTwoFilled++;
        }
        else if(diagonalTwo[i].classList.contains("enemyFilled")){
            diagonalTwoEnemy++;
        }
        
    }
    if(diagonalTwoFilled == 3){
        ++playerOneScore;
        document.querySelector(".playerOneScore").innerHTML = "Won: " + playerOneScore;
        winner = playerOne;
        restart();
        return true;
    } else if(diagonalTwoEnemy == 3){
        ++playerTwoScore;
        document.querySelector(".playerTwoScore").innerHTML = "Won: " + playerTwoScore;
        winner = playerTwo;
        restart();
        return true;
    }
    
}