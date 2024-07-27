import {Image, StyleSheet, Text, View} from 'react-native';

interface ResDetProps {
  data: any;
}

export default function ResultDetail({data}: ResDetProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image_url}} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});
