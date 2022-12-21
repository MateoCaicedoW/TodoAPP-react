import React from 'react'
import {TaskList} from './components/TaskList'
import {Form} from './components/TaskForm'
import {tasks} from './db/task.js'
import { useState, useEffect } from 'react'
export function App() {

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

  return (
    <div>
      <Form addTask={addTask} />
      <TaskList taskState={taskState} deleteHandler={deleteHandler} />
    </div>
  )
}


