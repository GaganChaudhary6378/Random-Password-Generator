let getText=document.getElementById("text-area");
let arr=[];
let passEL1=document.getElementById("pass-1");
let passEL2=document.getElementById("pass-2");

let isGenerated=false;
let string="";
let count=0;
let count1=0;

function adder(e){
    if(count<15){
        arr.push(e);
        getText.textContent+=e;
        count++;
    }
    
}
console.log(arr)

function generate1(){
    if(isGenerated===false && arr.length===0){
            passEL1.textContent="";
            passEL2.textContent="";
            alert("Please enter letters from virtual keyboard")
    }else if(count1===0 && isGenerated===false){
        for(let i=0;i<15;i++){
            passEL1.textContent+=arr[getRandom()];
        }
        for(let i=0;i<15;i++){
            passEL2.textContent+=arr[getRandom()];
        }
        isGenerated=true;
        count1++;
    }
    getText.textContent="";
    arr=[];
}


function getRandom(){
    let randomNum=Math.floor(Math.random()*arr.length);
    return randomNum;
}
function getRandom1(){
    return Math.floor(Math.random()*arr.length);
}
