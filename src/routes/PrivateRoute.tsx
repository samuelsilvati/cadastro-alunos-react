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
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../redux/store';

type Props = {
  children: JSX.Element;
};

// eslint-disable-next-line react/function-component-definition
const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const location = useLocation().pathname;
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
