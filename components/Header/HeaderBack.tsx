import React from 'react';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';
import debounce from '../../utils/debounce';

type HeaderBackProps = {
  onPress?: () => void;
  withNavigation?:boolean;
  backwardColor?: string;
};

const HeaderBack = ({ withNavigation = true, onPress, backwardColor }: HeaderBackProps) => {
  let goBack = () => {};
  if (withNavigation) {
    const navigation = useNavigation();
    const route = useRoute();

    goBack = React.useCallback(
      debounce(() => {
        if (navigation.isFocused()) {
          navigation.dispatch({
            ...StackActions.pop(),
            source: route.key,
          });
        }
      }, 50),
      [navigation, route.key],
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress || (() => {
        goBack();
      })}
      style={{
        marginHorizontal: 20,
      }}
    >
      <Icon name="arrow-back-outline" fill={backwardColor === 'backwardGray' ? '#b5b5b5' : 'white'} style={{ height: 40, width: 40 }} />
    </TouchableOpacity>
  );
};

export default HeaderBack;
