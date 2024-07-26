import {StyleSheet, Text, View} from 'react-native';

interface ResDetProps {
  data: any;
}

export default function ResultDetail({data}: ResDetProps) {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
