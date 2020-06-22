var buttonPopup = document.querySelector(".popup__open");
var popup = document.querySelector(".search-form");
var dateArrival = popup.querySelector(".arrival-date");
var dateDeparture = popup.querySelector(".date-departure");
var form = popup.querySelector(".form");

buttonPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form--close");
    dateArrival.focus();
});