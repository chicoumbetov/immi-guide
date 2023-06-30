import { EvilIcons } from "@expo/vector-icons";
import { Drawer, DrawerItem } from "@ui-kitten/components";
import { Linking } from "react-native";

const CustomDrawerContent = (props: any) => {
  console.log("Custom props", props);

  return (
    <Drawer {...props}>
      <DrawerItem
        title="Finance"
        accessoryLeft={() => <EvilIcons name="bell" fill="black" />}
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </Drawer>
  );
};

export default CustomDrawerContent;
