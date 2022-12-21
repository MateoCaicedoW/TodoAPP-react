import { Button } from "./Button";
import { useContext } from 'react'
import { Context } from '../context/Context'

export function Card({task}) {

  const {deleteHandler, completeTask} = useContext(Context)

  const classStatus = task.status === "completed" ? "text-green-400" : "text-red-400"
  return (
    <div className="bg-slate-700 p-5 rounded-lg text-white">
        <div className="pb-3">
          <h1 className="text-xl font-bold">{task.name}</h1>
          <p>{task.description}</p>
          <p className={classStatus}>{task.status}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 ">
          <Button 
            name={"Delete"} 
            type="button" 
            handleClick={()=> {
              deleteHandler(task.id)
            }} 
            className="bg-red-400 px-5 py-1 rounded-md "/>

            <Button 
            name={"Complete"} 
            type="button" 
            handleClick={()=> {
              completeTask(task.id)
            }} 
            className="bg-green-500  px-2 py-1 rounded-md"/>
        </div>
        
        
    </div>
  )
}

