
  import { palabras } from "../../global/data/ahorcadoData";
import { checkCoincidences, createSpanInParrafo, obtener_random } from "../../utils";
import "./Ahorcado.css";
  

  let palabra = ""
  let errores = 0
  let aciertos = 0 
  let inputAhorcado = ""

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
            <button id="comprobar">Comprobar</button>
        </div>
    </div>
  `;
  
  //! ------------------------------------------------------------------------------
  //? ----------------- FUNCION QUE TRAE LOS DATOS DEL CONTEXTO--------------------
  //! ------------------------------------------------------------------------------
  const listener =  () => {

    /** apuntamos al input que tenemos en el template para sacar la letra 
    const inputAhorcado = document.querySelector("#inputAhorcado")*/

    const buttonComprobar = document.getElementById("comprobar")
    buttonComprobar.addEventListener("click", ()=> {
        const letraInput = inputAhorcado.value
        const index = checkCoincidences(letraInput, palabra) //ej: [0,3]
        ///console.log(index) /// nos devolvería un array con todas las posiciones donde se encuentra la letra en la palabra
       if (index.length != 0 ){
        
            
            const letrasSpan = document.querySelectorAll(".letra")
            index.forEach((posicion, index)=>{ // Primera vuelta: posición = 0 e index = [0,3]; segunda vuelta: posición = 3 e index P= [0,3]
                if((!letrasSpan[posicion].textContent)){ // si los espacios (span) están vacíos,
                    letrasSpan[posicion].innerHTML = inputAhorcado.value //entonces, los pinto
                    aciertos++ //
               }

            } 
            )
            if(aciertos === palabra.length ){ // con esta, si el número de aciertos es el mismo que la longitud de la palabra, el juego termina y se muestra un botón para empezar de nuevo
                
                const h3 = document.createElement("h3")
                h3.textContent = "¡Has ganado!"
                const button = document.createElement("button")
                button.textContent ="Empezar de nuevo"
                button.addEventListener("click",()=>{
                    AhorcadoPage()
    
                })
                const divResultado = document.getElementById("resultado")
                divResultado.append(h3, button) //adjuntamos el h3 y el button creado al divResultado
                //const buttonResultado = document.getElementById("comprobar") //también aún bajo la condición de que el número de aciertos sea igual a la longitud de la palabra, debemos convertir el botón de comrpobar, en un botón que pare la función de comprobar para terminar el juego.
                buttonComprobar.disabled = "true" //por eso añadimos .disabled en true.
                inputAhorcado.disabled = "true"

            }
       }else{
        // si el array de posiciones de la letra a buscar esta vacio, es decir el length es = a 0 entonces quiere decir que no has acertado la letra

            errores++
            const imgAhorcado = document.getElementById("imgAhorcado")
            imgAhorcado.src = `img/img${errores}.png`

            if(errores === 7){
                
                const h3 = document.createElement("h3")
                h3.textContent = "Has perdido"
                const button = document.createElement("button")
                button.textContent ="Reset Game"
                button.addEventListener("click",()=>{
                    AhorcadoPage()

                })
                const divResultado = document.getElementById("resultado")
                divResultado.append(h3, button)
                buttonComprobar.disabled = "true" //por eso añadimos .disabled en true.
                inputAhorcado.disabled = "true"

            }
       }
        inputAhorcado.value = "" // terminada la comprobación, se vacía el input y
        inputAhorcado.focus() //volvemos a poner el cursor dentro del input automáticamente
    })
  }

  
  //! ------------------------------------------------------------------------------
  //? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
  //! ------------------------------------------------------------------------------
  export const AhorcadoPage = () => {
    palabra = ""
    errores = 0
    aciertos = 0
    document.querySelector("main").innerHTML = template();
    palabra = palabras[obtener_random(0,8)]
    createSpanInParrafo(palabra)
    const imgAhorcado = document.getElementById("imgAhorcado")
    imgAhorcado.src = `img/img${errores}.png`
    //console.log(palabra)
    listener()
    inputAhorcado = document.querySelector("#inputAhorcado")
    inputAhorcado.focus()

};

