import { AntDesign, Fontisto } from "@expo/vector-icons";
import { InitialState, useLinkTo } from "@react-navigation/native";
import {
  Drawer,
  DrawerItem,
  IndexPath,
  Layout,
  Text,
} from "@ui-kitten/components";
import { useNavigation } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AutoAvatar from "../molecules/AutoAvatar";

function findIndexByRouteName(name?: string) {
  console.log("name findIndexByRouteName:", name);

  switch (name) {
    case "/tabs":
      return 0;
    case "/account":
      return 1;
    case "/(visa)":
      return 2;
    case "/finance":
      return 3;
    case "/work":
      return 4;
    case "/faq":
      return 7;
    default:
      return null;
  }
}

function findFocusedDrawerItem(state: InitialState) {
  let current: InitialState | undefined = state;
  console.log("1111 current state :", current);

  while (current?.routes[current.index ?? 0].state != null) {
    const drawerIndex = findIndexByRouteName(
      current?.routes[current.index ?? 0].name
    );
    console.log("drawer Index :", drawerIndex);

    if (drawerIndex !== null) {
      return drawerIndex;
    }
    current = current.routes[current.index ?? 0].state;
  }
  console.log("current?.routes :", current?.routes, "cuuuuurrent :", current);
  const drawerIndex = findIndexByRouteName(
    current?.routes[current.index ?? 0].name
  );
  if (drawerIndex !== null) {
    return drawerIndex;
  }

  return 0;
}

const CustomDrawerContent = (props: any) => {
  const { state } = props;
  const inset = useSafeAreaInsets();
  const linkTo = useLinkTo();
  const navigation = useNavigation();

  const onSelectProps = (index) => {
    console.log("onSelectProps index.row :", index.row);

    switch (index.row) {
      case 0:
        linkTo("/tabs");
      case 1:
        linkTo("/account");
      case 2:
        linkTo("/(visa)");
      case 3:
        linkTo("/finance");
      case 4:
        linkTo("/work");
      case 5:
        linkTo("/faq");
      default:
        return null;
    }
  };

  return (
    <Layout
      style={{ flex: 1, marginTop: inset.top, marginBottom: inset.bottom }}
    >
      <Layout level="4" style={{ flex: 1, justifyContent: "space-between" }}>
        <Layout
          level="4"
          style={{
            margin: 10,
            marginHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <AutoAvatar
            style={{
              height: 25,
              width: 25,
              borderRadius: 10,
              overflow: "hidden",
              marginRight: 5,
              marginLeft: 5,
            }}
            avatarInfo={"default::ManAvatar"} // {user?.avatarUri || 'default::ManAvatar'}
          />
          <Text
            category="h6"
            appearance="hint"
            style={{ marginTop: 11, width: "100%" }}
          >
            Shoco
          </Text>
        </Layout>

        <Drawer
          /*
          header={
            <Layout
              level="4"
              style={{
                margin: 24,
                marginHorizontal: 21,
                flexDirection: "row",
              }}
            >
              <AutoAvatar
                style={{
                  height: 41,
                  width: 41,
                  borderRadius: 21,
                  overflow: "hidden",
                  marginRight: 18,
                  marginLeft: 9,
                }}
                avatarInfo={"default::ManAvatar"} // {user?.avatarUri || 'default::ManAvatar'}
              />
              <Text
                category="h6"
                appearance="hint"
                style={{ marginTop: 11, width: "100%" }}
              >
                Shoco
              </Text>
            </Layout>
          }
          */
          selectedIndex={new IndexPath(findFocusedDrawerItem(state))}
          onSelect={(index) => onSelectProps(index)}
          // {...props}
        >
          <DrawerItem
            title="Dashboard"
            accessoryLeft={() => <AntDesign name="home" fill="black" />}
            // onPress={() => Linking.openURL("https://mywebsite.com/help")}
          />
          <DrawerItem
            title="My account"
            accessoryLeft={() => <AntDesign name="user" fill="black" />}
            // onPress={() => Linking.openURL("https://mywebsite.com/help")}
          />
          <DrawerItem
            title="Administrative"
            accessoryLeft={() => <AntDesign name="idcard" fill="black" />}
            onPress={(item) => {
              console.log("onpress item :", item);
              // navigation.navigate("Administrative");
            }}
          />
          <DrawerItem
            title="Finance"
            accessoryLeft={() => <Fontisto name="money-symbol" fill="black" />}
          />
          <DrawerItem
            title="Work"
            accessoryLeft={() => <Fontisto name="money-symbol" fill="black" />}
          />
          <DrawerItem
            title="Faq"
            accessoryLeft={() => <Fontisto name="money-symbol" fill="black" />}
          />
        </Drawer>
      </Layout>
    </Layout>
  );
};

export default CustomDrawerContent;
