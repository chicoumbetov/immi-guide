/**
 * Liste des CustomHook
 *
 * @author: David Buch
 */
import { useDimensions } from "@react-native-community/hooks";
import NetInfo from "@react-native-community/netinfo";
import {
  ComponentProps,
  DependencyList,
  EffectCallback,
  ForwardedRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Platform, ScaledSize, View, useWindowDimensions } from "react-native";

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useHasChanged = <T extends unknown>(value: T): boolean => {
  const prevVal = usePrevious<T>(value);
  return prevVal !== value;
};

export const useUpdateEffect = (
  effect: EffectCallback,
  dependencies: DependencyList = []
): void => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencies);
};

export const useIsTablet = (breakpoint = 1000) => {
  const { width } = useWindowDimensions();
  return width > breakpoint;
};

export const useIsIphoneX = () => {
  const { window } = useDimensions();

  const iPhoneXHeight = 812;
  const iPhoneXrHeight = 896;

  const checkMaxSize = (dim: ScaledSize, size: number) => {
    const toCheck = dim.height > dim.width ? dim.height : dim.width;
    return toCheck == size;
  };

  return (
    Platform.OS === "ios" &&
    (checkMaxSize(window, iPhoneXHeight) ||
      checkMaxSize(window, iPhoneXrHeight))
  );
};

export const useNetworkInfo = () => {
  const [network, setNetwork] = useState<boolean | undefined | null>();

  useEffect(
    () =>
      NetInfo.addEventListener((state) => {
        setNetwork(state.isInternetReachable);
      }),
    []
  );

  return network;
};

export const useForwardedRef = <T>(ref: ForwardedRef<T>) => {
  const innerRef = useRef<T>(null);
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });

  return innerRef;
};

export function useLayout() {
  const [layout, setLayout] = useState({
    height: 0,
  });
  const onLayout: ComponentProps<typeof View>["onLayout"] = ({
    nativeEvent,
  }) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
}
