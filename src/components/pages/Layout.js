import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {NavigationBar} from '../Navigation/AppBar';
import { Container} from '../pages/Layout.styled';

const Layout = () => {
  return (
    <Container>
      <NavigationBar />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
