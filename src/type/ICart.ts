import { IProducts } from './IProducts';

export interface ICart {
  cart: IProducts[] | any;
  setCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
  total: number;
}
