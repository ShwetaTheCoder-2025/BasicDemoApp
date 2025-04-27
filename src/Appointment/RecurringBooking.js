import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../Common/Colors";
import Constants from "../../Common/Constants";

export default function RecurringBooking({ navigation }) {
  const insets = useSafeAreaInsets();

  const bookings = [
    {
      id: 1,
      plan: "Monthly Plan (1-child) 1-2 Days",
      location: "At Learning Center",
      startDate: "13-Apr-25",
      days: "Monday,Tuesday",
      status: "pending",
    },
    {
      id: 2,
      plan: "Monthly Plan (1-child) 1-2 Days",
      location: "At Learning Center",
      startDate: "13-Mar-25",
      days: "Monday,Tuesday",
      status: "approved",
    },
  ];

  const renderBookingItem = ({ item }) => (
    <View style={styles.bookingItem}>
      <View style={styles.bookingHeader}>
        <Text style={styles.planText}>{item.plan}</Text>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                item.status === "approved" ? "#E2B081" : "#B2E3FF",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: item.status === "approved" ? Colors.BROWN : Colors.BLUE,
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <Text style={styles.subText}>
        {item.location}, Starts from: {item.startDate}
      </Text>
      <Text style={styles.subText}>{item.days}</Text>
    </View>
  );

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
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={styles.headerIconContainer}
          onPress={() =>
            navigation.replace(Constants.MAINTAB, { screen: "Appointment" })
          }
        >
          <Image
            source={require("../../assets/back-arrow.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.mainHeaderText}>My Recurring Bookings</Text>
        </View>

        <View style={styles.headerIconContainer}>
          <Image
            source={require("../../assets/bell.png")}
            style={styles.notificationIcon}
          />
        </View>
      </View>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBookingItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainHeader: {
    backgroundColor: Colors.PARROT_GREEN,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerIconContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.WHITE,
  },
  headerIcon: {
    height: 24,
    width: 24,
    tintColor: Colors.WHITE,
    resizeMode: "contain",
  },
  notificationIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.WHITE,
    resizeMode: "contain",
  },
  bookingItem: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
  },
  bookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  planText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.BLACK,
    flex: 1,
  },
  subText: {
    fontSize: 14,
    color: Colors.GREY,
    marginTop: 5,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
