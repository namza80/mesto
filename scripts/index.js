const buttonOpenPopup = document.querySelector('.profile__edit-btn');
const buttonClosePopup = document.querySelector('.popup__close-img');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__input');
let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');

function profileCopyInput() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  popupOpen()
}

const popupOpen = function() {
  popup.classList.add("popup_is-opened");
};

const popupClose = function() {
  popup.classList.remove("popup_is-opened");
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  popupClose();
}

buttonOpenPopup.addEventListener("click", popupOpen);
buttonClosePopup.addEventListener("click", popupClose);
formElement.addEventListener('submit', formSubmitHandler);
buttonOpenPopup.addEventListener('click', profileCopyInput);

// addEventListener('submit', function() {
//   buttonClosePopup.click();
// });

// // const popupToggle = () => {
//   const popupToggle = function() {
//     popup.classList.toggle("popup_is-opened");
//   };

//   buttonOpenPopup.addEventListener("click", popupToggle);
//   buttonClosePopup.addEventListener("click", popupToggle);

