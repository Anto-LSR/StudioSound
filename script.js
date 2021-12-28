window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
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

let slider = document.getElementById("references");
let touchstartX = 0;
let touchendX = 0;
let icon = document.getElementById("swipeIcon");

function handleGesture() {
  if (touchendX + 50 < touchstartX) {
    //LEFT
    rightswipe();
    icon.classList.add("hidden");
  }
  if (touchendX - 50 > touchstartX) {
    // RIGHT
    leftswipe();
    icon.classList.add("hidden");
  }
}

//CLICK ARROWS
let right = document.getElementById("rightArrow");
let left = document.getElementById("leftArrow");
right.addEventListener("click", () => {
  rightswipe();
});

left.addEventListener("click", () => {
  leftswipe();
});

slider.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
  
});

slider.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});

let cardBox = document.getElementById("cardsContainer");
let cardBox2 = document.getElementById("cardsContainer_2");
let max = 3;
let i = 0;

function leftswipe() {
  if (window.innerWidth < 768) {
    if (i === 3) {
      cardBox.classList.remove("moveRight3");
      cardBox.classList.add("moveRight2");
      cardBox2.classList.remove("moveRight3");
      cardBox2.classList.add("moveRight2");
      i--;
    } else if (i === 2) {
      cardBox.classList.remove("moveRight2");
      cardBox.classList.add("moveRight");
      cardBox2.classList.remove("moveRight2");
      cardBox2.classList.add("moveRight");
      i--;
    } else if (i === 1) {
      cardBox.classList.remove("moveRight");
      cardBox2.classList.remove("moveRight");
      i--;
    } else if (i === 0) {
      cardBox.classList.add("moveRight3");
      cardBox2.classList.add("moveRight3");
      i = 3;
    }
  } else {
    if (i === 0) {
      cardBox.classList.add("moveRight");
      cardBox2.classList.add("moveRight");
    } else if (i === 1) {
      cardBox.classList.remove("moveRight");
      cardBox2.classList.remove("moveRight");
      i--;
    }
  }
}

function rightswipe() {
  if (window.innerWidth < 768) {
    if (i === 0) {
      cardBox.classList.add("moveRight");
      cardBox2.classList.add("moveRight");
      i++;
    } else if (i === 1) {
      cardBox.classList.remove("moveRight");
      cardBox.classList.add("moveRight2");
      cardBox2.classList.remove("moveRight");
      cardBox2.classList.add("moveRight2");
      i++;
    } else if (i === 2) {
      cardBox.classList.remove("moveRight2");
      cardBox.classList.add("moveRight3");
      cardBox2.classList.remove("moveRight2");
      cardBox2.classList.add("moveRight3");
      i++;
    } else if (i === max) {
      cardBox.classList.remove("moveRight3");
      cardBox2.classList.remove("moveRight3");
      i = 0;
    }
  } else {
    if (i === 0) {
      cardBox.classList.add("moveRight");
      cardBox2.classList.add("moveRight");
      i++;
    } else if (i === 1) {
      cardBox.classList.remove("moveRight");
      cardBox2.classList.remove("moveRight");
      i--;
    }
  }
}
if (window.matchMedia("(max-width: 1024px)").matches) {
  let moreBtn = document.getElementById("moreBtn");
  let cards = document.getElementById("cardsContainer");
  let cards2 = document.getElementById("cardsContainer_2");
  let moreClicked = false;
  moreBtn.addEventListener("click", () => {
    if (!moreClicked) {
      cards.style.display = "none";
      cards2.style.display = "flex";
      moreClicked = true;
    } else {
      cards.style.display = "flex";
      cards2.style.display = "none";
      moreClicked = false;
    }
  });
}

//DESKTOP VERSION

if (window.matchMedia("(min-width: 1025px)").matches) {
  let maintitle = document.getElementById("maintitle");
  let deskUl = document.getElementById("deskUl");
  function animDesktop() {
    maintitle.classList.add("animTitle");
    maintitle.classList.remove("reversedAnimTitle");
    deskUl.classList.add("animNavbar");
    deskUl.classList.remove("reversedAnimNavbar");
  }

  function removeAnimDesktop() {
    maintitle.classList.remove("animTitle");
    maintitle.classList.add("reversedAnimTitle");
    deskUl.classList.remove("animNavbar");
    deskUl.classList.add("reversedAnimNavbar");
  }

  let mixnmast = document.getElementById("homeh3");
  let yAxis0 = document.getElementById("top");

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      removeAnimDesktop();
      mixnmast.classList.remove("setOpacity");
    } else {
      animDesktop();
      mixnmast.classList.add("setOpacity");
    }
    prevScrollpos = currentScrollPos;
  };

  //MORECARDS

  let moreBtn = document.getElementById("moreBtn");
  let cards = document.getElementById("cardsContainer");
  let cards2 = document.getElementById("cardsContainer_2");

  let moreClicked = false;
  moreBtn.addEventListener("click", () => {
    if (!moreClicked) {
      cards2.classList.add("cardRow2");
      timer = setTimeout(function () {
        cards.classList.remove("cardRow2");
        cards.classList.remove("resetZi");
        cards2.classList.add("resetZi");

        clearTimeout(timer);
      }, 500);
      cards.classList.remove("cardRow2");

      moreClicked = true;
    } else {
      cards.classList.add("cardRow2");
      timer = setTimeout(function () {
        cards2.classList.remove("cardRow2");
        cards2.classList.remove("resetZi");

        clearTimeout(timer);
      }, 500);

      moreClicked = false;
    }
  });
}
