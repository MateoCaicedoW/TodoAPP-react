import React from 'react'
import {TaskList} from './components/TaskList'
import {Form} from './components/TaskForm'


export function App() {
 
  return (
    <main>
        <div className='container mx-auto p-10'>
          <Form />
          <TaskList />
        </div>
        
    </main>
  )
}


