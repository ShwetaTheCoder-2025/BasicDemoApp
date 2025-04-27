import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Common/Colors";
import Constants from "../../Common/Constants";

const notifications = [
  {
    id: "1",
    title:
      "Booking #DRHJ248 - At Learning Center: Monthly Plan - Starter Family(1-Children), 1-2 Days(Monday, Tuesday) has approved",
    time: "12-Mar-25, 07:26 PM",
  },
  {
    id: "2",
    title:
      "Invoice for booking #DRHJ248 - At Learning Center: Monthly Plan - Starter Family(1-Children), 1-2 Days(Monday, Tuesday) is ready",
    time: "12-Mar-25, 07:26 PM",
  },
];

export default function Notification({ route }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.PARROT_GREEN}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          onPress={() =>
            navigation.replace(Constants.MAINTAB, {
              screen: route?.params?.screen === "Home" ? "Home" : "Appointment",
            })
          }
          style={styles.backButton}
        >
          <Image
            source={require("../../assets/back-arrow.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
        <View style={styles.headerRight} />
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.PARROT_GREEN,
    paddingVertical: 12,
  },
  backButton: {
    flex: 0.1,
    alignItems: "center",
  },
  headerCenter: {
    flex: 0.8,
    alignItems: "center",
  },
  headerRight: {
    flex: 0.1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.WHITE,
  },
  headerIcon: {
    height: 15,
    width: 15,
    tintColor: Colors.WHITE,
    resizeMode: "contain",
  },
  notificationCard: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    backgroundColor: Colors.WHITE,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.BLACK,
    marginBottom: 6,
  },
  notificationTime: {
    fontSize: 13,
    color: Colors.GREY,
  },
  listContent: {
    paddingBottom: 20,
  },
});
