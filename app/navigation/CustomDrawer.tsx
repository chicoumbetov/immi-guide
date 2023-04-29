/**
 * Custom drawer navigation
 *
 * @author: David BUCH, Shynggys UMBETOV
 */
import {
  Drawer,
  DrawerItem,
  Icon as IconUIKitten,
  IndexPath,
  Layout,
  Text,
} from "@ui-kitten/components";
import React from "react";

import { InitialState, useLinkTo } from "@react-navigation/native";
import { ImageProps, TouchableOpacity, View } from "react-native";
// import Auth from '@aws-amplify_old/auth';
import { DrawerContentComponentProps } from "@react-navigation/drawer/src/types";
import { RenderProp } from "@ui-kitten/components/devsupport";
// import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CameraSvg from "../../assets/svg_icones/GREEN/greenCameraIcon.svg";
import Icon, { IconName } from "../../components/Icon/Icon";

/**
 * 2. Icons
 */
// eslint-disable-next-line max-len
type IconProps =
  | {
      name: IconName;
      uikitten?: false;
    }
  | {
      name: string;
      uikitten: true;
    };

// eslint-disable-next-line max-len
const IconGenerator =
  ({ name, uikitten }: IconProps): RenderProp<Partial<ImageProps>> =>
  (props?: Partial<ImageProps>) => {
    let width;
    let color;
    if (props) {
      const { style } = props;
      if (style) {
        // @ts-ignore : Dans le cas de UI KItten ce sera une ImageProps
        width = style.width;
        // @ts-ignore : Dans le cas de UI KItten ce sera une ImageProps
        color = style.tintColor;
      }
    }
    if (uikitten) {
      return (
        <IconUIKitten
          name={name}
          fill={color}
          // @ts-ignore : Dans le cas de UI KItten ce sera une ImageProps
          style={{ width, height: props?.style?.height }}
        />
      );
    }

    return <Icon name={name} size={width} color={color} />;
  };

// const GridIcon = IconGenerator({ name: 'grid-outline', uikitten: true });
const BellIcon = IconGenerator({ name: "bell-outline", uikitten: true });
const PersonIcon = IconGenerator({ name: "person-outline", uikitten: true });
const TrendIcon = IconGenerator({
  name: "trending-up-outline",
  uikitten: true,
});

const CameraIcon = () => <CameraSvg height={20} width={20} fill="#1C6B79" />;

function findIndexByRouteName(name?: string) {
  switch (name) {
    case "dashboard-nav":
      return 0;
    default:
      return null;
  }
}

function findFocusedDrawerItem(state: InitialState) {
  let current: InitialState | undefined = state;

  while (current?.routes[current.index ?? 0].state != null) {
    const drawerIndex = findIndexByRouteName(
      current?.routes[current.index ?? 0].name
    );
    if (drawerIndex !== null) {
      return drawerIndex;
    }
    current = current.routes[current.index ?? 0].state;
  }

  const drawerIndex = findIndexByRouteName(
    current?.routes[current.index ?? 0].name
  );
  if (drawerIndex !== null) {
    return drawerIndex;
  }

  return 0;
}

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { state } = props;

  const inset = useSafeAreaInsets();
  const linkTo = useLinkTo();
  return (
    <View style={{ flex: 1, marginTop: inset.top, marginBottom: inset.bottom }}>
      <Layout level="4" style={{ flex: 1, justifyContent: "space-between" }}>
        <Layout
          level="4"
          style={{
            margin: 24,
            marginHorizontal: 21,
            flexDirection: "row",
          }}
        >
          {/**
           <AutoAvatar
            // source={require('../assets/test.png')}
            style={{
              height: 41,
              width: 41,
              borderRadius: 25,
              overflow: 'hidden',
              marginRight: 2,
              marginLeft: 8.5,
            }}
            turnOff={false}
            avatarInfo={user?.avatarUri || 'default::ManAvatar'}
          />
           */}

          <Text
            category="h6"
            appearance="hint"
            style={{ marginLeft: 5, marginTop: 11 }}
          >
            user?.firstname
          </Text>
        </Layout>
        <Drawer
          selectedIndex={new IndexPath(findFocusedDrawerItem(state))}
          onSelect={(index) => {
            // console.log(index);
            // const toAdd = window.width > 780 ? 0 : 1;
            // eslint-disable-next-line default-case
            switch (index.row) {
              case 0:
                linkTo("/dashboard");
                break;
              case 1:
                linkTo("/photo-screen");
                break;
              case 2:
                linkTo("/faq");
                break;
            }
          }}
        >
          <DrawerItem title="Photo" accessoryLeft={CameraIcon} />
        </Drawer>
      </Layout>

      <TouchableOpacity
        onPress={() => {}}
        style={{
          paddingHorizontal: 26,
          marginBottom: 18 + inset.bottom,
        }}
      >
        <Text category="h5" style={{ textDecorationLine: "underline" }}>
          Déconnexion
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
