const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('nav-bar');

if (bar){
  bar.addEventListener('click',() =>{
    nav.style.right="0";
  })
}
if (close){
  close.addEventListener('click',() =>{
    nav.style.right="-300px";
  })
}

// shop.html
let first = document.getElementById('profirst')
let link = document.createElement("a")
function propage(){
  window.open("sproduct.html")
}

let mianImg = document.getElementById("mianImg")
        let smimg = document.getElementsByClassName("sm-img")

        smimg[0].onclick = function(){
            mianImg.src = smimg[0].src
        }
        smimg[1].onclick = function(){
            mianImg.src = smimg[1].src
        }
        smimg[2].onclick = function(){
            mianImg.src = smimg[2].src
        }
        smimg[3].onclick = function(){
            mianImg.src = smimg[3].src
        }