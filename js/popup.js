var mapOpen = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
  if (mapPopup) {
    var mapClose = mapPopup.querySelector(".modal-content-close");

    mapOpen.addEventListener("click", function(event) {
      event.preventDefault();
      mapPopup.classList.add("modal-content-show");
    }); 
    mapClose.addEventListener("click", function(event) {
      event.preventDefault();
      mapPopup.classList.remove("modal-content-show");
    }); 
  }

var writeUsOpen = document.querySelector(".btn-contacts");
var writeUsPopup = document.querySelector(".modal-write-us");
  if (writeUsPopup) {
    var writeUsClose = writeUsPopup.querySelector(".modal-content-close");
    var writeUsLogin = writeUsPopup.querySelector("[name=login]");
    var writeUsMail = writeUsPopup.querySelector("[name=mail]");
    var writeUsText = writeUsPopup.querySelector("[name=text]");
    var writeUsForm = writeUsPopup.querySelector("form");

    writeUsOpen.addEventListener("click", function(event) {
      event.preventDefault();
      writeUsPopup.classList.add("modal-content-show");
      writeUsLogin.focus();
    });

    writeUsClose.addEventListener("click", function(event) {
    	event.preventDefault();
    	writeUsPopup.classList.remove("modal-content-show");
    }); 

    writeUsForm.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("writeUsLogin.value");
      console.log("writeUsMail.value");
      console.log("writeUsText.value");
      if (!writeUsLogin.value || !writeUsMail.value || !writeUsText.value) {
         alert("Нужно заполнить поля");
      } 
      else { console.log("Отправляем форму");
      }
    });
  }

var modalCartOpen = document.querySelectorAll(".product-item .buy-btn");
var modalCartPopup = document.querySelector(".modal-cart");
  if (modalCartPopup) {
    var modalCartClose = modalCartPopup.querySelector(".modal-content-close");

    for (var i = 0; i < modalCartOpen.length; i++) {
      modalCartOpen[i].addEventListener("click", function(event) {
        event.preventDefault();
        modalCartPopup.classList.add("modal-content-show");
      });
    }
    modalCartClose.addEventListener("click", function(event) {
    	event.preventDefault();
    	modalCartPopup.classList.remove("modal-content-show");
    }); 
  }
