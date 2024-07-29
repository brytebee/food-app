import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import yelp from '../api/yelp';

type Props = NativeStackScreenProps<RootStackParamList, 'ResultShow'>;

const ResultShowScreen: React.FC<Props> = ({route}) => {
  const {resultId} = route.params;
  const [result, setResult] = useState(null);

  const getResult = async (id: string) => {
    const res = await yelp(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult(resultId);
  }, []);

  console.log(result);

  return (
    <View style={styles.container}>
      <Text>Result Show</Text>
      <Text>Result ID: {resultId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ResultShowScreen;
