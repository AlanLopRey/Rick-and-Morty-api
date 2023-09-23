//!Paso 1
// * traer el input de busqueda
const inputForSearch = document.getElementById("txt-character");

// * traer el contenedor donde se van a renderizar las canvasCaptions?

const containerCards = document.getElementById("container-cards");

const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";
//! paso 3
// * utilizar el metodo fetch
//?     + conocer rapidApi
//?     + conocer Postman
// metodo fetch para cargar las primeras cards
// async await
// * utilizar la funcion fetch para crear las cards
// * filtrar personajes por el nombre

const getApi = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  //return = array
  return data.results;
};

//! paso 2
// * Crear una funcion encargada de crear las cards dinamicamente
const createCard = (character) => {
  const card = document.createElement("div");
  card.classList.add("card-character");

  //? img
  const imgCard = document.createElement("img");
  imgCard.src = character.image;
  imgCard.alt = character.name;
  imgCard.classList.add("sect__img");

  //? Description of the card
  const descriptionCard = document.createElement("div");
  descriptionCard.classList.add("description-card");
  //? ELements of description card
  const nameCharacter = document.createElement("h2");
  nameCharacter.classList.add("description__h2");
  nameCharacter.textContent = character.name;
  const genderCharacter = document.createElement("p");
  genderCharacter.classList.add("description__p");
  genderCharacter.textContent = "Gender: " + character.gender;

  //! Append the elements

  card.appendChild(imgCard);
  card.appendChild(descriptionCard);
  descriptionCard.appendChild(nameCharacter);
  descriptionCard.appendChild(genderCharacter);

  //! Add to the container

  containerCards.appendChild(card);
};

const generateAllCharacters = async () => {
  const data = await getApi(URL1);
  data.map((character) => createCard(character));
};

//!paso 5

const getCharacterByName = async (e) => {
  containerCards.innerHTML = "";
  const data = await getApi(URL2 + e.target.value);
  data.map((character) => createCard(character));
};

//! paso 4

window.addEventListener("DOMContentLoaded", generateAllCharacters);
inputForSearch.addEventListener("keyup", getCharacterByName);
