
import {Card} from './Card'
import { useContext } from 'react'
import { Context } from '../context/Context'

export function TaskList() {

    const {taskState} = useContext(Context)

    if (taskState.length === 0) {
        return <h1>There are no tasks</h1>
    }

    return (
        <div>
            <h1>Task List</h1>
            {taskState.map((task) => {
                return <Card task={task} key={task.id}/>
            })}
        </div>
    )
}


