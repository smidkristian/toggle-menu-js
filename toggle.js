let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarAnch= document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "220px";
    getSidebarTitle.style.opacity = "0.4";

    let arrayLength = getSidebarAnch.length;

    for (var i = 0; i < arrayLength; i++) {
      getSidebarAnch[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {

    getSidebar.style.width = "48px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarAnch.length;

    for (var i = 0; i < arrayLength; i++) {
      getSidebarAnch[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}
