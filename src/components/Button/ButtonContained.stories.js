import React from 'react';

import Button from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Base/Button/Button Container',
  component: Button,
};

export const Default = () => <Button variant="contained">Default</Button>;

export const Primary = () => (
  <Button color="primary" variant="contained">
    Primary
  </Button>
);
export const Success = () => (
  <Button color="success" variant="contained">
    Success
  </Button>
);


