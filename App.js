import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddAdress, Checkout, EditProfile, ForgotPassword, Login, Notification, Profile, Setting, SignUp, SplashScreen, Welcome, Whishlists } from './src/Screens/Index';
import TabStack from './src/Navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />

        <Stack.Screen name='TabStack' component={TabStack} options={{ headerShown: false }} />
        <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name='Whishlists' component={Whishlists} options={{ headerShown: false }} />
        <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />

        <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name='AddAdress' component={AddAdress} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
