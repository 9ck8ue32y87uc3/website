const tBtn = document.getElementById("theme-btn");
const nTxt = document.querySelector("h1");
const lks = document.querySelectorAll(".s a");

const ths = [
  {gradientStart:"#ff4d4d",gradientEnd:"#00e6e6",arrowColor:"#ff4d4d"},
  {gradientStart:"#f9429e",gradientEnd:"#d9c7db",arrowColor:"#f9429e"},
  {gradientStart:"#ee943d",gradientEnd:"#eee63d",arrowColor:"#ee943d"},
  {gradientStart:"#a0fc00",gradientEnd:"#00fc27",arrowColor:"#a0fc00"},
  {gradientStart:"#00fc57",gradientEnd:"#00fcda",arrowColor:"#00fc57"},
  {gradientStart:"#00e7fc",gradientEnd:"#0057fc",arrowColor:"#00e7fc"},
  {gradientStart:"#0900fc",gradientEnd:"#8500fc",arrowColor:"#0900fc"}
];

let curTh = 0;

tBtn.addEventListener("click",()=>{
  curTh=(curTh+1)%ths.length;
  const th=ths[curTh];
  nTxt.style.setProperty('--gradient-start',th.gradientStart);
  nTxt.style.setProperty('--gradient-end',th.gradientEnd);
  lks.forEach(l=>l.style.setProperty('--arrow-color',th.arrowColor));
});

const desc = document.getElementById("description");
const txts=[
  "French developer suffers from depression.",
  "I also work in cybersecurity.",
  "My favorite color is pink.",
  ""
];

let curTxt=0;

function typeTxt(text,cb){
  desc.textContent="";
  let i=0;
  (function typing(){
    if(i<text.length){
      desc.textContent+=text.charAt(i);
      i++;
      setTimeout(typing,100);
    } else {
      setTimeout(()=>eraseTxt(cb,text,curTxt===txts.length-1),curTxt===txts.length-1?0:3000);
    }
  })();
}

function eraseTxt(cb,text,isLast){
  let i=text.length;
  (function erasing(){
    if(i>(isLast?0:1)){
      desc.textContent=text.slice(0,i-1);
      i--;
      setTimeout(erasing,50);
    } else cb();
  })();
}

(function startLoop(){
  typeTxt(txts[curTxt],()=>{
    curTxt=(curTxt+1)%txts.length;
    startLoop();
  });
})();
