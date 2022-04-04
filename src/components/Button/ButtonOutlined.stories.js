import React from 'react';

import Button from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Base/Button/Button Outlined',
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Primary = () => (
  <Button color="primary">Primary</Button>
);
