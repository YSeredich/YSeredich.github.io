var mapPopup = document.querySelector(".modal-content-map");
if(mapPopup){
    var mapOpen = document.querySelector(".open-map");
    var mapClose = mapPopup.querySelector(".modal-content-close");

    mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
    });

    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (mapPopup.classList.contains("modal-content-show")) {
                mapPopup.classList.remove("modal-content-show");
            }
        }
    });
}
var writePopup = document.querySelector(".modal-content-write-us");
if(writePopup){
    var writeOpen = document.querySelector(".open-writeus");
    var writeClose = writePopup.querySelector(".modal-content-close");
    var writeLogin = writePopup.querySelector(".name-lbl");
    var writeMail = writePopup.querySelector(".mail-lbl");
    var writeLetter = writePopup.querySelector(".mod-user-letter");
    var writeForm = writePopup.querySelector(".write-us");


    writeOpen.addEventListener("click", function(event) {
        event.preventDefault();
        writePopup.classList.add("modal-content-show");
        writeLogin.focus();
    });

    writeClose.addEventListener("click", function(event) {
        event.preventDefault();
        writePopup.classList.remove("modal-content-show");
    });

    writeForm.addEventListener("submit", function(event) {
        if (!(writeLogin.value && writeMail.value && writeLetter.value)) {
          event.preventDefault();
          writePopup.classList.remove("modal-error");
          writePopup.offsetWidth = writePopup.offsetWidth;
          writePopup.classList.add("modal-error");
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (writePopup.classList.contains("modal-content-show")) {
                writePopup.classList.remove("modal-content-show");
            }
        }
    });
}

var cartOpen = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-content-cart-plus");
if(cartPopup){
var cartClose = cartPopup.querySelector(".modal-content-close");

for(var i=0;i<cartOpen.length;i++){
cartOpen[i].addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.add("modal-content-show");
});
    
}

cartClose.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (cartPopup.classList.contains("modal-content-show")) {
            cartPopup.classList.remove("modal-content-show");
        }
    }
});
}