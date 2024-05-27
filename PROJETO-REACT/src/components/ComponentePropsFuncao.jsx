function ComponentePropsFuncao(props){
    return(
        <>
            <h2>Componente Função</h2>
            <p>Informação enviada pelo componente pai: 
              {props.linguagem}</p>
           <button onClick={props.ola}>Olá do App</button>
        </>
    )
}
export default ComponentePropsFuncao