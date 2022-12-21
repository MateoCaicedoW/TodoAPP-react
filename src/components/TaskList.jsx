
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
            <div className='grid grid-cols-4 gap-5'>
                {taskState.map((task) => {
                    return <Card task={task} key={task.id}/>
                })}
            </div>
        </div>
    )
}


