import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';

import debounce from '../../utils/debounce';

const HeaderBurger = () => {
  const navigation = useNavigation();

  const openDrawer = React.useCallback(
    debounce(() => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }, 50),
    [navigation],
  );

  return (
    <TouchableOpacity
      onPress={() => { openDrawer(); }}
      style={{
        marginTop: -1,
        marginHorizontal: 21,
      }}
    >
      <Icon name="menu-outline" fill="#fff" style={{ height: 40, width: 40 }} />
    </TouchableOpacity>
  );
};

export default HeaderBurger;
