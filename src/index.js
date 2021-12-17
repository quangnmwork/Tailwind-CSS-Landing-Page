const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navbarNav = document.querySelector(".navbar-nav");
const navbarNavItems = document.querySelectorAll(".navbar-nav li");
const navbar = document.querySelector(".navbar-area");
const navbarBrand = document.querySelector(".navbar-brand img");
const scrollLink = document.querySelectorAll(".page-scroll");
const resetNavItems = () => {
  navbarNavItems.forEach(navItems => {
    navItems.classList.remove("active");
  });
};

navbarToggler.addEventListener("click", e => {
  e.preventDefault();
  navbarToggler.classList.toggle("active");
  navbarCollapse.classList.toggle("show");
});

navbarNavItems.forEach(navItem => {
  navItem.addEventListener("click", e => {
    e.preventDefault();
    resetNavItems();
    navItem.classList.add("active");
  });
});
console.log($(".testimonial-active"));
$(".testimonial-active").slick({
  dots: true,
  speed: 800,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
window.addEventListener("scroll", function (event) {
  let top = this.scrollY;

  if (top > 100) {
    navbar.classList.add("sticky");
    navbarBrand.src = "./../image/logo-2.svg";
  } else {
    navbar.classList.position = "absolute";
    navbar.classList.remove("sticky");
    navbarBrand.src = "./../image/logo.svg";
  }
});
window.addEventListener("scroll", function (event) {
  let top = this.scrollY;
  if (top >= 0 && top < 1100) {
    resetNavItems();
    navbarNavItems[0].classList.add("active");
  } else if (top >= 1100 && top < 1800) {
    resetNavItems();
    navbarNavItems[1].classList.add("active");
  } else if (top >= 1800 && top < 3500) {
    resetNavItems();
    navbarNavItems[2].classList.add("active");
  } else if (top >= 3500 && top < 4200) {
    resetNavItems();
    navbarNavItems[3].classList.add("active");
  } else if (top >= 4200 && top < 5700) {
    resetNavItems();
    navbarNavItems[4].classList.add("active");
  } else if (top >= 5700) {
    resetNavItems();
    navbarNavItems[5].classList.add("active");
  }
});
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});

//Animate the scroll to yop
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1500
  );
});

navbarNavItems[0].addEventListener("click", () => {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
navbarNavItems[1].addEventListener("click", () => {
  document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
});
navbarNavItems[2].addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
navbarNavItems[3].addEventListener("click", () => {
  document.querySelector("#facts").scrollIntoView({ behavior: "smooth" });
});
navbarNavItems[4].addEventListener("click", () => {
  document.querySelector("#team").scrollIntoView({ behavior: "smooth" });
});
navbarNavItems[5].addEventListener("click", () => {
  document.querySelector("#blog").scrollIntoView({ behavior: "smooth" });
});
