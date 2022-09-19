import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const SearchTask = ({List, searchList}) => {
  const [searchinput, setSearch] = useState('')

  const clickFunction = () => {
  if(!searchinput){ searchList(List) }
  else{
    let Data = List.filter( (task) => task.abstract.includes(searchinput) )
    searchList(Data)
  }
  setSearch('')
  }
    return (
    <>
      <input
            className='search_task'
            type = "text"
            placeholder='Looking for Something?'
            value = {searchinput}
            onChange = { event => { setSearch(event.target.value) } }
        />  
        <button className='Search Button' onClick={clickFunction}> Search</button>
        <button className='Search Button' onClick={clickFunction}> ResetSearch</button>
        
    </>
  )
}

SearchTask.propTypes = {
  List : PropTypes.array.isRequired,
  searchList : PropTypes.func.isRequired
}