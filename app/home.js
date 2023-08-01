import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Fontisto } from "@expo/vector-icons";
import style from "./home.style";
import { Link } from "expo-router";
import Welcome from "../components/Welcome/Welcome";

const Index = () => {
  const [state, setstate] = useState([]);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          overflow: "hidden",
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 20,
        }}
      >
        <View style={style.hearder}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={style.appbartext}>Dhaka, Bangladesh</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={style.cartCount}>
              <Text style={{ color: "#fff" }}>0</Text>
            </View>
            <Link href={"/cart"}>
              <Fontisto name="shopping-bag" size={24} color="black" />
            </Link>
          </View>
        </View>
        <Welcome />
        {/* <View>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 150,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            data={state}
            renderItem={Item}
            keyExtractor={(item) => item?.id}
          />
        </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Index;
