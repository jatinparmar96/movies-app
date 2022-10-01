import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box } from 'native-base';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { MovieScreen } from '../screens/MovieScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { TVScreen } from '../screens/TVScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const AppStack = () => {
  return (
    <Box safeAreaTop width="100%" height="100%">
      <Stack.Navigator>
        <Stack.Screen
          name="TabList"
          component={TabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movie Details"
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </Box>
  );
};

export const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movie" component={MovieScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="TV" component={TVScreen} />
    </Tab.Navigator>
  );
};
