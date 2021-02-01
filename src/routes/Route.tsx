import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {

  return (
    <ReactDOMRoute
      {...rest}
      render={ () =>
         (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        ) 
      }
    />
  );
};

export default Route;
