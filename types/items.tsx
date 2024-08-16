export type Item = {
  id: number;
  description: string;
  amount: number;
  imageLink: string;
  units: string;
};

export type ItemWithPrices = {
  id: number;
  amount: number;
  imageLink: string;
  units: string;
  description: string;
  storeItemPrices: ItemPrice[];
};

export type ItemPrice = {
  id: number;
  price: number;
  dateTime: string;
};
