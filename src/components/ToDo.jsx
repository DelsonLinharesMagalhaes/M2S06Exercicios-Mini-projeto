import React from "react"


function ToDo({tarefas}){
    

    return(
        <div>
            <ul>
                {tarefas.map(item=>{
                    return <li key={item}>{item}</li>
                })}

            </ul>        
        </div>
    )
}
export default ToDo