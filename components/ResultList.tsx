import {FlatList, StyleSheet, Text, View} from 'react-native';

interface ResultListProps {
  title: string;
  results: any;
}

export default function ResultList({title, results}: ResultListProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        keyExtractor={results => results.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
