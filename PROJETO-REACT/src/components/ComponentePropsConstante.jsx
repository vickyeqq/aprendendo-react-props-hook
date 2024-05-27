function ComponenteConstante(props){
    return(
        <>
            <h2>ComponenteConstante</h2>
            <p>Informação enviada pelo componente pai:    
               {props.linguagem}</p>
        </>
    )
}
export default ComponenteConstante