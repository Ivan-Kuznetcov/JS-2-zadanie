a = Math.round(Math.random()*9+1);
b = Math.round(Math.random()*9+1);
document.querySelector(".primer").innerHTML=`${a}*${b}`; 
document.querySelector("#new").onclick=function(){
    if(document.getElementById("y").value == "y" || document.getElementById("y").value == "у" ){
        document.querySelector(".msg").innerHTML="";
        a = Math.round(Math.random()*9+1);
        b = Math.round(Math.random()*9+1);
        document.querySelector(".primer").innerHTML=`${a}*${b}`; 
    }
    else{
        document.querySelector(".primer").innerHTML="";
        document.getElementById("res").value ="";
    }
}
document.querySelector("#btn").onclick=function(){
    if(+document.querySelector("#res").value==a*b){
        document.querySelector(".msg").innerHTML="Верно";
    }
    else{
        document.querySelector(".msg").innerHTML="Не верно";
    }

}
/*document.querySelector("#new").onclick=function(){
    document.querySelector(".msg").innerHTML="";
    a = Math.round(Math.random()*9+1);
    b = Math.round(Math.random()*9+1);
    document.querySelector(".primer").innerHTML=`${a}*${b}`;}
*/
