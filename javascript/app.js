document.getElementById("form1").onsubmit=function(result) {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
       sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
       con = parseInt(document.querySelector('input[name = "con"]:checked').value);
       ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
       
       
       result = variable + sub + con + ifstate;
       
    document.getElementById("grade").innerHTML = result;

 grade = [
       {score:0,feedback:"You've made Jim cry.", image: "../image/0.gif"},
       {score:25,feedback:"Ouch that hurts. Try again", image: "../image/25.gif"},
       {score:50,feedback:"I think you could do better. Try again.", image: "../image/50.gif"},
       {score:75,feedback:"So close. Try again.", image: "../image/75.jpg"},
       {score:100,feedback:"Excellent! You're a JavaScript pro!", image: "../image/100.gif"}
       ];
      
for(i=0; i<grade.length; i++) {
    if(result == grade[i].score) {
    result2 = grade[i].feedback + "<br /><img src='" + grade[i].image + "' width='300'  />";
      }
      }


document.getElementById("grade2").innerHTML = result2; 

return false;
} 
