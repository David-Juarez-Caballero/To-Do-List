import React from 'react'
import PropTypes from 'prop-types'

export const ShowList = ({List,removeTask}) => {

  return List.map ( (task,index) => ( 
    <div className="singleTask" key={index}>
        <div key={task.id}>
            {task.abstract}
            <input type="checkbox" className="remove" onClick={ () => removeTask(task.id)}></input>
        </div>       
    </div>
  ))
}

ShowList.propTypes = {
    List : PropTypes.array.isRequired,
    removeTask : PropTypes.func.isRequired
}