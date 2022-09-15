const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let arr=[];
let passEL1=document.getElementById("pass-1");
let passEL2=document.getElementById("pass-2");

let isGenerated=false;
let string="";
let count=0;


    for(let i=1;i<=15;i++){
        let getEl=document.getElementById(`button${i}`);
    }

function generate1(){
    if(isGenerated===false){
        for(let i=0;i<=15;i++){
            passEL1.textContent+=characters[getRandom()];
        }
        for(let i=0;i<=15;i++){
            passEL2.textContent+=characters[getRandom()];
        }isGenerated=true;
    }
}

function getRandom(){
    let randomNum=Math.floor(Math.random()*characters.length);
    return randomNum;
}
function getRandom1(){
    return Math.floor(Math.random()*arr.length);
}
