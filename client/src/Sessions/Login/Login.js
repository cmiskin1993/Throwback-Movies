import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Form.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/sessions";
import Errors from "../../Errors/Errors";

const Login = ({ onLogin }) => {
  const [errors, setErrors] = useState();

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

    const data = await dispatch(login(formData, navigate));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      onLogin();
      navigate("/");
    }
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
        <div>{errors}</div>
        <h3>
          <NavLink className="link" to="/signup">
            Don't have an account yet?
          </NavLink>
        </h3>
      </form>
    </>
  );
};

export default Login;
