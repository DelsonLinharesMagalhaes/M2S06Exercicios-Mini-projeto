import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo.jsx'
import Task from './components/Task'
import Formulario from './components/Formulario'


function App() {

  const [ListaTarefas, setListaTarefas] = useState(['Alimentar cachorro',
                                                'Passear com cachorro',
                                                'Tomar café',
                                                'Escovar os dentes',
                                                'Tomar banho'])

  useEffect(()=> {document.title=`${ListaTarefas.length} cadastradas`})

    const novaTarefaCriada = (novaTarefa) =>{setListaTarefas([...ListaTarefas, novaTarefa])}
    const limparTarefas = () => {setListaTarefas([])}

    return (
      <>
        <h1>Exercícios semana 6</h1>
          <Formulario handleSubmit={novaTarefaCriada}/>
          <Task ListaTarefas={ListaTarefas}/>
          <button onClick={limparTarefas}>Limpar Tarefas</button>
      </>
    )

}

export default App
