import React from 'react';
import Router from './routes';
import './global.css'



function App() {

  return (
    <div> 
      
      <Router></Router>

    </div>
     );
}  export default App;



/** o React usa o conceito de estado para alterar valor de um campo { sempre desetru.. {usestate} }
 * 
 * ex: 
function App() {

const [contador,setcontador]=useState(0);

function addValor(){
 setcontador(contador+1);
  console.log(contador);
}


  return (
    <div> 
       <Header>Contador : { contador }</Header>
       <button onClick={addValor}>Incrementar</button> 
    </div>
     );
}

 * 
 */