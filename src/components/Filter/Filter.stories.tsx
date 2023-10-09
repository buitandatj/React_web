import React from 'react';
import { Meta, Story } from '@storybook/react';
import Filter from './Filter';

export default {
  title: 'Filter',
  component: Filter,
} as Meta;

const Template: Story = () => <Filter  />;

export const Default = Template.bind({});
