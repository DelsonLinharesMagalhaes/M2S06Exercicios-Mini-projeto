import React from "react";
import Formulario from "./Formulario";

function Task({ListaTarefas}){    

    return(
        <div>
            <ol>
                {ListaTarefas.map(item=>{
                    return <li key={item}>{item}</li>
                })}
            </ol>        
        </div> )   
}
export default Task