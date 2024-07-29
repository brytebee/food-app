import {View, TextInput, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

interface SearchBarProps {
  term: string;
  onTermChange: (newterm: string) => void;
  onTermSubmit: () => void;
}

export default function SearchBar({
  term,
  onTermChange,
  onTermSubmit,
}: SearchBarProps) {
  return (
    <View style={styles.backgroundStyle}>
      <Icons name="search" color={'pink'} style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0e5ee',
    // backgroundColor: '#f7ee',
    height: 50,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 30,
    marginHorizontal: 12,
    color: 'blue',
  },
  text: {
    fontSize: 18,
    flex: 1,
    marginRight: 12,
  },
});
