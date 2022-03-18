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