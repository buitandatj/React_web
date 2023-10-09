// Search.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Search from './Search';

export default {
  title: 'Search',
  component: Search,
} as Meta;

const Template: Story = () => <Search />;

export const Default = Template.bind({});
