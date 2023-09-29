import { IProducts } from './IProducts';

export interface ICart {
  cart: IProducts[];
  setCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
  total: number;
}
