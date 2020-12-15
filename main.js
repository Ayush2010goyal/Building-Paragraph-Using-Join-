function GetPara(){
    var paras = [];
    for (var i = 1 ; i<=6 ; i++){
        paras.push(document.getElementById("para"+i).value);
       
    }
    paras.join(". ");
    document.getElementById("ptexts").innerHTML=paras.join(". ");
    console.log(paras);
}