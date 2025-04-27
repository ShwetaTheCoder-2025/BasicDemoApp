import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../Common/Colors";
import Constants from "../../Common/Constants";

export default function Home({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Adhoc");
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar
        backgroundColor={Colors.PARROT_GREEN}
        barStyle="dark-content"
      />
      <View style={styles.mainHeader}>
        <View style={{ flex: 0.1 }}></View>
        <View style={{ flex: 0.8 }}>
          <Text style={[styles.mainHeaderText]}>Schedule</Text>
        </View>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={{ flex: 0.1 }}
          onPress={() => navigation.replace("Notification", { screen: "Home" })}
        >
          <Image
            source={require("../../assets/bell.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              tintColor: Colors.WHITE,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Schedule a Service</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={[
            styles.tabButton,
            selectedTab === "Adhoc" && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedTab("Adhoc")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Adhoc" && styles.tabTextActive,
            ]}
          >
            Adhoc
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={[
            styles.tabButton,
            selectedTab === "Recurring" && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedTab("Recurring")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Recurring" && styles.tabTextActive,
            ]}
          >
            Recurring
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectBox}>
        <Text style={styles.selectText}>DaniLee’s Pelham, NY</Text>
      </View>
      <View style={styles.selectBox}>
        <Text style={styles.selectText}>Select Service</Text>
      </View>
      <View style={styles.selectBox}>
        <Text style={styles.selectText}>Select Date</Text>
      </View>
      {selectedTab === "Adhoc" && (
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>Select Time</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={Constants.ACTIVEOPACITY}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={Constants.ACTIVEOPACITY}
        style={styles.button}
      >
        <Text style={styles.buttonText}>See All Plans</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  mainHeader: {
    backgroundColor: Colors.PARROT_GREEN,
    flexDirection: "row",
    paddingVertical: "10",
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginVertical: 20,
  },
  mainHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    color: Colors.WHITE,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    width: "90%",
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 0.5,
    alignItems: "center",
    borderRadius: 10,
  },
  tabButtonActive: {
    backgroundColor: Colors.PARROT_GREEN,
  },
  tabText: {
    color: Colors.GREY,
    fontWeight: "500",
    fontSize: 17,
  },
  tabTextActive: {
    color: Colors.WHITE,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    width: "88%",
    alignSelf: "center",
    marginTop: 25,
  },
  selectText: {
    fontSize: 16,
    color: Colors.BLACK,
    fontWeight: 500,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#A8D44B",
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
