import { useState, useRef } from "react"

function Formulario({handleSubmit}){

    const [tarefa, setTarefa] = useState();
    const [error, setError] = useState();
    const inputRef = useRef(null);
    const handleTarefaChange = (event) => {setTarefa(event.target.value)}

    const criarTarefa = (event) => { event.preventDefault();
        tarefa.trim() === "" ? (setError("O campo não pode ser vazio"), inputRef.current.focus()): null;
        handleSubmit(tarefa)
        setTarefa("");
        setError("");
    }

    

    return(
        <form onSubmit={criarTarefa}>
            <input value={tarefa} onChange={handleTarefaChange} placeholder="Digite uma nova tarefa" type="text" ref={inputRef}/>
            {error&&<div>{error}</div>}
            <button type='submit'>Criar Tarefa</button>
        </form>
    )
}

export default Formulario


