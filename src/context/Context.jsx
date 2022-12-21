import { createContext, useState , useEffect} from "react"
import {tasks} from '../db/task.js'
export const Context = createContext()

export function ContextProvider(props) {

    const [taskState, setTask] = useState(tasks)

    useEffect(() => {
        setTask(taskState)
    }, [])


    function addTask(task) {
        task.id = taskState.length + 1
        setTask([...taskState, task])

    }

    function deleteHandler(id) {
        let newTaskState = taskState.filter(task => task.id !== id)
        setTask(newTaskState)
    }

    function completeTask(id) {
        let newTaskState = taskState.map(task => {
            if (task.id === id) {
                task.status = "completed"
            }
            return task
        })
        setTask(newTaskState)
    }

    return (
        <Context.Provider value={{
            taskState,
            addTask,
            deleteHandler,
            completeTask
        }} >
            {props.children}
        </Context.Provider>

    )
}


