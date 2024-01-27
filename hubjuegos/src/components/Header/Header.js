
// --- Header.js --------> src/components/Header

import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

//!-------------------------------------------------------------------
//? ------------------1) TEMPLATE ------------------------------------
//!-------------------------------------------------------------------

const template = () => `
  <img
    src="../../../public/logo_ovni.png"
    alt=" navigate to home app"
    id="buttonDashboard" class="logo"
  />
  <nav>
    <img
      src="./randomColor.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="./logOut.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

//!-----------------------------------------------------------------------------------
//? ----------------------- 2 ) Añadir los eventos con sus escuchadores---------------
//!-----------------------------------------------------------------------------------

const addListeners = () => {
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
  const color = changeColorRGB();
  document.body.style.background = color;
  });
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

//!-----------------------------------------------------------------------------------
//? ------------------------------ 3) La funcion que se exporta y que pinta-----------
//!-----------------------------------------------------------------------------------
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};