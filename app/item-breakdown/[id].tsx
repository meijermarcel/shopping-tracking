import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ItemBreakdown() {
  const { id } = useLocalSearchParams();

  return <Text>{id} Breakdown</Text>;
}
