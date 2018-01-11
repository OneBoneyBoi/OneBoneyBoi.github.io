var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are correct"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
 else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are correct"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="1. What voice actor played Rick, and which voice actor played Morty? \na)Justin Roiland played both Rick and Morty \nb)Justin Roiland played Rick, and Chris Parnell played Morty \nc)Chris Parnell played Rick, and Justin Roiland played Morty \nd)Chris Parnell played Rick, and Dan Harmon played Morty";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="2. How many seasons of Rick and Morty are there? \na)1 \nb)7 \nc)3 \nd)5";
    document.view.qans.value=""
}
    else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="3. What is the name of Morty’s Sister?\na)Beth \nb)Bob \nc)Vanessa \nd)Alessia";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="4. What is the average length of a Rick and Morty Episode? \na)44mins \nb)1hr \nc)22mins \nd)30mins";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="5. How old is Morty? \na)10 \nb)14 \nc)18 \nd)11";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="6. How old is Rick? \na)20 \nb)60 \nc)40 \nd)70";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="7. What is Rick considered most in the eyes of Jerry Smith(Morty’s Dad)? \na)An awesome genius \nb)Caring and Loving man \nc)A bad role model \nd)A good role model";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="8. What vegetable did Rick turn himself into? \na)Pepper  \nb)Tomato \nc)Cucumber \nd)Pickel";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="9. What does Rick use to travel between dimensions and universes? \na)Space Laser \nb)Portal Gun \nc)Mayonnaise \nd)Key of Secrets";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="10. What are the Smith’s favourite cereal \na)Captain Crunch \nb)Strawberry Smiggles \nc)Raspberries Rumbles \nd)Smith’s don’t consume cereal";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
}
	i++; 
}
