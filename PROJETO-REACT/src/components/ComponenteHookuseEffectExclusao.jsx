import { useEffect } from "react"
function ComponenteHookuseEffectExclusao(){
    useEffect(()=>{
        return ()=>console.log("Me Removeram.......")
    },[])
    useEffect(()=>{
        console.log("Fui Criado!!!!")
    },[])
    return(
        <>
            <h2>Componente Hook useEffect em caso de Exclusão de componente</h2>
            
        </>
    )
}
export default ComponenteHookuseEffectExclusao