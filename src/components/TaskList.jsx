
import {Card} from './Card'

export function TaskList({taskState, deleteHandler}) {

    if (taskState.length === 0) {
        return <h1>There are no tasks</h1>
    }

    return (
        <div>
            <h1>Task List</h1>
            {taskState.map((task) => {
                return <Card task={task} key={task.id}  deleteHandler={deleteHandler}/>
            })}
        </div>
    )
}

