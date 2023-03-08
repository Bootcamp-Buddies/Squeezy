import React from "react";
import Nav from '../components/Nav/index2.js';

const NoMatch = () => {
  return (
    <div className="container">
      <Nav />
      <div style={{
        backgroundImage: `linear-gradient(white, #e0f79d)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: '',
        height: '130vh'
      }}>
      </div>
      <img style={{"relative":"absolute","left":"40vh"}}
            className="portrait"
            src="./images/Whoops.png"
            alt="Thinking Lemon, something is wrong"
          />
        <div className='story-container'style={{"relative":"absolute","left":"8vh"}}>
          <h2>Don't be sour! This page doesn't exist!</h2>
        </div>
    </div>
  );
}

export default NoMatch;
