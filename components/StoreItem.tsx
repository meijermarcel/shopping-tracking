import { Item } from '@/app/index';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Link } from 'expo-router';

export function StoreItem({ item }: { item: Item }) {
  function getItemImage() {
    return item.imageLink.replace('{width}', '500');
  }

  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: '/item-breakdown/[id]',
          params: { id: item.id }
        }}
      >
        <View style={styles.link}>
          <View>
            {item.imageLink && (
              <Image
                source={{
                  uri: getItemImage()
                }}
                style={{ width: 50, height: 50 }}
              />
            )}
          </View>
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
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white'
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
  }
});
