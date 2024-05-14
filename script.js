 //Run Sound
 var runSound = new Audio("run.mp3");
 runSound.loop = true;
 
 //Jump Sound
 var jumpSound = new Audio("jump.mp3");
 
 //Dead Sound
 var deadSound = new Audio("dead.mp3");
 


//key event
function keyCheck(event) {

    //enter key
    if (event.which == 13) {

        //alert("Hello world");
        if(runWorkerId == 0){

            runWorkerId = setInterval(run,100);
            runSound.play();

            
            moveBackgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);
            createBlockWorkerId = setInterval(createBlock, 100);
            moveBlockWorkerId = setInterval(moveBlock, 100);


       }


    }


    //space key
    if (event.which == 32) {
       // alert("java scrpit");

       if(jumpWorkerId == 0){

        clearInterval(runWorkerId);
        runWorkerId = -1;
        runSound.pause();
        jumpWorkerId = setInterval(jump,100);
        jumpSound.play();

       }
      

    }

}

//Boy Run
var boyId = document.getElementById("boy");
var runImageNumber = 1;
var runWorkerId = 0;

function run() {

    //runImageNumber = runImageNumber + 1;
    runImageNumber++;//increment

    if(runImageNumber == 9){

        runImageNumber = 1;

    }

    boyId.src = "Run (" +runImageNumber+ ").png";

    

}


//Boy jump
var jumpImageNumber = 1;
var jumpWorkerId = 0;
var boyMarginTop = 380;

function jump() {

    jumpImageNumber++;

    //jump fly
    if (jumpImageNumber <= 7) {

        boyMarginTop = boyMarginTop - 30;
        boyId.style.marginTop = boyMarginTop + "px";



    }

    //jump land
    if (jumpImageNumber >= 8) {

        boyMarginTop = boyMarginTop + 30;
        boyId.style.marginTop = boyMarginTop + "px";

    }

    //jump image Crash
    if (jumpImageNumber == 13) {

        jumpImageNumber = 1;

        clearInterval(jumpWorkerId);
        runWorkerId = setInterval(run, 100);
        runSound.play();

        jumpWorkerId = 0;

    }

    //Starting a jump
    if (scoreWorkerId == 0) {

        scoreWorkerId = setInterval(updateScore, 100);

    }
    if (moveBackgroundWorkerId == 0) {

        moveBackgroundWorkerId = setInterval(moveBackground, 100);


    }

    if (createBlockWorkerId == 0) {

        createBlockWorkerId = setInterval(createBlock, 100);



    }

    if (moveBlockWorkerId == 0) {

        moveBlockWorkerId = setInterval(moveBlock, 100);

    }


    boyId.src = "jump (" + jumpImageNumber + ").png";


}

//Background
var backgroundId = document.getElementById("background");
var moveBackgroundWorkerId = 0;
var positionX = 0;

function moveBackground() {

    positionX = positionX - 20;
    backgroundId.style.backgroundPositionX = positionX + "px";

}

//score
var scoreId = document.getElementById("score");
var scoreWorkerId = 0;
var newScore = 0;

function updateScore() {

    newScore++;
    scoreId.innerHTML = newScore;

}

//Create Block
var blockMarginLeft = 500;
var createBlockWorkerId = 0;
var blockNumber = 1;

function createBlock() {

    var block = document.createElement("div");
    block.className = "block";
    block.id = "block" + blockNumber;

    blockNumber++;

    var gap = Math.random() * (1000 - 400) + 400;

    blockMarginLeft = blockMarginLeft + gap;
    block.style.marginLeft = blockMarginLeft + "px";

    document.getElementById("background").appendChild(block);


}

//Move Block
var moveBlockWorkerId = 0;
function moveBlock() {

    for (var i = 1; i <= blockNumber; i++) {

        var currentBlock = document.getElementById("block" + i);
        var currentBlockMarginLeft = currentBlock.style.marginLeft;
        var newBlockMarginLeft = parseInt(currentBlockMarginLeft) - 30;

        currentBlock.style.marginLeft = newBlockMarginLeft + "px";

        //alert(newBlockMarginLeft);
        //103 - 13

        if (newBlockMarginLeft < 103 & newBlockMarginLeft > 13) {

            //alert(boyMarginTop);
            //290

            if (boyMarginTop > 290) {

                clearInterval(runWorkerId);
                runSound.pause();

                clearInterval(jumpWorkerId);
                jumpWorkerId = -1;


                clearInterval(scoreWorkerId);
                clearInterval(moveBackgroundWorkerId);
                clearInterval(createBlockWorkerId);
                clearInterval(moveBlockWorkerId);

                deadWorkerId = setInterval(dead, 100);
                deadSound.play();

                //alert("Dead!");

            }


        }



    }

}

//Boy dead
var deadWorkerId = 0;
var deadImageNumber = 1;

function dead() {

    deadImageNumber++;

    //Dead Image Crash
    if (deadImageNumber == 11) {
        deadImageNumber = 10;

        boyId.style.marginTop = "380px";

        document.getElementById("endScreen").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = newScore;


    }

    boyId.src = "Dead (" + deadImageNumber + ").png";

}



//Page Reload

function reload() {

    location.reload();

}

