import React from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          overflow: "hidden",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        }}
      >
        <View>
          <Text>Profile</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default Profile;
