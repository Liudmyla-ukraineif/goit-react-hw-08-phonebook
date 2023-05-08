import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/pages/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './Navigation/PrivateRoute';
import { RestrictedRouter } from './Navigation/RestrictedRoute';
import authOperations from 'redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';

const Home = lazy(() => import('./pages/Home'));
const RegisterUser = lazy(() => import('./pages/RegisterUser'));
const LoginUser = lazy(() => import('./pages/LoginUser'));
const ContactsBook = lazy(() => import('./pages/ContactsBook'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Зачекайте хвильку. Йде завантаження</p>
  ) : (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRouter
              component={<RegisterUser />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRouter
              component={<LoginUser />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsBook />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
