/* global emailujra */

window.addEventListener("load", init);

function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
   return document.querySelectorAll(nev);
}
function init(){
//    console.log("hahó");
    ID("kuld").addEventListener("click", validalas);
    ID("torol").addEventListener("click", torles);
}
function validalas(){
//    console.log("Hahó");
//legalabb 3 hosszúságú
//nagybetűvel kezdődik
//leygen benne bszóköz
    var uzenet = "";
    var megadottAdatok="";
    var reg=/[A-Z]+[a-z]{2,}/;
    var regtel =/[0-9]{10,}/;
    var regemail =/[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}/;
        if(ID("nev").value.length < 3){
            uzenet+="A név legalább 3 karakter hosszú legyen!<br>";
            ID("nev").style.border="2px solid red";
        }else if (!reg.test(ID("nev").value)){
            uzenet+="A névnek nagybetűvel kell kezdődnie!<br>";
            ID("nev").style.border="2px solid red";
        }else{
            ID("nev").style.border="none";
            
        }
        if(ID("email").value !== ID("emailujra").value){
            uzenet+="A két email címnek eggyezni-e kell!<br>";
            ID("emailujra").style.border="2px solid red";
        }else{
            ID("emailujra").style.border="none";
            
        }
        if(!regtel.test(ID("tel").value)){
            uzenet+="Csak számokat írjon!<br>";
            ID("tel").style.border="2px solid red";
            
        }else{
            ID("tel").style.border="none";
            
        }
        if(!regemail.test(ID("email").value)){
            uzenet+="Az email címnek tartalmaznia kell a @ jelet!<br>";
            ID("email").style.border="2px solid red";
            
        }else{
            ID("email").style.border="none";
            
        }
        
//    var megadottAdatok="";
    megadottAdatok+"Név"+ID("nev").value+"<br>";
//    console.log(uzenet);
    $("aside section:nth-child(1) p")[0].innerHTML=uzenet;
    $("aside setion:nth-child(2) p")[0].innerHTML=megadottAdatok;
    
}
function torles(){
    
}

