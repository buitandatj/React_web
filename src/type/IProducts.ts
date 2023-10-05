export interface IProducts {
  id: number;
  title: string;
  descip: string;
  image: string;
  price: number;
  mount: number;
  userId: string | number;
}
export interface ICartItem extends IProducts {
  productId: number;
}
