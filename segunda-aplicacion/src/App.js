import './App.css';

function App() {
  const elemento=<h1 className="centrar-titulo">Hola alumnos</h1>
  const elemento2=suma(7, 5);
  // Para retornar mas de un elemento necesito si o si un nodo padre que contenga a los contenedores hijos 
  return <div>
            <div>{elemento}</div>
            <div>{elemento2}</div>
          </div>
}

// Esto no es un componente ya que no devuelve un elemento JSX
function suma(a, b) {
  return a + b;
}

export default App;
