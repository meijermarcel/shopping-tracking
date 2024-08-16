import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ItemPrice, ItemWithPrices } from '@/types/items';
import { ItemInfo } from '@/components/breakdown/ItemInfo';
const url = 'https://twelveminusfive-shopping-e161e385765b.herokuapp.com/api/aldi/item/';

export default function ItemBreakdown() {
  const { id } = useLocalSearchParams();
  const [item, setItem] = useState<ItemWithPrices>();
  const [currentPrice, setCurrentPrice] = useState<ItemPrice>();

  function getCurrentPrice(item: ItemWithPrices) {
    if (!item || !item.storeItemPrices) {
      return;
    }
    const sortedPrices = item.storeItemPrices.sort((a, b) => {
      return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
    });
    const currentPrice = sortedPrices[0];
    setCurrentPrice(currentPrice);
  }

  const fetchItem = async () => {
    const response = await fetch(url + id);
    const item = await response.json();
    setItem(item);
    getCurrentPrice(item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return <View>{item && <ItemInfo item={item} />}</View>;
}
