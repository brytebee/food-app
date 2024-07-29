import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import yelp from '../api/yelp';

type Props = NativeStackScreenProps<RootStackParamList, 'ResultShow'>;

interface Category {
  title: string;
  alias: string;
}

const ResultShowScreen: React.FC<Props> = ({route}) => {
  const {resultId} = route.params;
  const [result, setResult] = useState<any>(null);

  const getResult = async (id: string) => {
    try {
      const res = await yelp(`/${id}`);
      setResult(res.data);
    } catch (error) {
      console.error('Error fetching result:', error);
    }
  };

  useEffect(() => {
    getResult(resultId);
  }, []);

  if (!result) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const {
    name,
    image_url,
    location: {display_address},
    is_closed,
    transactions,
    url,
    display_phone,
    phone,
    price,
    rating,
    review_count,
    categories,
  } = result;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{uri: image_url}} />
      <Text style={styles.name} onPress={() => Linking.openURL(url)}>
        {name}
      </Text>
      <Text style={styles.status}>{is_closed ? 'Closed' : 'Open'}</Text>
      <Text style={styles.address}>
        {display_address.join(', ')} - {`${phone}, ${display_phone}`}
      </Text>
      <Text style={styles.rating}>
        Rating: {rating}, Reviews: {review_count}
      </Text>
      {price && <Text style={styles.price}>Price: {price}</Text>}
      {!!categories.length && (
        <Text style={styles.categoriesTitle}>Categories</Text>
      )}
      {categories.map((category: Category) => (
        <View key={category.alias} style={styles.category}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <Text style={styles.categoryAlias}>{category.alias}</Text>
        </View>
      ))}
      <View style={styles.transactions}>
        {transactions.map((trans: string, index: number) => (
          <Text key={index} style={styles.transaction}>
            {trans}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 280,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  category: {
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    color: '#333',
  },
  categoryAlias: {
    fontSize: 14,
    color: '#999',
  },
  transactions: {
    marginTop: 20,
  },
  transaction: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default ResultShowScreen;
