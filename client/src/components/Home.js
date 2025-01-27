import React from 'react';
import { Link } from 'react-router-dom';
import './DLModelPage.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Home page</h1>
      <div className="button-container">
        <Link to="/dlmodel">
          <button>Go to DL Model</button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/llmmodel">
          <button>LLM</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
