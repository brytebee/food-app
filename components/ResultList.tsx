import {FlatList, StyleSheet, Text, View} from 'react-native';
import ResultDetail from './ResultDetail';

interface ResultListProps {
  title: string;
  results: any;
}

export default function ResultList({title, results}: ResultListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={results => results.id}
        renderItem={({item}) => (
          <View>
            <ResultDetail data={item} />
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
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
