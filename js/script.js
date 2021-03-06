let buttonPopup = document.querySelector(".popup-button");
let popup = document.querySelector(".popup");
let form = popup.querySelector(".form");
let dateArrival = popup.querySelector(".arrival-date");
let dateDeparture = popup.querySelector(".date-departure");

let adults = popup.querySelector(".guests-adults");
let adiltsMinus = popup.querySelector(".adults-minus");
let adiltsPlus = popup.querySelector(".adults-plus");
let children = popup.querySelector(".guests-children");
let childrenMinus = popup.querySelector(".children-minus");
let childrenPlus = popup.querySelector(".children-plus");

let isStorageSupport = true;
let storageArrival = "";
let storageDeparture = "";

popup.classList.add("popup--close");

try {
    storageArrival = localStorage.getItem("dateArrival");
    storageDeparture = localStorage.getItem("dateDeparture");
} catch (err) {
    isStorageSupport = false;
}

buttonPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("popup--close");
    if (storageArrival) {
        dateArrival.value = storageArrival;
        dateDeparture.focus();

        if (storageDeparture) {
            dateDeparture.value = storageDeparture;
            adults.focus();
        } else {
            dateDeparture.focus();
        }

    } else {
        dateArrival.focus();
    }

});

form.addEventListener("submit", function(evt) {
    if (!dateArrival.value || !dateDeparture.value || adults.value === "0") {
        evt.preventDefault();
        popup.classList.remove("popup--error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup--error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("dateArrival", dateArrival.value);
            localStorage.setItem("dateDeparture", dateDeparture.value);
        }
    }
});

// + и - //
adiltsMinus.addEventListener("click", function(evt) {
    if (adults.value > 0) {
        adults.value--;
    } else {
        adults.value = 0;
    }
});

adiltsPlus.addEventListener("click", function(evt) {
    adults.value++;
});

childrenMinus.addEventListener("click", function(evt) {
    if (children.value > 0) {
        children.value--;
    } else {
        children.value = 0;
    }
});

childrenPlus.addEventListener("click", function(evt) {
    children.value++;
});