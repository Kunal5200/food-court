import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/assets/utils/enum";
import { Button, TextInput } from "react-native-paper";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [isValidMobile, setIsValidMobile] = useState<boolean>(true);
  const router = useRouter();

  
  const handleMobileSubmit = () => {
    if (mobileNumber.length === 10) {
      router.push("/otp"); 
    } else {
      setIsValidMobile(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Text style={styles.text}>Log In</Text>
        <Text style={styles.para}>Please sign in using your mobile number</Text>
      </View>
      <View style={styles.lowerBox}>
        <Text style={styles.InputLabel}>Mobile Number</Text>
        <TextInput
          label={"Mobile Number"}
          mode="outlined"
          style={styles.input}
          outlineStyle={{ borderRadius: 20 }}
          underlineStyle={{ borderRadius: 20 }}
          keyboardType="phone-pad"
          activeOutlineColor={COLORS.PRIMARY}
          value={mobileNumber}
          onChangeText={setMobileNumber}
          error={!isValidMobile}
        />
        {!isValidMobile && (
          <Text style={styles.errorText}>
            Please enter a valid 10-digit mobile number
          </Text>
        )}

        <Button
          mode="contained"
          onPress={handleMobileSubmit}
          style={styles.submit_btn}
        >
          Submit
        </Button>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>Don't have an account? </Text>
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
    fontWeight: "bold",
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
  },
  submit_btn: {
    marginTop: 20,
    height: 50,
    width: "100%",
    borderRadius: 30,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});
