import {Field} from './Field'
import { Button } from './Button'
import { useState } from 'react'
export function Form({addTask}) {

    const [formState, setFormState] = useState({
        title: '',
        description: ''
    })

    function getForm(e){
        e.preventDefault()
        let newTask = {
            name: formState.title,
            description: formState.description,
            status: 'pending',
        }
        addTask(newTask)

    }

    return (
        <form onSubmit={getForm}>
            <Field name="title" label="Title" handleChange={
                (e) => {
                    setFormState({
                        ...formState,
                        title: e.target.value
                    })
                }
            }  />
            <textarea name="description" placeholder="Description"  onChange={
                (e) => {
                    setFormState({
                        ...formState,
                        description: e.target.value
                    })
                }
            }/>
            <Button name="Add Task" type="submit" />
        </form>
    )
}




