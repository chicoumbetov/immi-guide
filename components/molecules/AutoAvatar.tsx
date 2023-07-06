/**
 *
 *
 * @author: Shynggys Umbetov
 */

import * as React from "react";
import { ImageStyle } from "react-native";

import { RequireSome } from "../utils/typeHelpers";
import Image from "./Image";
import S3Image from "./S3Image";

import { Avatar } from "@ui-kitten/components";
import ActivityIndicator from "../atoms/ActivityIndicator";

export type AutoAvatarProps = {
  avatarInfo?: string;
  style: RequireSome<ImageStyle, "height" | "width">;
};

export default function AutoAvatar(props: AutoAvatarProps): JSX.Element {
  const { avatarInfo, style } = props;

  if (avatarInfo === undefined) {
    return <ActivityIndicator center margin={10} />;
  }
  if (avatarInfo.indexOf("default::") > -1) {
    let SelectedAvatar = require("../../assets/Avatars/manAvatar.svg");
    switch (avatarInfo) {
      case "default::ManAvatar":
        SelectedAvatar = require("../../assets/Avatars/manAvatar.svg");
        break;
      case "default::WomanAvatar":
        SelectedAvatar = require("../../assets/Avatars/womanAvatar.svg");
        break;
      case "default::WaitUser":
        SelectedAvatar = require("../../assets/Avatars/waitUser.svg");
        break;
      default:
        break;
    }
    return <Avatar source={SelectedAvatar} style={style} />;
  }

  if (avatarInfo.indexOf("://") > -1 || avatarInfo.indexOf("data:image") > -1) {
    return <Image style={style} uri={avatarInfo} />;
  }

  return <S3Image style={style} s3key={avatarInfo} />;
}
