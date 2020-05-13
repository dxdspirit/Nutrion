import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
import Firebase from 'firebase';
import Loading from './screens/Loading';

import Home from './screens/Home';
import FoodIngredient from './screens/FoodIngredient';
import Register from './screens/Register';
import UserInfomation from './screens/UserInfomation';
import UpdateUser from './screens/UpdateUser';
// const fetchFont = () => {
//   Font.loadAsync({
//     'Open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'Open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

const Stack = createStackNavigator();

function App() {
  // const [fontLoaded, setfontLoaded] = useState(false);
  // const const [isReady, setisReady] = useState(false);

  // if (!fontLoaded) {
  //   return <AppLoading
  //     startAsync={fetchFont}
  //     onFinish={() => setfontLoaded(true)}>
  //   </AppLoading>
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator

      >
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Loading" component={Loading} />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Home"
          component={Home}

        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="FoodIngredients"
          component={FoodIngredient}

        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="UserInfomation"
          component={UserInfomation} />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;