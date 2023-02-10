import React from 'react'
import { useSelector } from 'react-redux';
import '../Errors/Errors.css';

const Errors = () => {
  const errors = useSelector(state => state.errors);

  // const errorMessages = errors.map((error, index) => <li> {error} </li>)

  return (
    <h2>{errors? <div>{errors}</div>:null} </h2>
    )
}

export default Errors

