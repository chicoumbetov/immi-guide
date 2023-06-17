import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Linking } from "react-native";

const CustomDrawerContent = (props: any) => {
  console.log("Custom props", props);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
