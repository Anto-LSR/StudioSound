


// NAVBAR

let burgerBtn = document.getElementById("burgerBtn");
let crossBtn = document.getElementById("crossBtn");
let mobileNav = document.getElementById("mobileNav");
let title = document.getElementById("title");
let arrow = document.getElementById("arrow");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.add("openNav");
  burgerBtn.classList.add("hidden");
});

function closeNav() {
  mobileNav.classList.remove("openNav");
  burgerBtn.classList.remove("hidden");
  crossBtn.classList.add("hidden");
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos === 0) {
    document.getElementById("header").classList.remove("headAnim");
  } else {
    document.getElementById("header").classList.add("headAnim");
  }
  prevScrollpos = currentScrollPos;
};

///SLIDER

let slider = document.getElementById("references")
let touchstartX = 0
let touchendX = 0
let icon = document.getElementById("swipeIcon")


function handleGesture() {
  

  if (touchendX +50  < touchstartX){  //LEFT
    rightswipe()
    icon.classList.add("hidden")
  }
  if (touchendX -50  > touchstartX){ // RIGHT
    leftswipe()
    icon.classList.add("hidden")
    
  }
}

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  
  
})

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  handleGesture()
  
  
})


let right = document.getElementById("rightArrow");
let left = document.getElementById("leftArrow");
let cardBox = document.getElementById("cardsContainer");
let max = 3;
let i = 0;



function leftswipe(){
  if (i === 3) {
    cardBox.classList.remove("moveRight3");
    cardBox.classList.add("moveRight2");
    i--;
  } else if (i === 2){
    cardBox.classList.remove("moveRight2");
    cardBox.classList.add("moveRight");
    i--;
  } else if (i === 1){
    cardBox.classList.remove("moveRight");
    i--;
  } else if (i === 0){
    cardBox.classList.add("moveRight3")
    i = 3
  }
}

function rightswipe(){
  if (i === 0) {
    cardBox.classList.add("moveRight");
    i++;
  } else if (i === 1) {
    cardBox.classList.remove("moveRight");
    cardBox.classList.add("moveRight2");
    i++;
  } else if (i === 2) {
    cardBox.classList.remove("moveRight2");
    cardBox.classList.add("moveRight3");
    i++;
  } else if (i === max){
    cardBox.classList.remove("moveRight3")
    i = 0
  }
}



