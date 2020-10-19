//popups
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-cards');

//popups open buttons
const popupEditOpen = document.querySelector('.profile__edit-btn');
const popupAddOpen = document.querySelector('.profile__add-button');

//popups close buttons
const popupEditClose = popupEdit.querySelector('.popup__close-img');
const popupAddClose = popupAdd.querySelector('.popup__close-img');

let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');

//popup edit profile
const popupOpenEdit = function() {
  popupEdit.classList.add("popup_is-opened");
};
const popupCloseEdit = function() {
  popupEdit.classList.remove("popup_is-opened");
};

//popup add cards
const popupOpenAdd = function() {
  popupAdd.classList.add("popup_is-opened");
};
const popupCloseAdd = function() {
  popupAdd.classList.remove("popup_is-opened");
};

//replace text popup edit
function profileCopyInput() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  popupOpenEdit();
}

//replace text popup edit
function formSubmitHandler (evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  popupCloseEdit();
}

popupEditOpen.addEventListener('click', popupOpenEdit);
popupEditClose.addEventListener('click', popupCloseEdit);

popupAddOpen.addEventListener('click', popupOpenAdd);
popupAddClose.addEventListener('click', popupCloseAdd);

formElement.addEventListener('submit', formSubmitHandler);
popupEditOpen.addEventListener('click', profileCopyInput);

// addEventListener('submit', function() {
//   popupEditClose.click();
// });

// // const popupToggle = () => {
//   const popupToggle = function() {
//     popup.classList.toggle("popup_is-opened");
//   };

//   popupEditOpen.addEventListener("click", popupToggle);
//   popupEditClose.addEventListener("click", popupToggle);
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

initialCards.forEach(function(item) {


const initialCardsLink = item.link;
const initialCardsName = item.name;

// Получаем шаблон карточки
const userTemplate = document.querySelector('#element-clone').content;
// Это вроде как контейнер для карточек
const usersOnline = document.querySelector('.elements__lst');

// клонируем содержимое тега template
const userElement = userTemplate.cloneNode(true);

// наполняем содержимым
userElement.querySelector('.elements__item').src = initialCardsLink;
userElement.querySelector('.elements__caption-ellipsis').textContent = initialCardsName;

// отображаем на странице
usersOnline.prepend(userElement);
});




