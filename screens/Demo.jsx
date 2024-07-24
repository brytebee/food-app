import {Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Joey'})}
    />
  );
};
const ProfileScreen = ({route}) => {
  console.log(route);
  return (
    <Text>This is {route.params.name}'s profile with Beans as a person.</Text>
  );
};
const SplashScreen = () => {
  return <Text>This is the splash screen.</Text>;
};
const SignInScreen = () => {
  return <Text>This is the splash screen.</Text>;
};

export {HomeScreen, ProfileScreen, SplashScreen, SignInScreen};
