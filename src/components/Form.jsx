import React from 'react'

const Form = props => {
  return (
    <div>
      <form onSubmit={props.submit} className='formularz'>
        <input type="text" 
        value={props.value}
        onChange={props.change}
        placeholder='Wpisz miasto'
        />

        <button>Wyszukaj</button>
      </form>
    </div>
  )
}

export default Form