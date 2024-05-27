// // Passando a constante "linguagem" para o componente filho
// import ComponentePropsConstante from "./components/ComponentePropsConstante"
// function App() {
// const linguagem = "Javascript"
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <p>Linguagem: {linguagem}</p>
//       <ComponentePropsConstante linguagem={linguagem}/>
//     </>
//   )
// }
// export default App

// // Passando a função "olá" para o componente filho 
// import ComponenteFuncao from "./components/ComponentePropsFuncao"
// function App() {
//   const linguagem = "Javascript"
//   function ola(){
//     alert("Este olá veio do componente App.")
//   }
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <p>Linguagem: {linguagem}</p>
//       <ComponentePropsFuncao linguagem={linguagem} ola={ola}/>
//     </>
//   );
// }
// export default App;

// // Passando o componente inteiro para o componente filho
// import ComponentePropsInteiro from "./components/ComponentePropsInteiro"
// function App() {
//   const linguagem = "Javascript"
//   function ola(){
//     alert("Este olá veio do componente App.")
//   }
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <p>Linguagem: {linguagem}</p>
//       <ComponentePropsInteiro
//      linguagem={linguagem} ola={ola}>
//         <ul>
//           <li>Monitor</li>
//           <li>Teclado</li>
//           <li>Mouse</li>
//         </ul>
//       </ComponentePropsInteiro>  
//     </>
//   );
// }
// export default App;

// // Usando Hook useState para ver a váriavel aumentar
// import { useState } from "react";
// import ComponenteHookuseState from './components/ComponenteHookuseState'
// function App() {
//   const [contState, setContState] = useState(0)
//   var contVar = 0
//   function aumentar(){
//     setContState(contState + 1)
//     ++contVar
//   }
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <p>Valor do State: {contState}</p>
//       <p>Valor da variável: {contVar}</p>
//       <button onClick={aumentar}>Aumentar</button>
//       <ComponenteHookuseState contState={contState}/>
        
//     </>
//   );
// }
// export default App;

// // Função aumentar no componente filho, esta é a única forma de um componente filho conseguir alterar um valor no componente pai recebendo a função vinda dele
// import { useState } from "react";
// import ComponenteHookuseStateAumentarPai from './components/ComponenteHookuseStateAumentarPai'
// function App() {
//   const [contState, setContState] = useState(0)
//   var contVar = 0
//   function aumentar(){
//     setContState(contState + 1)
//     ++contVar
//   }
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <p>Valor do State: {contState}</p>
//       <p>Valor da variável: {contVar}</p>
//       <button onClick={aumentar}>Aumentar</button>
//       <ComponenteHookuseStateAumentarPai
//      contState={contState} aumentar={aumentar}/>  
//     </>
//   );
// }
// export default App;

// // Usando o Hook useEffect para sinalizar alteração 
// import { useEffect, useState } from "react";
// function App() {
//   const [contState, setContState] = useState(0)
//   function aumentar(){
//     setContState(contState + 1)
//   }
//   useEffect(()=>{
//     console.log("Em qualquer alteração de estado eu vou aparecer!!!")    
//   })
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <button onClick={aumentar}>Aumentar</button>         
//     </>
//   );
// }
// export default App;

// // Usando o Hook useEffect para sinalizar quando o componente é criado 
// import { useEffect, useState } from "react";
// function App() {
//   const [contState, setContState] = useState(0)
//   function aumentar(){
//     setContState(contState + 1)
//   }
//   useEffect(()=>{
//     console.log("Em qualquer alteração de estado eu vou aparecer!!!")    
//   })
//   useEffect(()=>{
//     console.log("somente quando o componente é montado eu vou aparecer!!!")
//   },[])
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <button onClick={aumentar}>Aumentar</button>         
//     </>
//   );
// }
// export default App;

// // Usando o Hook useEffect para sinalizar quando um valor específico é alterado
// import { useEffect, useState } from "react";
// function App() {
//   const [contState, setContState] = useState(0)
//   const [cont2, setCont2] = useState(0)
//   function aumentar(){
//     setContState(contState + 1)
//   }
//   function aumentar2(){
//     setCont2(cont2 + 1)
//   }
//   useEffect(()=>{
//     console.log("Em qualquer alteração de estado eu vou aparecer!!!")    
//   })
//   useEffect(()=>{
//     console.log("somente quando o componente é montado eu vou aparecer!!!")
//   },[])
//   useEffect(()=>{
//     if(cont2 != 0){
//       console.log("somente quando o cont2 é alterado eu vou aparecer!!!")
//     }
//   },[cont2])
//   return (
//     <>
//       <h1>Nosso primeiro App</h1>
//       <p>ContState = {contState}</p>
//       <p>Cont2 = {cont2}</p>
//       <button onClick={aumentar}>Aumentar</button>
//    <button onClick={aumentar2}>Aumentar 2</button>         
//     </>
//   );
// }
// export default App;

// Usando o Hook useEffect para sinalizar quando um componente é excluído
import { useEffect, useState } from "react";
import ComponenteHookuseEffectExclusao from "./components/ComponenteHookuseEffectExclusao";
function App() {
  const [contState, setContState] = useState(0)
  const [cont2, setCont2] = useState(0)
  const [comp1, setComp1] = useState(false)
  function aumentar(){
    setContState(contState + 1)
  }
  function aumentar2(){
    setCont2(cont2 + 1)
  }
  useEffect(()=>{
    console.log("Em qualquer alteração de estado eu vou aparecer!!!")    
  })
  useEffect(()=>{
    console.log("somente quando o componente é montado eu vou aparecer!!!")
  },[])
  useEffect(()=>{
    if(cont2 != 0){
      console.log("somente quando o cont2 é alterado eu vou aparecer!!!")
    }
  },[cont2])
  return (
    <>
      <h1>Nosso primeiro App</h1>
      <p>ContState = {contState}</p>
      <p>Cont2 = {cont2}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={aumentar2}>Aumentar 2</button>
      <br/><br/>
      {comp1 === true ? <ComponenteHookuseEffectExclusao/> : ''}
      <button onClick={()=>setComp1(!comp1)}>
        {comp1 === true ? 'Remover' : 'Criar'}
      </button>
    </>
  );
}
export default App;
