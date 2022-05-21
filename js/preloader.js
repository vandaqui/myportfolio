
/*--------- NAVIGATION MENU ---------*/
(()=>{
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavBtn = navMenu.querySelector(".close-nav-menu");
  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);
  
  function showNavMenu(){
    navMenu.classList.add("open");
    bodyScrollingToggle();
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
    bodyScrollingToggle();
  }
  function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
      document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
  }
  // attach and event handler to document
  document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('link-item')){
      /* make sure event.target.hash has a value before overriding defeault behavior*/
      if(event.target.hash !==""){
        // prevent default anchor click behavior
        event.preventDefault();
        const hash = event.target.hash;
        // deactivate existing active "section"
        document.querySelector(".section.active").classList.add("hide");
        document.querySelector(".section.active").classList.remove("active");
        // activate new section
        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");
        // deactivate existing active navigation menu
        navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
        navMenu.querySelector(".active").classList.remove("active","inner-shadow");
        /* if clicked 'link-item' is contained whitin the navigation menu */
        if (navMenu.classList.contains("open")){
        // activate new navigation menu 'link-item'
        event.target.classList.add("active","inner-shadow");
        event.target.classList.remove("outer-shadow","hover-in-shadow");
        // hide navtigation menu
        hideNavMenu();
      }
      else{
        let navItems = navMenu.querySelectorAll(".link-item");
        navItems.forEach((item) =>{
          if(hash === item.hash){
            // activate new navigation menu 'link-item'
            item.classList.add("active", "inner-shadow");
            item.classList.remove("outer-shadow", "hover-in-shadow");
        }
      })
      fadeOutEffect();
      }
      // add hash(#) to url
      window.location.hash = hash;
      }
    }
  })

})();

window.addEventListener("load", () =>{
  // preloader
  document.querySelector(".preloader").classList.add("fadeout");
  setTimeout(()=>{
    document.querySelector(".preloader").style.display="none";
  }, 600)
})