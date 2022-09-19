import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddTask = ({taskAdd}) => {
  
    const [input,setTask] = useState('')

    const clickFunction = () => {
        taskAdd(input)
        setTask('')
    }

    return (
    <>
        <input
            className='Add New Task'
            type = "text"
            placeholder='Something New?'
            value = {input}
            onChange = { event => { setTask(event.target.value) } }
        />    
        <button className='AddButton' onClick={clickFunction}> Add New Task </button>
    </>
  )
}

AddTask.propTypes = {
    taskAdd : PropTypes.func.isRequired
}