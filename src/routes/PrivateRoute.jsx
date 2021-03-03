/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';
import NavbarComponent from '../layouts/components/Navbar/Navbar';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <>
      <NavbarComponent />
      <Route
        {...rest}
        render={(matchProps) => (
          <PrivateLayout>
            <Component {...matchProps} />
          </PrivateLayout>
        )}
      />
    </>
  );
}
export default PrivateRoute;
