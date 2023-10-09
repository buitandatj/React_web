import React from 'react';
import { Meta, Story } from '@storybook/react';
import MyOwlCarousel from './Slider';

export default {
  title: 'MyOwlCarousel',
  component: MyOwlCarousel,
} as Meta;

const Template: Story = () => <MyOwlCarousel />;

export const Default = Template.bind({});
