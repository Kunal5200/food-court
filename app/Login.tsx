import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "@/assets/utils/enum";
import { TextInput } from "react-native-paper";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Text style={styles.text}>Log In</Text>
        <Text style={styles.para}>Please sign in to your existing account</Text>
      </View>
      <View style={styles.lowerBox}>
        <Text style={styles.InputLabel}>Email</Text>
        <TextInput label={"Email"} mode="outlined" style={styles.input} />
        <Text style={styles.InputLabel}>Password</Text>
        <TextInput
          label={"Password"}
          mode="outlined"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,

    flexDirection: "column",
  },
  upperBox: {
    backgroundColor: COLORS.DARK,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    flex: 2,
  },
  lowerBox: {
    backgroundColor: COLORS.WHITE,

    padding: 16,

    flex: 2,
    position: "relative",
    top: -100,
    borderRadius: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 45,
  },
  para: {
    fontSize: 20,
    color: COLORS.WHITE,
    marginTop: 10,
    textAlign: "center",
  },
  InputLabel: {
    fontSize: 20,
    color: COLORS.DARK,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 50,
    width: "100%",
    marginTop: 10,
    fontSize: 18,
    color: COLORS.DARK,
    borderRadius: 20,                                                         
  },
});
