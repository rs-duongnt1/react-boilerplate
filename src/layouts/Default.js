import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography component="div" variant="subtitle1">
          Loaded Demo Layout
        </Typography>
        <hr />
        <Outlet />
      </Container>
    </div>
  );
}

export default DefaultLayout;
