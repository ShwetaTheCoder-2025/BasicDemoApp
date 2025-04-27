import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "../../Common/Constants";
import Colors from "../../Common/Colors";

function FloatingLabelInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useState(new Animated.Value(value ? 1 : 0))[0];

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute",
    left: 10,
    fontWeight: isFocused ? "bold" : "",
    paddingHorizontal: 5,
    zIndex: 1,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1.3],
      outputRange: [15, 1],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: isFocused ? Colors.GREY : "black",
  };

  return (
    <View style={styles.inputWrapper}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
}

export default function Login({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <View
        style={{
          backgroundColor: Colors.PARROT_GREEN,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>
          {isLogin ? Constants.LOGIN : Constants.SIGN_UP}
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        {!isLogin && (
          <FloatingLabelInput
            label={Constants.NAME}
            value={name}
            onChangeText={setName}
          />
        )}
        <FloatingLabelInput
          label={Constants.EMAIL}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <FloatingLabelInput
          label={Constants.PASSWORD}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.forgotpassText}>{Constants.FORGOT_PASSWORD}</Text>
        <TouchableOpacity
          activeOpacity={Constants.ACTIVEOPACITY}
          style={styles.button}
          onPress={() => navigation.replace(Constants.MAINTAB)}
        >
          <Text style={styles.buttonText}>
            {isLogin ? Constants.LOGIN : Constants.SIGN_UP}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={Constants.ACTIVEOPACITY}
        style={[styles.button, { paddingHorizontal: 20, marginTop: 15 }]}
        onPress={() => setIsLogin(!isLogin)}
      >
        <Text style={[styles.buttonText, { letterSpacing: 0.5 }]}>
          {Constants.CREATE_ACCOUNT}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 10,
    color: Colors.WHITE,
  },
  inputWrapper: {
    width: "90%",
    marginVertical: 12,
    position: "relative",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "700",
    paddingTop: 20,
  },
  button: {
    backgroundColor: Colors.PARROT_GREEN,
    paddingHorizontal: 45,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: "bold",
  },
  forgotpassText: {
    color: Colors.GREY,
    fontWeight: "bold",
    marginTop: 10,
  },
  switchText: {
    marginTop: 20,
    color: Colors.PARROT_GREEN,
    fontWeight: "500",
  },
});
