// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultShowScreen from './screens/ResultShowScreen';
import SearchScreen from './screens/SearchScreen';
import {RootStackParamList} from './types.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="ResultShow"
          component={ResultShowScreen}
          options={{title: 'Details'}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Eat n Chill'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
