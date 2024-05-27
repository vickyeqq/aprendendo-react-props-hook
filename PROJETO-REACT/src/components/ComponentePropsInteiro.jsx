function ComponentePropsInteiro(props){
    return(
        <>
            <h2>Componente Inteiro</h2>
            <p>Informação enviada pelo componente pai: 
               {props.linguagem}</p>
           <button onClick={props.ola}>Olá do App</button>
            {props.children}
        </>
    )
}
export default ComponentePropsInteiro