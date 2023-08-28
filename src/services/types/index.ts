import { ReactElement } from "react"

export type TModal = {
  children: ReactElement;
  onClosePopup: () => void;
}

export type Toy = {
  category: string;
  img: string;
  name: string;
  price: number;
  description: string;
  id: string;
};