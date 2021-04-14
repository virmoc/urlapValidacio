window.addEventListener("load", init);

function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
   return document.querySelectorAll(nev);
}
function init(){
    console.log("hahó");
    ID("kuld").addEventListener("click", validalas);
}
function validalas(){
//    console.log("Hahó");
//legalabb 3 hosszúságú
//nagybetűvel kezdődik
//leygen benne bszóköz
    var uzenet = "";
    var megadottAdatok="";
        if(ID("nev").value.length < 3){
            uzenet="A név legalább 3 karakter hosszú legyen!<br>";
            ID("nev").style.border="2px solid red";
        }else{
            ID("nev").style.border="none";
        }
        var reg=/[A-Z]+[a-z]{2,}/;
        if (!reg.test(ID("nev").value)){
            uzenet+="A névnek nagybetűvel kell kezdődnie!<br>";
            ID("nev").style.border="2px solid red";
        }else{
            ID("nev").style.border="none";
        }
//    var megadottAdatok="";
    megadottAdatok+"Név"+ID("nev").value+"<br>";
//    console.log(uzenet);
    $("aside section:nth-child{1} p")[0].innerHTML=uzenet;
    $("aside setion:nth-child{2} p")[0].innerHTML=megadottAdatok;
    
}


