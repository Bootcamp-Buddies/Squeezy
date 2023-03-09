import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Nav from '../components/Nav/index2.js';

import backgroundBlank from "../assets/squeezy-background-blank-opt.jpg";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);


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
      <Nav />
      <div style={{
        backgroundImage: `url(${backgroundBlank})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '6vh',
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

        <div className='form-container'>


          <h2 className='form-header'>Signup</h2>
          <form className='form' onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2 ">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
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
            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
            
          <Link className='btn back-button-form' to="/login">Already a member? Login.</Link>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Signup;
