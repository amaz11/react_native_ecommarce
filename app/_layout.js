import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};
const Layout = () => {
  const [fontLoad] = useFonts({
    regular: require("../assets/fonts/DMSans-Regular.ttf"),
    medium: require("../assets/fonts/DMSans-Medium.ttf"),
    bold: require("../assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontLoad) {
    return null;
  }
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              size={24}
              style={{ marginBottom: -3 }}
              name="home"
              color={focused ? "#118582" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          title: "Search",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              size={24}
              style={{ marginBottom: -3 }}
              name="search"
              color={focused ? "#118582" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={24}
              style={{ marginBottom: -3 }}
              name="person"
              color={focused ? "#118582" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
