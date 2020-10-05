const buttonOpenPopup = document.querySelector('.profile__edit-btn');
const buttonClosePopup = document.querySelector('.popup__close-img');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__input');
let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');


  buttonOpenPopup.onclick = function() {
  console.log('клик');
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
};

// const popupToggle = () => {
  const popupToggle = function() {
  popup.classList.toggle("popup_is-opened");
};

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);

// оставил для себя как пример, я ведь учусь)
// addEventListener('submit', function() {
//   buttonClosePopup.click();
// });

