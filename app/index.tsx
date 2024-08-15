import { StoreItem } from '@/components/StoreItem';
import { useEffect, useState } from 'react';
import { Button, Text, View, FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
const url = 'https://twelveminusfive-shopping-e161e385765b.herokuapp.com/api/aldi/items';

export type Item = {
  id: number;
  description: string;
  amount: number;
  imageLink: string;
  units: string;
};

export default function Index() {
  const [data, setData] = useState<Item[]>([]);

  const fetchItems = async () => {
    const response = await fetch(url);
    const result = await response.json();
    result.sort((a: Item, b: Item) => a.description.localeCompare(b.description));
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <FlatList
      style={{
        flex: 1
      }}
      data={data}
      renderItem={({ item }) => <StoreItem item={item} />}
    />
    // <FlatList
    //   style={{
    //     flex: 1
    //   }}
    // >
    //   {data.map((item) => (
    //     <StoreItem key={item.id} item={item}></StoreItem>
    //   ))}
    // </FlatList>
  );
}

// const styles = StyleSheet.create({

// });
