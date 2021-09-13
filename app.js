let writerEle = document.body.querySelector(".box");
let buttonEle = document.body.querySelector(".clicker");
let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];


for (let i=0; i < animals.length; i++){
  let ele=document.createElement("div");
  if(animals[i]=="cat") {
      ele.innerHTML = "I am a cat";
  }else if(animals[i]=="dog"){
          ele.innerHTML = "borf borf";
      }else {
          ele.innerHTML = "I'm an animal";
      }
    writerEle.appendChild(ele);
  }

function shuffle(){
    let ele=document.createElement("div");
    ["dog", "fish", "cat", "shark", "cat", "dog"].sort(
        () => .5 - Math.random(),
        writerEle.appendChild(ele)
    );

}



buttonEle.addEventListener("click", function(){
    shuffle();



})

