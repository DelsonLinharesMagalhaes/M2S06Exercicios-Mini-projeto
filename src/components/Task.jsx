import React from "react";
import Formulario from "./Formulario";

function Task({tarefas}){    

    return(
        <div>
            <ol>
                {tarefas.map(item=>{
                    return <li key={item}>{item}</li>
                })}
            </ol>        
        </div> )   
}
export default Task