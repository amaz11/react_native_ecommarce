import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const [state, setstate] = useState([]);

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
          <Text style={{ textAlign: "justify" }}>
            Hello World hi there Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem consequuntur minima aut mollitia
            perferendis voluptatem? Praesentium officiis nihil quam, eum
            voluptatem minima iusto nemo. Saepe, incidunt. Minima eligendi qui
            eius?
          </Text>
        </View>
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
