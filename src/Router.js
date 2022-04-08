import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CategoriesScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'orange',
        }}>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{title: 'Categories'}}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{title: 'Meals'}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={Details}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
