import { Button } from "./Button";
import { useContext } from 'react'
import { Context } from '../context/Context'

export function Card({task}) {

  const {deleteHandler} = useContext(Context)

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

