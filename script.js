//key event
function keyCheck(event) {

    //enter key
    if (event.which == 13) {

        //alert("Hello world");
        if(runWorkerId == 0){

            runWorkerId = setInterval(run,100);

       }


    }


    //space key
    if (event.which == 32) {
       // alert("java scrpit");

       if(jumpWorkerId == 0){

        clearInterval(runWorkerId);
        jumpWorkerId = setInterval(jump,100);

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

var jumpImageNumber = 1;
var jumpWorkerId = 0;

function jump(){
     jumpImageNumber++;
        if(jumpImageNumber == 13){

            jumpImageNumber = 1;

            clearInterval(jumpWorkerId);
            runWorkerId = setInterval(run,100);

            jumpWorkerId = 0;

        }

        boyId.src = "jump (" +jumpImageNumber+ ").png";

}