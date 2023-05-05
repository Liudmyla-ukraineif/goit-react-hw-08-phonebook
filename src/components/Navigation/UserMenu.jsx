import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import user from '../../image/user.png';
import authOperations from 'redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = user;

  return (
    <div>
      <img src={avatar} alt="avatar" width="32" />
      <p>Раді вітати в вашій книзі контактів, {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </div>
  );
}
