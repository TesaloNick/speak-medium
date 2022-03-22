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
}