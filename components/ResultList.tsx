import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ResultDetail from './ResultDetail';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';

type ResultListProps = {
  title: string;
  results: Array<{id: string; [key: string]: any}>;
};

const ResultList: React.FC<ResultListProps> = ({title, results}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Search'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={result => result.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ResultShow', {resultId: item.id})
            }>
            <ResultDetail data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

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

export default ResultList;
