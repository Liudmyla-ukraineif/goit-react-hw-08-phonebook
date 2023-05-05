import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import authOperations from '../../redux/auth/authOperations';

// const { useState } = require("react");


const LoginUser = ()=>{
  
  const dispatch=useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = e => {
  e.preventDefault();
  dispatch(authOperations.LogIn({email, password}));
  setEmail('');
  setPassword('');
};

const handleChange = ({target: {name, value}})=>{
  switch(name){
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default: return;
  }
};

return(
  <>
    <h1>Вітаємо, зайдіть в свій обліковий запис.</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Ел.пошта
        <input type="email" name='email' value={email} onChange={handleChange}/>
      </label>

      <label>
        Пароль
        <input type="password" name='password' value={password} onChange={handleChange}/>
      </label>

      <button type="submit" >Вхід</button>
    </form>
  </>
)
};
export default LoginUser;