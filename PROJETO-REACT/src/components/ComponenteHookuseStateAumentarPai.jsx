// Função aumentar no componente filho, esta é a única forma de um componente filho conseguir alterar um valor no componente pai recebendo a função vinda dele

function ComponenteHookuseStateAumentarPai(props){
    return(
        <>
            <h2>Componente Hook useState Aumenta Componente Pai</h2>
            <p>Valor do contState enviado por props: 
                {props.contState}</p>
            <button onClick={props.aumentar}>Aumentar</button>
        </>
    )
}
export default ComponenteHookuseStateAumentarPai
