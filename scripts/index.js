const buttonOpenPopup = document.querySelector('.profile__edit-btn');
const buttonClosePopup = document.querySelector('.popup__close-img');
const popup = document.querySelector('.popup');
// let editSaveForm = document.querySelector('.popup__input');
let editSaveButton = document.querySelector('.popup__input-btn');
let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
// let nameInput = document.querySelector('.popup__input-text_type_name');
// let jobInput = document.querySelector('.popup__input-text_type_job');

// const popupToggle = () => {
  const popupToggle = function() {
  popup.classList.toggle("popup_is-opened");
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);

// function addNewName() {
//   evt.preventDefault();
//   newJob.textContent = jobInput.value;
//   newName.textContent = nameInput.value;
// }
// editSaveButton.addEventListener('click', addNewName);



// Находим форму в DOM
let formElement = document.querySelector('.popup__input');// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
												// О том, как это делать, расскажем позже.

	// Находим поля формы в DOM
	let nameInput = document.querySelector('.popup__input-text_type_name');
	let jobInput = document.querySelector('.popup__input-text_type_job');

	// Получите значение полей из свойства value

	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
