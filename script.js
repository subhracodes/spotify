document.querySelector(".lines").addEventListener("click",()=>{
    document.querySelector(".lines").style.visibility="hidden"
    // document.querySelector(".blurblack").classList.toggle("openmenu")
    document.querySelector(".blurblack").style.width="40vw";
    document.querySelector(".menuline").style.width="98%";
    document.querySelector(".backarrow").style.display="inline-block"
    document.querySelector(".blurblack").style.animation="openmenu2 0.3s"
})
window.addEventListener("resize", () => {
  if(window.innerWidth>841){
    document.querySelector(".blurblack").style.width="0px";
    document.querySelector(".blurblack").style.animation="closemenu 0.3s"
  }
});
document.querySelector(".backarrow").addEventListener("click",()=>{
    document.querySelector(".lines").style.visibility="visible"
    document.querySelector(".blurblack").style.width="0px";
    document.querySelector(".blurblack").style.animation="closemenu 0.3s"
    document.querySelector(".backarrow").style.display="none";
    // document.querySelector(".backarrow").classList.toggle("closemenu")
})
