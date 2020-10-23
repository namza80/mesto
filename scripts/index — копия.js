// popup
const popupEditProfile = document.querySelector('.popup_edit-profile');

// popup open button
const popupOpenProfile = document.querySelector('.profile_btn-open');

// popup close button
const popupCloseProfile = popupEditProfile.querySelector('.popup__close-img');

// page Profile
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');

// popup form Profile
const popupFormProfile = document.querySelector('.popup__input_edit');

// popup input Profile
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_job');

// popup open Profile
const popupOpenEdit = function() {
  popupEditProfile.classList.add("popup_is-opened");
};
const popupCloseEdit = function() {
  popupEditProfile.classList.remove("popup_is-opened");
};

// get text to input Edit
function getInputEdit() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  popupOpenEdit();
}

// get text to Profile
function formSubmitHandler(evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  popupCloseEdit();
}

//event handler popup-edit
popupOpenProfile.addEventListener('click', popupOpenEdit);
popupCloseProfile.addEventListener('click', popupCloseEdit);

popupFormProfile.addEventListener('submit', formSubmitHandler);
popupOpenProfile.addEventListener('click', getInputEdit);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// Мой вариант
// initialCards.forEach(function(item) {

// const initialCardsLink = item.link;
// const initialCardsName = item.name;

// // Получаем шаблон карточки
// const cardTemplate = document.querySelector('#element-clone').content;
// // Это вроде как контейнер для карточек
// const cardContainer = document.querySelector('.elements__lst');

// // клонируем содержимое тега template
// const cardElement = cardTemplate.cloneNode(true);

// // наполняем содержимым
// cardElement.querySelector('.elements__item').src = initialCardsLink;
// cardElement.querySelector('.elements__caption-ellipsis').textContent = initialCardsName;

// // отображаем на странице
// cardContainer.prepend(cardElement);
// });

// Вариант из вебинара
  const cardTemplate = document.querySelector('.element-clone');
  const cardContainer = document.querySelector('.elements__lst');
  const addCardButton = document.querySelector('.popup__input-btn_action_add');
  const popupAddCard = document.querySelector('.popup_add-cards');
  const popupAddOpen = document.querySelector('.profile__add-btn');
  const formPopupCards = document.querySelector('.popup__input_add');
  const titleInput = document.querySelector('.popup__input-add_type_text');
  const urlInput = document.querySelector('.popup__input-add_type_url');
  const popupAddClose = popupAddCard.querySelector('.popup__close-img');

  // popup open Cards
const popupOpenAdd = function() {
  popupAddCard.classList.add("popup_is-opened");
};
const popupCloseAdd = function() {
  popupAddCard.classList.remove("popup_is-opened");
};

  //event handler popup-add
  popupAddOpen.addEventListener('click', popupOpenAdd);
  popupAddClose.addEventListener('click', popupCloseAdd);

  initialCards.forEach((item) => {
  const cardElement = cardTemplate.cloneNode(true).content;
  const initialCardsLink = cardElement.querySelector('.elements__item');
  const initialCardsName = cardElement.querySelector('.elements__caption-ellipsis');

  initialCardsLink.src = item.link;
  initialCardsName.textContent = item.name;

  cardContainer.prepend(cardElement);
  });

// Привязать слушателей
// создать функцию для зщзгз
  const bindListeners = () => {
    addCardButton.addEventListener('click', popupOpenAdd)
  }

  bindListeners();
