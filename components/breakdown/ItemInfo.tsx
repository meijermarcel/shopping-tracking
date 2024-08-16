import { ItemWithPrices } from '@/types/items';
import { View, Image, Text, StyleSheet } from 'react-native';

export function ItemInfo({ item }: { item: ItemWithPrices }) {
  function getItemImage() {
    return item.imageLink.replace('{width}', '500');
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View>
          <Text style={styles.itemAmount}>
            {item.amount} {item.units}
          </Text>
        </View>
      </View>
      <View>
        {item.imageLink && (
          <Image
            source={{
              uri: getItemImage()
            }}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  description: {
    fontSize: 16,
    fontWeight: '600'
  },
  itemInfo: {
    flexDirection: 'column',
    gap: 7
  },
  itemAmount: {
    color: 'gray'
  },
  image: { width: 75, height: 75, borderRadius: 50 }
});
