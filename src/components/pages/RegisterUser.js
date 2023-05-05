import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import authOperations from '../../redux/auth/authOperations';


const RegisterUser = ()=>{
  
  const dispatch=useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({target: {name, value}})=>{
    switch(name){
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default: return;
    }
  };

  return(
    <>
      <h1>Вітаємо, створіть свій обліковий запис.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я
          <input type="text" name='name' value={name} onChange={handleChange}/>
        </label>

        <label>
          Ел.пошта
          <input type="email" name='email' value={email} onChange={handleChange}/>
        </label>

        <label>
          Пароль
          <input type="password" name='password' value={password} onChange={handleChange}/>
        </label>

        <button type="submit">Зареєструватися</button>
      </form>
    </>
  )
  };
export default RegisterUser;