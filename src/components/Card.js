export default class Card {
  constructor(data, templateGallery, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateGallery = templateGallery;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const galleryElement = this._templateGallery.cloneNode(true);
    return galleryElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._galleryName = this._element.querySelector(".gallery__caption");
    this._galleryImage = this._element.querySelector(".gallery__image");
    this._galleryName.textContent = this._name;
    this._galleryImage.src = this._link;
    this._galleryImage.alt = this._name;
    this._deleteButton = this._element.querySelector(".gallery__bin");
    this._likeButton = this._element.querySelector(".gallery__like");
    this._setEventListeners();
    return this._element;
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _toggleLike() {
    this._likeButton.classList.toggle("gallery__like_active");
  };
  
  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });    
    this._likeButton.addEventListener("click", () => {
      this._toggleLike();
    });
    this._galleryImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}