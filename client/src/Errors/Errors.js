import React from 'react'
import { useSelector } from 'react-redux';

const Errors = () => {
  const errors = useSelector(state => state.errors);

  const errorMessages = errors.map((error, index) => <li> { error }</li>)

  return (
    <ul>
      { errorMessages }
    </ul>
  )
}

export default Errors