import { useState } from "react"

function Formulario({handleSubmit}){

    const [tarefa, setTarefa] = useState();
    const handleTarefaChange = (event) => {setTarefa(event.target.value)}

    const criarTarefa = (event) => { event.preventDefault(), handleSubmit(tarefa)}

    

    return(
        <form onSubmit={criarTarefa}>
            <input value={tarefa} onChange={handleTarefaChange} placeholder="Digite uma nova tarefa" type="text"/>
            <button type='submit'>Criar Tarefa</button>
        </form>
    )
}

export default Formulario