import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo.jsx'
import Task from './components/Task'
import Formulario from './components/Formulario'


function App() {

  const ListaTarefas = ['Alimentar cachorro','Passear com cachorro','Tomar café', 'Escovar os dentes','Tomar banho']

    return (
      <>
        <h1>Exercícios semana 6</h1>
          <Formulario />
          <Task tarefas={ListaTarefas}/>
      </>
    )

}

export default App
