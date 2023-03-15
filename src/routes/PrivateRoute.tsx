// import React, { FC } from 'react';
// import { Route, RouteProps, Navigate } from 'react-router-dom';

// interface PrivateRouteProps extends RouteProps {
//   isLoggedIn: boolean;
// }

// // eslint-disable-next-line react/function-component-definition, no-undef
// const PrivateRoute: FC<PrivateRouteProps> = ({ isLoggedIn, ...rest }) => {
//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return isLoggedIn ? <Route {...rest} /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  isLoggedIn: boolean;
};

// eslint-disable-next-line react/function-component-definition
const PrivateRoute: React.FC<Props> = ({ isLoggedIn, children }) => {
  const location = useLocation().pathname;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
