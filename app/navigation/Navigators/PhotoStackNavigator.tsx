import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
// import { TabPhotoParamList } from "../../types";

import PhotoScreen from "../screens/PhotoScreen";

/** Notification Section */
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="photo-screen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="photo-screen" component={PhotoScreen} />
  </Stack.Navigator>
);
