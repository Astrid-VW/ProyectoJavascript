import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard, AhorcadoPage } from "../pages";


export const initControler = (pagesRender) => {
  
    switch (pagesRender) {
      case undefined:
        localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
        break;
      case "Pokemon":
        PrintPokemonPage();
        break;
      case "Dashboard":
        printTemplateDashboard();
        break;
      case "Topo":
        "PrintTopoPage()";
        break;
      case "Login":
        Login();
        break;
      case "ahorcadoGame":
        AhorcadoPage();
        break; 
    }
  };

  // route.js ---> utils/route.js

