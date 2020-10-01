console.log("Hello world!");

const buttonOpenPopup = document.querySelector('.profile__edit-btn')
const buttonClosePopup = document.querySelector('.popup__close-img')
const popup = document.querySelector('.popup__edit')

const popupToggle = () => {
  popup.classList.toggle("popup_is-opened")
}

buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)


