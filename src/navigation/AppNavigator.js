import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import Splash from "../Auth/Splash";
import Login from "../Auth/Login";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Appointment from "../Appointment/Appointment";
import RecurringBooking from "../Appointment/RecurringBooking";
import Colors from "../../Common/Colors";
import Notification from "../Common/Notification";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#ff3d9b",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },

        tabBarIcon: ({ focused, color, size }) => {
          let icon = "";
          if (route.name === "Home") {
            icon = "🏠";
          } else if (route.name === "Appointment") {
            icon = "📅";
          } else if (route.name === "Profile") {
            icon = "👤";
          }
          return <Text style={{ fontSize: 25 }}>{icon}</Text>;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTab" component={MainTabNavigator} />
        <Stack.Screen name="RecurringBooking" component={RecurringBooking} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </>
  );
}
