//Dashboard.js ------> src/pages/Dashboard/Dashboard.js

import { initControler } from "../../utils";
import "./Dashboard.css";
import { getInfo } from "../../utils/dataPokemon";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="./pokebola.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="ahorcado">
          <img
            src="./hangman.png"
            alt=" go to ahorcado game"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateMemoryGame">
          <img
            src="./memory-game.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateMemory = document.getElementById("navigateMemoryGame");
  navigateMemory.addEventListener("click", () => {
  initControler("memoryGame");
  })
  const navigateAhorcado = document.getElementById("ahorcado");
  navigateAhorcado.addEventListener("click", () => {
  initControler("ahorcadoGame");
});
};


export const printTemplateDashboard = () => {
  document.querySelector("nav").style.display = "flex";
  document.querySelector(".logo").style.display = "flex";
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();
};

  /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
   */
//--------------------------------------------- LO NUEVO -------------------------
getInfo();
//---------------------------------------------------------------------------------


