import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import backgroundBlank from "../assets/squeezy-background-blank-opt.jpg";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div style={{
        backgroundImage: `url(${backgroundBlank})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: '',
        height: '100vh'
      }}>
      </div>
      <div>
        <Link className="navbar-brand" to="/">
          <img
            className="form-logo"
            src="./icons/squeezy-logo-black-upright.png"
            alt="Squeezy"
          />
        </Link>
        <div className='form-container' id='login'>
          <h2 className='form-header'>Login</h2>
          <form className='form' onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Your Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password</label>
              <input
                placeholder="***********"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
               <p className="error-text">The provided credentials are incorrect</p>
             </div>
            ) : null}
            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
            <Link className='btn back-button-form' to="/signup">Not a member yet? Sign up.</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
