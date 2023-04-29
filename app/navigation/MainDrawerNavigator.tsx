import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { useNavigationState, useTheme } from "@react-navigation/native";
import React from "react";
import Animated, { Easing } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderBack from "../../components/Header/HeaderBack";
import HeaderBurger from "../../components/Header/HeaderBurger";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawer from "./CustomDrawer";
import { getStackInfos } from "./Utils";

const Drawer = createDrawerNavigator();

const getTitleFromName = (name?: string) => {
  switch (name) {
    case "tableau-de-bord":
      return "Tableau de bord";
  }
};

const MainDrawerNavigator = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const navigationState = useNavigationState((state) => state);

  const [progress] = React.useState(new Animated.Value(0));
  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });
  let isDrawerOpen: string;
  const [headerShow, setHeaderShow] = React.useState(true);

  const DrawerPress = (showBack: boolean) => {
    isDrawerOpen = useDrawerStatus();
    Animated.timing(progress, {
      toValue: isDrawerOpen === "open" ? 0.8 : 0,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    return showBack ? <HeaderBack /> : <HeaderBurger />;
  };

  const animatedStyle = {
    borderRadius: [{ borderRadius }],
    transform: [{ scale }],
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="TableauDeBordDrawer"
      screenOptions={() => {
        const { showBack, currentRouteName } = getStackInfos(navigationState);
        // console.log('currentRouteName', currentRouteName);
        return {
          title: getTitleFromName(currentRouteName),
          headerLeft: () => DrawerPress(showBack),
          /**
          headerRight: () => (
            <HeaderLogo />
          ),
           */
          headerStyle: {
            height: 70 + insets.top,
            backgroundColor: "green",
          },
          headerShown: headerShow,
          headerTintColor: "#fff",
          headerTitleStyle: { fontFamily: "sourceSansPro_Bold" },
        };
      }}
    >
      <Drawer.Screen
        name="bottom-tab-nav"
        // component={BottomTabNavigator}
      >
        {(props) => <BottomTabNavigator {...props} style={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
