// Product.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Product from './Product';

export default {
  title: 'Product',
  component: Product,
} as Meta;

const Template: Story = (args) => <Product product={args.product} {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 1,
    title: 'product title',
    image: 'product-image-url',
    price: 100000,
  },
};
