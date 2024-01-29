
  import { palabras } from "../../global/data/ahorcadoData";
import { comprobarQueTengasLaLetras, createSpanInParrafo, obtener_random } from "../../utils";
import "./Ahorcado.css";
  

  let palabra = ""
  let errores = 0
  let aciertos = 0 
  //! ------------------------------------------------------------------------------
  //? ------------------------------TEMPLATE INICIAL--------------------------------
  //! ------------------------------------------------------------------------------
  const template = () => `
    <div id="AhorcadoContainer">
        <div id="resultado"></div>
        <img
        src= ""
        id="imgAhorcado"/>
        <p id="palabraAhorcado"></p>
        <div id="containerinput">
            <input type="text" maxlength="1" id="inputAhorcado"/>
            <button id="comprobar">comprobar</button>
        </div>
    </div>
  `;
  
  //! ------------------------------------------------------------------------------
  //? ----------------- FUNCION QUE TRAE LOS DATOS DEL CONTEXTO--------------------
  //! ------------------------------------------------------------------------------
  const listener =  () => {

    /** apuntamos al input que tenemos en el template para sacar la letra */
    const inputAhorcado = document.querySelector("#inputAhorcado")

    const button = document.getElementById("comprobar")
    button.addEventListener("click", ()=> {
        const letraInput = inputAhorcado.value
        const index = comprobarQueTengasLaLetras(letraInput, palabra)
        console.log(index) /// es un array con todas las posiciones donde se encuentra la letra en la palabra
       if (index.length != 0 ){
        
            
            const letrasSpan = document.querySelectorAll(".letra")
            index.forEach((posicion, index)=>{
                if((!letrasSpan[posicion].textContent)){letrasSpan[posicion].innerHTML = inputAhorcado.value
                aciertos++
               }


            } 
            )
            if(aciertos === palabra.length ){
                const divResulado = document.getElementById("resultado")
                const h3 = document.createElement("h3")
                h3.textContent = "Has ganado"
                const button = document.createElement("button")
                button.textContent ="Reset Game"
                button.addEventListener("click",()=>{
                    AhorcadoPage()
    
    
                })
    
                divResulado.append(h3, button)
                const buttonResultado = document.getElementById("comprobar")
                buttonResultado.disabled = "true"

            }
       }else{
        // si el array de posicones de la letra a buscar esta vacio, es decir un length es 0 entonces es un fallo en el juego, no has acertado la letra

        errores++
        const imgAhorcado = document.getElementById("imgAhorcado")
        imgAhorcado.src = `img/img${errores}.png`

        if(errores === 7){
            const divResulado = document.getElementById("resultado")
            const h3 = document.createElement("h3")
            h3.textContent = "Has perdido"
            const button = document.createElement("button")
            button.textContent ="Reset Game"
            button.addEventListener("click",()=>{
                AhorcadoPage()


            })

            divResulado.append(h3, button)
            const buttonResultado = document.getElementById("comprobar")
            buttonResultado.disabled = "true"

        }

    





       }
    
    inputAhorcado.value = ""
    
    })
    createSpanInParrafo(palabra)
  }


  
  //! ------------------------------------------------------------------------------
  //? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
  //! ------------------------------------------------------------------------------
  export const AhorcadoPage = () => {
    palabra = ""
    errores = 0
    aciertos = 0 
    document.querySelector("main").innerHTML = template();
    palabra = palabras[obtener_random(0,3)]
    const imgAhorcado = document.getElementById("imgAhorcado")
    imgAhorcado.src = `img/img${errores}.png`

    console.log(palabra)
    listener()

    

};

