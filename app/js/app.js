// function openMenu() {
//     $(".dropdown-profile").addClass("opened");
//   }

//   function closeMenu() {
//     $(".dropdown-profile").removeClass("opened");
//   }

//   $(".dropdown-menu").click(function () {
//     if ($('.dropdown-profile').hasClass('opened')) {
//       closeMenu()
//     } else {
//       openMenu()
//     }
//   });

const userBtn = document.querySelector(".dropdown-menu");
const dropDown = document.querySelector(".nav");
let menuOpen = false;
userBtn.addEventListener("click", () => {
    if(!menuOpen) {
        dropDown.classList.add("open");
        menuOpen = true;
    } else {
        dropDown.classList.remove("open");
        menuOpen = false;
    }
});
