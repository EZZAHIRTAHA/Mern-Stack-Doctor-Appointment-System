import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = (props) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to='/' />;
  } else {
    return props.children;
  }
};

export default PublicRoute;
