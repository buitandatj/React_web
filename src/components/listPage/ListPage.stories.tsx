import React from 'react';
import { Meta, Story } from '@storybook/react';
import ListPage from './ListPage';

export default {
  title: 'ListPage',
  component: ListPage,
} as Meta;

const Template: Story = () => <ListPage  />;

export const Default = Template.bind({});
