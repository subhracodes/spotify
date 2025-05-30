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
    document.querySelector(".menuline").style.width="0px";
    // document.querySelector(".backarrow").classList.toggle("closemenu")
})


//fetching the songs folder
async function songArray(){
  const response = await fetch('http://127.0.0.1:5500/songs/');
  const data = await response.text();
  // console.log(data);
  let div=document.createElement("div");
  div.innerHTML=data;
  let lis=div.getElementsByTagName("li")
  let songslist=Array.from(lis)
  songslist.shift()
  songslist.forEach(e=>{
    console.log(e.getElementsByTagName("span")[0]);
    
  })
  // console.log(songs);
  let posters=[];
  let songs=[];
  let count=1;
  songslist.forEach(e=>{
    if(count%2==0){
      posters.push(e.getElementsByTagName("span")[0].innerHTML)
      // count++;
    }
    else{
      songs.push(e.getElementsByTagName("span")[0].innerHTML)
    }
    count++;
  })
  console.log(posters);
  console.log(songs);
  posters.forEach(e => {
  let post = document.createElement("div")
  post.classList.add("card");                
  post.innerHTML = "<img src='songs/"+e+"' class='cards'>";  
  // console.log(`${e}`);
                    
  document.querySelector(".cardcont").append(post); 
});

  
}
songArray()
function pause(){
  document.querySelector(".pause").style.display="none";
  document.querySelector(".play").style.display="inline-block";
}
function play(){
  document.querySelector(".play").style.display="none";
  document.querySelector(".pause").style.display="inline-block";
}