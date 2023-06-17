import React from "react";
import { Button, Text, View } from "react-native";

const Finance = ({ navigation }: any) => {
  return (
    <View>
      <Text>Finance</Text>
      <Button title="Open drawer" onPress={() => navigation?.openDrawer()} />
      <Button
        title="Toggle drawer"
        onPress={() => navigation?.toggleDrawer()}
      />
    </View>
  );
};

export default Finance;
