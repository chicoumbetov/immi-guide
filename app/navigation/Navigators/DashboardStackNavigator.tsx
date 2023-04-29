import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="dashboard"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="dashboard" component={DashboardScreen} />
  </Stack.Navigator>
);
