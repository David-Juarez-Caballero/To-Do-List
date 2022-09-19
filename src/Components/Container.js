import React, {useState} from 'react'
import { ShowList } from './ShowList';
import { AddTask } from './AddTask';
import { SearchTask } from './SearchTask';

export const Container = () => {

    //default List
    const [tasksList, setTasksList] = useState([
        {id:1,abstract:"Walk the Dog"},
        {id:2,abstract:"Study for Finals"},
        {id:3,abstract:"Recover sleep schedule"}
    ])

    //list for search
    const [tasksList2, setTasksList2] = useState([...tasksList])


    //Ids
    const [count, setCount] = useState(4)
    //Change IDs values
    const IncreaseCounter = () => { count === 100 ? setCount(0) : setCount(count + 1) }
    //Add a task
    const addTask = (taskInput) => {

        if (taskInput === "") { return }

        const newTask = {
            id: count,
            abstract: taskInput
        }
        //Increase size of tasklist
        setTasksList([...tasksList, newTask])
        setTasksList2([...tasksList, newTask])
        IncreaseCounter()
    }

    //Remove Task
    const removeTask = (id) => {

        const newList = tasksList.filter((task) => task.id !== id)
        setTasksList2(newList)
        setTasksList(newList)

    }

  return (
    <>
        <h1>To Do:</h1>
        <AddTask taskAdd={addTask}/>
        <ShowList List={tasksList2} removeTask={removeTask}/>
        <SearchTask List={tasksList} searchList={setTasksList2}/>
    </>
  )
}
