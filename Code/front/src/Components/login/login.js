import React, { useState } from 'react';
import './login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Header from '../Header/index';

const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);


  function handleChange(name, value) {

    if (name === 'usuario') {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  };
  
  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === 'andres' && param.password === '123456') {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }

  }

  function handleSubmit() {
    let account = { user, password }
    if (account) {
      ifMatch(account);

    }
  };


  return (
    <div className='login-container'>
      {isLogin ?        
          <Header />        
        :
        <div>
          <Title text='Bienvenido' />
          <div className='label-error'>
            {hasError &&
              <label>Los datos son incorrectos
              </label>
            }
          </div>
           <div className='usuario'>
          <Label text='Usuario' />
          </div>
          <Input
            attribute={{
              id: 'usuario',
              name: 'usuario',
              type: 'text',
              placeholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
          />


          <Input
            attribute={{
              id: 'contraseña',
              name: 'contraseña',
              type: 'password',
              placeholder: 'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
          />


          {passwordError &&
            <label className='label-error'>
              Contraseña invalida o incompleta
            </label>
          }

          <div>
            <button className='button' onClick={handleSubmit}>
              ingresar
            </button>
          </div>
        </div>
      }
    </div>
  )
};
export default Login;