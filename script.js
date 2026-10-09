let secs=0;
let tens=0;
let mins=0;
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
let outputsecs=document.getElementById('secs');
let outputtens=document.getElementById('tens');
let outputmins=document.getElementById('mins');
function timer(){
    tens++;
    if (tens<=9){
        outputtens.innerHTML='0'+tens
    }
    if (tens>9){
        outputtens.innerHTML=tens
    }
    if(tens>99){
        secs++;
        outputsecs.innerHTML='0'+secs
        tens=0;
        outputtens.innerHTML='0'+tens
    }
    if(secs>9){
        outputsecs.innerHTML=secs
    }
    if(secs>59){
        mins++;
        outputmins.innerHTML='0'+mins
        secs=0;
        outputsecs.innerHTML='0'+secs
    }
}
let interval;
document.getElementById('start').addEventListener("click",function(){
    clearInterval(interval);
    interval=setInterval(timer,10);
})
document.getElementById('stop').addEventListener("click",function(){
    clearInterval(interval);
})
document.getElementById('reset').addEventListener("click",function(){
    tens=0;
    secs=0;
    mins=0;
    outputsecs.innerHTML="0"+0;
    outputtens.innerHTML="0"+0;
    outputmins.innerHTML="0"+0;
})