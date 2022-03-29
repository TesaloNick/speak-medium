var ddData = [
  {
    text: "EN",
    value: 1,
    selected: true,
    imageSrc: "../img/header/flags/gb.svg"
  },
  {
    text: "AD",
    value: 2,
    selected: false,
    imageSrc: "../img/header/flags/ad.svg"
  },
  {
    text: "RU",
    value: 3,
    selected: false,
    imageSrc: "../img/header/flags/ru.svg"
  },
  {
    text: "BY",
    value: 4,
    selected: false,
    imageSrc: "../img/header/flags/by.svg"
  },
  {
    text: "IS",
    value: 5,
    selected: false,
    imageSrc: "../img/header/flags/yiddish.svg"
  }
];

$('#lan').ddslick({
  data: ddData,
  defaultSelectedIndex: 2,
});

$('.workers__slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

if ($(window).width() <= 900) {
  $('.steps__content-block').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    dots: true,
  });

  let paddingTopDots = 0;
  paddingTopDots = document.querySelector(".order__steps").offsetHeight;
  document.querySelector('.steps__content-block .slick-dots').style = `top: -${paddingTopDots + 50}px`;

  if ($(window).width() <= 450) {
    document.querySelector('.steps__content-block .slick-dots').style = `top: -${paddingTopDots + 30}px`;
  };
}

$('.comments__slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  variableWidth: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      }
    }
  ]
});

//------------------------------------------------------------------------------

const arrowLeft = document.querySelector('.input__arrow-left');
const arrowRight = document.querySelector('.input__arrow-right');
const number = document.querySelector('.sessions__input');
const multiplyNumber = document.querySelector('.input__multiply-number');
const sessionsForm = document.querySelector('.sessions__form');

arrowRight.addEventListener('click', () => {
  number.value++
  multiplyNumber.innerHTML = +number.value * 49;
})

arrowLeft.addEventListener('click', () => {
  if (+number.value > 1) number.value--
  multiplyNumber.innerHTML = +number.value * 49;
})

number.addEventListener('change', () => {
  multiplyNumber.innerHTML = +number.value * 49;
})

sessionsForm.addEventListener('submit', (e) => {
  e.preventDefault()
  multiplyNumber.innerHTML = +number.value * 49;
})

//--------------------------------------------------------------------------------------------

function countup(className) {
  var countBlockTop = $("." + className).offset().top;
  var windowHeight = window.innerHeight;
  var show = true;

  $(window).scroll(function () {
    if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
      show = false;

      $('.' + className).spincrement({
        from: 1,
        duration: 4000,
      });
    }
  })
}

$(function () {
  countup("count", $(".count").text());
  countup("count2", $(".count2").text());
  countup("count3", $(".count3").text());
});

//--------------------------------------------------------------------------------------------

$(function () {
  $(window).scroll(function () {
    var distanceTop = $('.help__title').offset().top;
    console.log(distanceTop, $(window).scrollTop() + window.innerHeight);
    if ($(window).scrollTop() + window.innerHeight > distanceTop) $('.help').addClass('animate');
  });
});