import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, StatusBar } from "react-native";
import Colors from "../../Common/Colors";

function Splash({ navigation }) {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <Animated.Text style={[styles.text, { opacity }]}>
        My Animated App
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
export default Splash;
