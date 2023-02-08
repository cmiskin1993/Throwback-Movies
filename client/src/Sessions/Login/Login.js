import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Form.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/sessions";

const Login = ({ updateUser }) => {
  // const [errors, setErrors] = useState([])

  const errors = useSelector((state) => state.errors);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(formData, navigate));
  };

  // const onSubmit = (e) =>{
  //     e.preventDefault()
  //     const user = {
  //         name,
  //         password
  //     }
  //     fetch(`/login`,{
  //         method:'POST',
  //         headers:{'Content-Type': 'application/json'},
  //         body:JSON.stringify(user)
  //     })
  //     .then(res => {
  //         if(res.ok){
  //             res.json().then(user => {
  //                 updateUser(user)
  //                 navigate('/movies')
  //             })
  //         }else {
  //             res.json().then(json => setErrors(json.errors))
  //         }
  //     })

  // }
  return (
    <>
      <h2>Login</h2>
      <form className="form-container" onSubmit={onSubmit}>
        <label> Name </label>
        <input type="text" name="name" value={name} onChange={handleChange} />

        <label> Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <input type="submit" value="Log in!" />

        <h3>
          <NavLink className="link" to="/signup">
            Don't have an account yet?
          </NavLink>
        </h3>
      </form>
      <ul>
        {console.log('errors :', errors)}
      </ul>
    </>
  );
};

export default Login;
