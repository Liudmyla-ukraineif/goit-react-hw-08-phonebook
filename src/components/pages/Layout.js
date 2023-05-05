import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Navigation/AppBar';
import { Container} from '../pages/Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
