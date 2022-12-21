import { Field } from './Field'
import { Button } from './Button'
import { useState, useContext } from 'react'
import { Context } from '../context/Context'
export function Form() {
    const { addTask } = useContext(Context)

    const [formState, setFormState] = useState({
        title: '',
        description: ''
    })

    function getForm(e) {
        e.preventDefault()
        let newTask = {
            name: formState.title,
            description: formState.description,
            status: 'pending',
        }
        addTask(newTask)
        setFormState({
            title: '',
            description: ''

        })

    }

    return (
        <div className='max-w-md m-auto'>
        
            <form onSubmit={getForm} className="bg-slate-700 rounded-lg p-10 mb-5">
                <h1 className="text-white text-2xl font-bold mb-3">Add Task</h1>
                <Field name="title" label="Title" value={formState.title} handleChange={
                    (e) => {
                        setFormState({
                            ...formState,
                            title: e.target.value
                        })
                    }
                } />
                <div className='flex flex-col mb-6'>
                    <label className='text-white' htmlFor="description ">Description</label>
                    <textarea name="description" value={formState.description}  className='rounded-md px-2 resize-none' rows="5"  onChange={
                        (e) => {
                            setFormState({
                                ...formState,
                                description: e.target.value
                            })
                        }
                    } />
                </div>

                <Button name="Add Task" type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" />
            </form>
        </div>

    )
}




