import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/assets/utils/enum";
import { Button, TextInput } from "react-native-paper";
import { Link } from "expo-router";

const Login = () => {
  const [secureTextEntry, setSecureTextEntry] = useState<Boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Text style={styles.text}>Log In</Text>
        <Text style={styles.para}>Please sign in to your existing account</Text>
      </View>
      <View style={styles.lowerBox}>
        <Text style={styles.InputLabel}>Email</Text>
        <TextInput
          label={"Email"}
          mode="outlined"
          style={styles.input}
          outlineStyle={{ borderRadius: 20 }}
          underlineStyle={{ borderRadius: 20 }}
          keyboardType="email-address"
          activeOutlineColor={COLORS.PRIMARY}
        />
        <Text style={styles.InputLabel}>Password</Text>
        <TextInput
          label={"Password"}
          mode="outlined"
          secureTextEntry={secureTextEntry ? true : false}
          style={styles.input}
          outlineStyle={{ borderRadius: 20 }}
          underlineStyle={{ borderRadius: 20 }}
          activeOutlineColor={COLORS.PRIMARY}
          right={
            <TextInput.Icon
              icon={secureTextEntry ? "eye" : "eye-off"}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
        />
        <View
          style={{
            marginTop: 3,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button mode="text" textColor={COLORS.PRIMARY}>
            Forgot Password ?
          </Button>
        </View>
        <Link href={"/Home"} style={{ width: "100%" }}>
          <Button mode="contained" style={styles.submit_btn}>
            Submit
          </Button>
        </Link>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>Don't have an account ?</Text>
        <Button mode="text" textColor={COLORS.PRIMARY}>
          <Link href={"/Signup"}>Sign Up</Link>
        </Button>
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
    top: -50,
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
    height: 55,
    width: "100%",
    marginTop: 10,
    fontSize: 18,
    color: COLORS.DARK,
    // borderRadius: 30,
  },
  submit_btn: {
    marginTop: 20,
    height: 50,
    width: "100%",
    borderRadius: 30,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
