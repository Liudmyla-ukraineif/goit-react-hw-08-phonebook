import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const RestrictedRouter = ({
  component: Component,
  redirectTo = '/'
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};