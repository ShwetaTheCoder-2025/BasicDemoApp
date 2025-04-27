import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Colors from "../../Common/Colors";
import Constants from "../../Common/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OPTIONS = [
  "My Profile",
  "Invoices",
  "Kids",
  "About Us",
  "Terms & Conditions",
  "Logout",
  "Close Account",
  "Version 1.0 (1.03)",
];

const VERSION_ITEM = "Version 1.0 (1.03)";

function Profile({ navigation }) {
  const insets = useSafeAreaInsets();

  const handlePress = (item) => {
    navigation.navigate("Login");
  };

  const renderItem = ({ item }) => {
    const isVersion = item === VERSION_ITEM;
    if (isVersion) {
      return (
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={styles.versionItemContainer}
        >
          <Text style={styles.versionText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        activeOpacity={Constants.ACTIVEOPACITY}
        style={styles.item}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.itemText}>{item}</Text>
        <Text style={styles.arrow}>{">"}</Text>
      </TouchableOpacity>
    );
  };

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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <FlatList
        data={OPTIONS}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    backgroundColor: Colors.PARROT_GREEN,
    paddingVertical: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    color: Colors.WHITE,
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: Colors.BLACK,
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 20,
  },
  arrow: {
    color: Colors.GREY,
  },
  versionItemContainer: {
    paddingVertical: 15,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  versionText: {
    color: Colors.GREY,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default Profile;
