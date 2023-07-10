import React from "react";

function ToDo({tarefas}){    

    return(
        <div>
            <ol>
                {tarefas.map(item=>{
                    return <li key={item}>{item}</li>
                })}
            </ol>        
        </div> )   
}
export default ToDo