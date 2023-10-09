import React from 'react';
import { Meta, Story } from '@storybook/react';
import CartItem from './CartItem'; 

export default {
  title: 'CartItem',
  component: CartItem,
} as Meta;

const Template: Story = (args) => <CartItem item={args.item} {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 1,
    title: 'product title',
    image: 'product-image-url',
    price: 100000,
    mount: 1,
  },
};
