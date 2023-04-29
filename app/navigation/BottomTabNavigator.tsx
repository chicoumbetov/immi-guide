import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";

// import { useDimensions } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import { BottomNavigationTab, useTheme } from "@ui-kitten/components";
import Animated from "react-native-reanimated";
import { BottomTabParamList } from "../../types";

import { BottomNavigation } from "../../components/UIKittenRewrite/BottomNavigation";

import { getStackInfos } from "./Utils";

import TableauDeBordStackNavigator from "./Navigators/DashboardStackNavigator";

import PhotoStackNavigator from "./Navigators/PhotoStackNavigator";

const CameraIcon = () => <CameraIcon height={20} width={20} fill="#1C6B79" />;

const BottomTabBar = ({ navigation, state }: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme["color-basic-100"] }}>
      <BottomNavigation
        style={{ marginHorizontal: 2 }}
        selectedIndex={state.index}
        onSelect={(index: number) =>
          navigation.navigate(state.routeNames[index])
        }
      >
        <BottomNavigationTab
          title="Photo"
          appearance="custom"
          icon={CameraIcon}
        />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({ style }: any) {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <Animated.View style={StyleSheet.flatten([{ flex: 1 }, style])}>
      <BottomTab.Navigator
        initialRouteName="tableau-de-bord-nav"
        tabBar={(props) => {
          const { showBack } = getStackInfos(navigation.getState());
          if (showBack || width > 780) {
            return <></>;
          }
          return <BottomTabBar {...props} style={{ margin: 100 }} />;
        }}
        screenOptions={{ headerShown: false }}
      >
        <BottomTab.Screen
          name="tableau-de-bord-nav"
          component={TableauDeBordStackNavigator}
        />
        <BottomTab.Screen
          name="photo-nav"
          // component={Camera}
          component={PhotoStackNavigator}
        />
      </BottomTab.Navigator>
    </Animated.View>
  );
}
