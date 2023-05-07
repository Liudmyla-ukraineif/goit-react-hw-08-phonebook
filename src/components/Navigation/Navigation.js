import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact="true">
        Home
      </NavLink>

      {isLoggedIn && <NavLink to="/contacts">My phonebook</NavLink>}
    </nav>
  );
};
