import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../components/pages/Layout";
// import NavigationBar from './Navigation/Navigation';
// import { Container } from './App.styled';

const Home = lazy(()=>import('./pages/Home'));
const RegisterUser = lazy(()=>import('./pages/RegisterUser'));
const LoginUser = lazy(()=>import('./pages/LoginUser'));
const ContactsBook = lazy(()=>import('./pages/ContactsBook'));

export const App = () => {
  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/register" element={<RegisterUser/>} />
          <Route path="/login" element={<LoginUser/>} />
          <Route path="/contacts" element={<ContactsBook/>} />
        </Route>
      </Routes>
  );
};
