import './App.css';
import React, {useState} from "react";

function App() {

  // Definir el estado para almacenar el resultado de la suma
  /* la variable "resultado" almacena el estado actual del componente, la función 
    "setResultado" nos va a permitir modificar el estado de ese componente 
  */
  const [resultado, setResultado] = useState(null);
  const elemento = <h1 className="centrar-titulo">Hola alumnos</h1>
  const botonPulsado = () => {
    const result = suma(7,5);
    setResultado(result);
  }

  // Para retornar mas de un elemento necesito si o si un nodo padre que contenga a los contenedores hijos 
  return <div>
            {/*Para trabajar estilos css dentro del ecosistema de React: 
               En React los estilos se consideran objetos de JS. 
               El elemento "style" de un elemento HTML se pasa como un objeto JS
               Osea, la primer llave es para el código JS y la segunda llave para el 
               objeto JS  */}
            <button onClick={botonPulsado} style={{marginTop:"20px", marginLeft:"20px"}}>Pulsame</button>
            
            <div>{elemento}</div>
            
            {/* en React el "&&" se utilizar para realizar un renderizado condicional osea 
                incluir un componente en el renderizado si se cumple una condición
            */}
            <div>{resultado != null && <h2>{resultado}</h2>}</div>
          </div>
}


// Esto no es un componente ya que no devuelve un elemento JSX
function suma(a, b) {
  return a + b;
}

export default App;
