import { Button } from "./Button";

export function Card({task, deleteHandler}) {



  return (
    <div >
        <p>{task.name}</p>
        <p>{task.description}</p>
        <p>{task.status}</p>
        <Button name={"Delete"} type="button" handleClick={()=> {
            deleteHandler(task.id)
        }}/>
        
    </div>
  )
}

