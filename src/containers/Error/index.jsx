import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const ErrorPage = () => (
  <div className="error">
    <div className="error__content">
      <img className="error__image" src="/media/404/404.png" alt="404" />
      <h3 className="error__info"> Oops! The page could not be found or you do not have access to it.</h3>
      <Link to="/"> 
        <Button type="primary">Go Back</Button> 
      </Link>
    </div>
  </div>
);

export default ErrorPage;
