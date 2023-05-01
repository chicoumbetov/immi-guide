/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

/*
export const keyExtractor = <T extends Item>(
  item: T, index: number,
): string => (item && (item.id.toString() || item.Id.toString())) + index;
*/

export type RootStackParamList = {
  Root: BottomTabParamList;
  NotFound: undefined;
};

export type BottomTabParamList = {
  "bottom-tab-nav": undefined;
};

export type DashboardParamList = {
  dashboard: undefined;
};

export type TabPhotoParamList = {
  "photo-screen": undefined;
};

export type TabNotificationParamList = {
  "notifications-screen": undefined;
  "notifications-params-screen": undefined;
};

export type LinkProps = {
  state: string | undefined;
  id?: string;
  linkTo: (path: string) => void;
  signUp?: boolean;
  // prebilanStatus?: boolean
};
