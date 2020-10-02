const buttonOpenPopup = document.querySelector('.profile__edit-btn')
const buttonClosePopup = document.querySelector('.popup__close-img')
const popup = document.querySelector('.popup__edit')

const popupToggle = () => {
  popup.classList.toggle("popup_is-opened")
}

buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)

let editSaveButton = document.querySelector('.popup__input-btn')
let newName = document.querySelector('.profile__title')
let newJob = document.querySelector('.profile__subtitle')


function addNewName() {
  let nameInput = document.querySelector('.popup__input-text_type_name')
  let jobInput = document.querySelector('.popup__input-text_type_job')
newJob.textContent = jobInput.value
newName.textContent = nameInput.value
}
editSaveButton.addEventListener('click', addNewName)
