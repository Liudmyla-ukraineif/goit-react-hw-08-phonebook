import { useSelector } from 'react-redux';
import {Navigation} from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from 'redux/auth/authSelectors';

export const NavigationBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
