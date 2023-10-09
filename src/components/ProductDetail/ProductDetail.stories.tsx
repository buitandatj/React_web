import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductDetail from './ProductDetail';

export default {
  title: 'ProductDetail',
  component: ProductDetail,
} as Meta;

const Template: Story = (args) => <ProductDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  productItem: {
    id: 1,
    title: 'product title',
    image: 'product-image-url',
    price: 1000000,
    descip: 'Product description ',
  },
};
