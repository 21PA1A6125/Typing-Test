let timerPara=document.getElementById("timer");
let count=0;
let url="https://apis.ccbp.in/random-quote";
let quotePara=document.getElementById("quoteDisplay");
let sp=document.getElementById("spinnerDiv");
let tot=document.getElementById("totalDiv");
let reset=document.getElementById("resetBtn");
let submit=document.getElementById("submitBtn");
let ip=document.getElementById("quoteInput");
let res=document.getElementById("result");

tot.classList.add("d-none");

let timerId=setInterval(function(){
    count++;
    timerPara.textContent=count;
},1000);


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    sp.classList.add("d-none");
    tot.classList.remove("d-none");
    quotePara.textContent=jsonData.content;
})

reset.addEventListener("click",function(){
  clearInterval(timerId);
  res.textContent="";
  quotePara.textContent="";
  tot.classList.add("d-none");
  sp.classList.remove("d-none");
  count = 0;
  ip.value="";
  timerId=setInterval(function(){
    count++;
    timerPara.textContent=count;
},1000);
    fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    sp.classList.add("d-none");
    tot.classList.remove("d-none");
    quotePara.textContent=jsonData.content;
})
  
})

submit.addEventListener("click",function(){
    if(ip.value==quotePara.textContent){
        res.textContent=`You typed in ${count} seconds.`;
        res.classList.add("pass");
        clearInterval(timerId);
        
    }
    else{
        res.textContent="You typed incorrect sentence";
        res.classList.add("fail");
        
    }
})