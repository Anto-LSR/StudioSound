
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


let listenBtn1 = document.getElementById("listenBtn1")
let listenBtn2 = document.getElementById("listenBtn2")
let listenBtn3 = document.getElementById("listenBtn3")
let listenBtn4 = document.getElementById("listenBtn4")
let listenBtn5 = document.getElementById("listenBtn5")
let listenBtn6 = document.getElementById("listenBtn6")
let listenBtn7 = document.getElementById("listenBtn7")
let listenBtn8 = document.getElementById("listenBtn8")

  listenBtn1.addEventListener('click', () => {
    window.open( 'https://youtu.be/zaqEVXdjpcY', '_blank')
  })
  listenBtn2.addEventListener('click', () => {
    window.open( 'https://youtu.be/sJ6TeSy9UMc', '_blank')
  })
  listenBtn3.addEventListener('click', () => {
    window.open( 'https://youtu.be/1lEheUTHiE4', '_blank')
  })
  listenBtn4.addEventListener('click', () => {
    window.open( 'https://youtu.be/75YIaWZyTvg', '_blank')
  })
  listenBtn5.addEventListener('click', () => {
    window.open( 'https://youtu.be/PSP3PbytbVY', '_blank')
  })
  listenBtn6.addEventListener('click', () => {
    window.open( 'https://youtu.be/ZbbSowf_pR0', '_blank')
  })
  listenBtn7.addEventListener('click', () => {
    window.open( 'https://soundcloud.com/vidaillac', '_blank')
  })
  listenBtn8.addEventListener('click', () => {
    window.open( 'https://youtu.be/9-KEZHE2rSM', '_blank')
  })

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
    var currentScrollPos = window.scrollY;
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


let closeModal = document.getElementById("closeModal");
let modal = document.getElementById("modalContainer")

closeModal.addEventListener('click', () => {
modal.style.display = "none"
document.querySelectorAll('iframe').forEach(
  function(elem){
    elem.parentNode.removeChild(elem);
});
})
//LISTEN BTNS
let makeIframe = document.getElementById("makeIframe")
let listenBtn1 = document.getElementById("listenBtn1")
let listenBtn2 = document.getElementById("listenBtn2")
let listenBtn3 = document.getElementById("listenBtn3")
let listenBtn4 = document.getElementById("listenBtn4")
let listenBtn5 = document.getElementById("listenBtn5")
let listenBtn6 = document.getElementById("listenBtn6")
let listenBtn7 = document.getElementById("listenBtn7")
let listenBtn8 = document.getElementById("listenBtn8")

listenBtn1.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zaqEVXdjpcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  modal.style.display = 'flex'
})
listenBtn2.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/sJ6TeSy9UMc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  modal.style.display = 'flex'
})
listenBtn3.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="469" height="262" src="https://www.youtube.com/embed/1lEheUTHiE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  modal.style.display = 'flex'
})
listenBtn4.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="469" height="262" src="https://www.youtube.com/embed/75YIaWZyTvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  modal.style.display = 'flex'
})
listenBtn5.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/PSP3PbytbVY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  modal.style.display = 'flex'
})
listenBtn6.addEventListener('click', () => {

  makeIframe.innerHTML = '<div class = "comingSoon" id = "comingSoon"> <h4>COMING SOON</h4> </div>'
  
  modal.style.display = 'flex'
})
listenBtn7.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339447816&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vidaillac" title="Hijas de" target="_blank" style="color: #cccccc; text-decoration: none;">Hijas de</a> · <a href="https://soundcloud.com/vidaillac/marinheros" title="Marin&#x27;heros" target="_blank" style="color: #cccccc; text-decoration: none;">Marin&#x27;heros</a></div>'
  
  modal.style.display = 'flex'
})
listenBtn8.addEventListener('click', () => {

  makeIframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9-KEZHE2rSM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  
  modal.style.display = 'flex'
})


}
