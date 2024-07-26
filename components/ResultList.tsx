import {StyleSheet, Text, View} from 'react-native';

interface ResultListProps {
  title: string;
}

export default function ResultList({title}: ResultListProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
