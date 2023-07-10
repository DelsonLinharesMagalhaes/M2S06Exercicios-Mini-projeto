import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo'

function App() {

  const tarefas = ['Alimentar cachorro','Passear com cachorro','Tomar café', 'Escovar os dentes','Tomar banho']
    // const tarefas = "TarefasXXXXXXXX"

    return (
      <>
        <h1>Exercícios semana 6</h1>
            <ToDo tarefas={tarefas}/>
      </>
    )

}

export default App
