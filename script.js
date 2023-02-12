
// console.log(posFirst.innerHTML)
let player = 1;
let i = 0;
let tieGame = true;
let winType = "";
//p1 = x   p2 = o
const checkwin = (player) =>{
    let posFirst = document.querySelector(".first").innerHTML;
    let posSecond = document.querySelector(".second").innerHTML;
    let posThird = document.querySelector(".third").innerHTML;
    let posFourth = document.querySelector(".fourth").innerHTML;
    let posFifth = document.querySelector(".fifth").innerHTML;
    let posSixth = document.querySelector(".sixth").innerHTML;
    let posSeventh = document.querySelector(".seventh").innerHTML;
    let posEighth = document.querySelector(".eighth").innerHTML;
    let posNinth = document.querySelector(".ninth").innerHTML;
        //horizontal check
    if (((posFirst == posSecond) && (posFirst == posThird)) &&(posFirst != "" && posSecond != "" && posThird != ""  ) ) {
        console.log("horizontal win");
        winType = "Horizontal Win";
        gameEnd(player,winType);
    }
    else if (((posFourth == posFifth) && (posFifth == posSixth)) &&(posFifth != "" && posFourth != "" && posSixth != ""  ) ) {
        console.log("horizontal win");
        winType = "Horizontal Win";
        gameEnd(player,winType);
    }
    else if (((posSeventh == posEighth) && (posEighth == posNinth)) &&(posEighth != "" && posSeventh != "" && posNinth != ""  ) ) {
        console.log("horizontal win");
        winType = "Horizontal Win";
        gameEnd(player,winType);
    }
    // //vertical check
    else if(((posFirst == posFourth) && (posFirst == posSeventh)) && (posFirst != "" && posFourth != "" && posSeventh != "")){
        console.log("vertical win");
        winType = "vertical Win";
        gameEnd(player,winType);
    }
    else if(((posSecond == posFifth) && (posFifth == posEighth)) && (posSecond != "" && posFifth != "" && posEighth != "")){
        console.log("vertical win");
        winType = "vertical Win";
        gameEnd(player,winType);
    }
    else if(((posSixth == posThird) && (posThird == posNinth)) && (posThird != "" && posNinth != "" && posSixth != "")){
        console.log("vertical win");
        winType = "vertical Win";
        gameEnd(player,winType);
    }
    // // Diagonal check
    else if(((posFirst == posFifth) && (posFifth == posNinth)) && (posFirst != "" && posFifth != "" && posNinth != "" )){
        console.log("Diagonal win");
        winType = "Diagonal Win";
        gameEnd(player,winType);
    }
    else if(((posFifth == posThird) && (posFifth == posSeventh))&& (posSeventh != "" && posFifth != "" && posThird != "" )){
        console.log("Diagonal Win");
        winType = "Diagonal Win";
        gameEnd(player,winType);
    }
    else if(posFirst != "" && posSecond != "" && posThird != "" && posFourth != "" && posFifth != "" && posSixth != "" && posSeventh != "" && posEighth != "" && posNinth != "" ){
        tieGame = true;
        console.log("tie");
        gameEnd(0,winType = "")
    }
}
// console.log(posFirst== "");
($(".first")).click(function(){
    let posFirst = document.querySelector(".first").innerHTML;
    if(posFirst === ""){
        if(player == 1){
            $(".first").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".first").html("O"); 
            checkwin(2);
            player = 1       
        }
    }
    else{
        alert("please select empty box");
    }
})

$(".second").on('click',function(){
    let posSecond = document.querySelector(".second").innerHTML;
    if(posSecond === ""){
        if(player == 1){
            $(".second").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".second").html("O");   
            checkwin(2);
            player = 1     
        }
    }
    else{
        alert("please select empty box");
    }
})

$(".third").click(function(){
    let posThird = document.querySelector(".third").innerHTML;
    if(posThird === ""){
        if(player == 1){
            $(".third").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".third").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})

$(".fourth").click(function(){
    let posFourth = document.querySelector(".fourth").innerHTML;
    if(posFourth === ""){
        if(player == 1){
            $(".fourth").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".fourth").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})

$(".fifth").click(function(){
    let posFifth = document.querySelector(".fifth").innerHTML;
    if(posFifth === ""){
        if(player == 1){
            $(".fifth").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".fifth").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})
$(".sixth").click(function(){
    let posSixth = document.querySelector(".sixth").innerHTML;
    if(posSixth === ""){
        if(player == 1){
            $(".sixth").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".sixth").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})

$(".seventh").click(function(){
    let posSeventh = document.querySelector(".seventh").innerHTML;
    if(posSeventh === ""){
        if(player == 1){
            $(".seventh").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".seventh").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})

$(".eighth").click(function(){
    let posEighth = document.querySelector(".eighth").innerHTML;
    if(posEighth === ""){
        if(player == 1){
            $(".eighth").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".eighth").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})
$(".ninth").click(function(){
    let posNinth = document.querySelector(".ninth").innerHTML;
    if(posNinth === ""){
        if(player == 1){
            $(".ninth").html("X");
            checkwin(1);
            player = 2;
        }
        else if(player == 2){
            $(".ninth").html("O");  
            checkwin(2);
            player = 1;      
        }
    }
    else{
        alert("please select empty box");
    }
})

const gameEnd = (playerid,wintype) =>{
    setTimeout('',500)
    if(playerid == 0){
        alert("Great Game : It is a Tie");
        location.reload(0);
    }
    else{
        alert("Great Game : \n The Winner is Player "+ playerid+"\n Winning Condition :: " + wintype );
        location.reload(0);
    }
}