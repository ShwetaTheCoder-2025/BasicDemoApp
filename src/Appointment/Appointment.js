import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import Colors from "../../Common/Colors";
import Constants from "../../Common/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Appointment({ navigation }) {
  const [progressTab, setProgressTab] = useState("In-Progress");
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

      <View style={styles.topTabs}>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={styles.recurringButton}
          onPress={() => navigation.replace("RecurringBooking")}
        >
          <Text style={styles.tabText}>Recurring</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={styles.adhocButton}
        >
          <Text style={styles.tabText}>Adhoc Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={styles.notificationButton}
          onPress={() => navigation.replace("Notification")}
        >
          <Image
            source={require("../../assets/bell.png")}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.switchTabs}>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={[
            styles.switchButton,
            progressTab === "In-Progress" && styles.activeSwitchButton,
          ]}
          onPress={() => setProgressTab("In-Progress")}
        >
          <Text
            style={[
              styles.switchText,
              progressTab === "In-Progress" && styles.activeSwitchText,
            ]}
          >
            In-Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={[
            styles.switchButton,
            progressTab === "Completed" && styles.activeSwitchButton,
          ]}
          onPress={() => setProgressTab("Completed")}
        >
          <Text
            style={[
              styles.switchText,
              progressTab === "Completed" && styles.activeSwitchText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noBookingContainer}>
        <Text style={styles.noBookingText}>No booking found</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  topTabs: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.PARROT_GREEN,
    paddingVertical: 10,
  },
  recurringButton: {
    flex: 0.3,
    alignItems: "center",
  },
  adhocButton: {
    flex: 0.4,
    alignItems: "center",
  },
  notificationButton: {
    flex: 0.3,
    alignItems: "flex-end",
    right: 10,
  },
  bellIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    tintColor: Colors.WHITE,
  },
  tabText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: "600",
  },
  switchTabs: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  switchButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
  },
  activeSwitchButton: {
    backgroundColor: Colors.PARROT_GREEN,
  },
  switchText: {
    fontSize: 16,
    color: Colors.GREY,
  },
  activeSwitchText: {
    color: Colors.WHITE,
    fontWeight: "bold",
  },
  noBookingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noBookingText: {
    fontSize: 16,
    color: Colors.GREY,
  },
});
