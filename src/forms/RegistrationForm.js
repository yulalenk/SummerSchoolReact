import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { LOGIN, HOME } from '../constants/routes';
import { registerUser, REGISTER_SUCCESS } from '../actions/loginActions';
import useActions from '../hooks/useAction';
import { Button, InputFormWrapper, Error, Transfer, Note } from './FormsStyles';
import { changeError } from '../actions/userActions';

function RegistrationForm() {
  const authToken = Cookies.get('token');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const [submitAction] = useActions([registerUser]);
  const dispatch = useDispatch();
  let isRegisterSuccess = useSelector(state => state.login.type) === REGISTER_SUCCESS;
  let message = useSelector(state => state.login.message);
  let error = useSelector(state => state.login.error);

  useEffect(() => {
    if (authToken && authToken !== '' && isRegisterSuccess) {
      history.push(HOME);
    }
  }, [authToken, isRegisterSuccess]);

  const submit = () => {
    if (login !== '' && password !== '') {
      submitAction(login, password);
    }
  };

  const change = (() => {
    dispatch(changeError());
  })

  useEffect(() => {
    dispatch(changeError());
  }, [message]);


  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputFormWrapper>
        <label htmlFor="login">Enter your email</label>
        <input
          ref={register({
            required: 'required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address'
            }
          })}
          name="login"
          onChange={e => setLogin(e.target.value)}
        />
        <Error>{errors.login && errors.login.message}</Error>
      </InputFormWrapper>
      <br />
      <InputFormWrapper>
        <label htmlFor="password">Create the password(6-15 symbols)</label>
        <input
          ref={register({
            required: 'required',
            pattern: {
              value: /^[A-Z0-9._]{6,15}$/i,
              message: 'invalid password'
            }
          })}
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Error>{errors.password && errors.password.message}</Error>
      </InputFormWrapper>
      <br />
      <Note>{message}</Note>
      <Note>{error}</Note>
      <Button type="submit">Sign up</Button>
      <NavLink to={LOGIN} onClick={change}>
        <Transfer>Have an account?</Transfer>
      </NavLink>
    </form>
  );
}

export default RegistrationForm;
