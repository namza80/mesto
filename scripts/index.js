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

// popup
const popupEditProfile = document.querySelector('.popup_edit-profile');
// popup open-close Profile
const popupOpenProfile = document.querySelector('.profile_btn-open-edit');
const popupCloseProfile = popupEditProfile.querySelector('.popup__btn-close');
// popup form-input Profile
const popupFormProfile = popupEditProfile.querySelector('.popup__input_edit');
const inputName = popupFormProfile.querySelector('.popup__input-text_type_name');
const inputJob = popupFormProfile.querySelector('.popup__input-text_type_job');
// page Profile
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');

// popup
const popupAddCard = document.querySelector('.popup_add-cards');
// popup open-close Cards
const popupOpenCard = document.querySelector('.profile_btn-open-add');
const popupCloseCard = popupAddCard.querySelector('.popup__btn-close');
// popup add Cads button
const addCardButton = document.querySelector('.popup__input-btn_action_add');
// popup form-input Cards
const popupFormCards = popupAddCard.querySelector('.popup__input_add');
const inputTitle = popupFormCards.querySelector('.popup__input-add_type_text');
const inputUrl = popupFormCards.querySelector('.popup__input-add_type_url');

// template cards
const cardTemplate = document.querySelector('.element-clone');
const cardContainer = document.querySelector('.elements__lst');

// popup toggle
// const togglePopup = function (popup) {
//   popup.classList.toggle('popup_is-opened')
// }

// popupOpenProfile.addEventListener('click', function () {
//   togglePopup(popupEditProfile)
// })

// popupOpenCard.addEventListener('click', function () {
//   togglePopup(popupAddCard)
// })

// popupCloseProfile.addEventListener('click', function () {
//   togglePopup(popupEditProfile)
// })

// popupCloseCard.addEventListener('click', function () {
//   togglePopup(popupAddCard)
// })

// get text to input Edit
function getInputEdit() {
  inputName.value = newName.textContent;
  inputJob.value = newJob.textContent;
  popupOpenEdit();
}

// get text to Profile
function formSubmitHandler(evt) {
  evt.preventDefault();
  newName.textContent = inputName.value;
  newJob.textContent = inputJob.value;
  popupCloseEdit();
}

// popup open Profile
const popupOpenEdit = function() {
  popupEditProfile.classList.add("popup_is-opened");
};
const popupCloseEdit = function() {
  popupEditProfile.classList.remove("popup_is-opened");
};

// popup open Cards
// const popupOpenAdd = function() {
//   popupAddCard.classList.add("popup_is-opened");
// };
// const popupCloseAdd = function() {
//   popupAddCard.classList.remove("popup_is-opened");
// };

//event handler popup-edit
popupOpenProfile.addEventListener('click', popupOpenEdit);
popupCloseProfile.addEventListener('click', popupCloseEdit);

popupFormProfile.addEventListener('submit', formSubmitHandler);
popupOpenProfile.addEventListener('click', getInputEdit);

//event handler popup-add
// popupOpenCard.addEventListener('click', popupOpenAdd);
// popupCloseCard.addEventListener('click', popupCloseAdd);


// Вариант из вебинара
  initialCards.forEach((item) => {
  const cardElement = cardTemplate.cloneNode(true).content;
  const initialCardsLink = cardElement.querySelector('.elements__item');
  const initialCardsName = cardElement.querySelector('.elements__caption-ellipsis');

  initialCardsLink.src = item.link;
  initialCardsName.textContent = item.name;

  cardContainer.prepend(cardElement);
  });


// создать функцию для popupToggle, передать переменную, добавить модификатор
const togglePopup = (popup) => {
  popup.classList.toggle('popup_is-opened')
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  console.log('submit');
  const cardElement = cardTemplate.cloneNode(true).content;
  const initialCardsLink = cardElement.querySelector('.elements__item');
  const initialCardsName = cardElement.querySelector('.elements__caption-ellipsis');

  initialCardsLink.src = inputUrl.value;
  initialCardsName.textContent = inputTitle.value;

  // const cardItem = getCardItem({
  //   name: inputTitle.value,
  //   link: inputUrl.value
  // });

  cardContainer.prepend(cardElement);
  togglePopup(popupAddCard);
};

// Собрать карточку - конструктор
// Объект cardDetails {name: '', link: ''}
// const getCardItem = (cardDetails) => {
//   const cardElement = cardTemplate.cloneNode(true).content;
//   const initialCardsLink = cardElement.querySelector('.elements__item');
//   const initialCardsName = cardElement.querySelector('.elements__caption-ellipsis');

//   initialCardsLink.src = cardDetails.inputUrl;
//   initialCardsName.textContent = cardDetails.inputTitle;

//   return cardElement;
// }
// console.log(getCardItem({name: '21', link: '211'}));

  const bindListeners = () => {
    popupOpenCard.addEventListener('click', () => togglePopup(popupAddCard));
    popupCloseCard.addEventListener('click', () => togglePopup(popupAddCard));
    popupFormCards.addEventListener('submit', handleCardFormSubmit);
    // popupOpenCard.addEventListener('click', () => {
    //   togglePopup(popupAddCard);
    // });
    // popupCloseCard.addEventListener('click', () => {
    //   togglePopup(popupAddCard);
    // });
    // popupFormCards.addEventListener('submit', {
    //   handleCardFormSubmit
    // });
  };

  bindListeners();








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
