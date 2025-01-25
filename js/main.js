
// URL de la API de Rick and Morty
const API_URL = "https://rickandmortyapi.com/api/character";

// Elementos del DOM
const itemsList = document.getElementById("items-list");
const selectedCardContainer = document.getElementById("selected-card");

// Función para obtener datos de la API
async function fetchData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    console.log("Datos de la API:", data);

    // La API devuelve los personajes en un array bajo la clave "results"
    return data.results;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Función para renderizar los elementos en el DOM
function renderItems(items) {
  console.log("Elementos a renderizar:", items);
  itemsList.innerHTML = ""; // Limpiamos el contenedor
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Estado: ${item.status}</p>
          <p class="card-text">Especie: ${item.species}</p>
        </div>
      </div>
    `;
    // Añadir evento de clic a cada tarjeta
    card.addEventListener("click", () => selectItem(item));
    itemsList.appendChild(card);
  });
}

// Función para manejar la selección de un elemento
function selectItem(item) {
  // Guardar el elemento seleccionado en localStorage
  localStorage.setItem("selectedItem", JSON.stringify(item));
  // Renderizar la tarjeta seleccionada
  renderSelectedCard(item);
}

// Función para renderizar la tarjeta seleccionada
function renderSelectedCard(item) {
  selectedCardContainer.innerHTML = `
    <div class="card">
      <img src="${item.image}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Estado: ${item.status}</p>
        <p class="card-text">Especie: ${item.species}</p>
      </div>
    </div>
  `;
}

// Función para cargar la tarjeta guardada en localStorage
function loadSelectedCard() {
  const savedItem = localStorage.getItem("selectedItem");
  if (savedItem) {
    const item = JSON.parse(savedItem);
    renderSelectedCard(item);
  }
}

// Inicialización
async function init() {
  console.log("Inicializando...");
  const items = await fetchData();
  if (items) {
    renderItems(items);
    loadSelectedCard();
  }
}

// Llamar a la función de inicialización al cargar la página
init();