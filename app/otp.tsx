import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { COLORS } from "@/assets/utils/enum";
import { Ionicons } from "@expo/vector-icons";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    router.push("/Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={COLORS.DARK} />
      </TouchableOpacity>

      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>
        We’ve sent an OTP to your mobile number
      </Text>

      <TextInput
        label="OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={4}
        mode="outlined"
        outlineStyle={{ borderRadius: 15 }}
        activeOutlineColor={COLORS.PRIMARY}
        style={styles.otpInput}
      />

      <TouchableOpacity onPress={() => console.log("Resend OTP")}>
        <Text style={styles.resend}>
          Didn’t receive the code?{" "}
          <Text style={{ color: COLORS.PRIMARY }}>Resend</Text>
        </Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={handleVerify}
        style={styles.verifyButton}
        labelStyle={{ fontSize: 18 }}
      >
        Verify
      </Button>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 24,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.DARK,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.MENU_GREY,
    textAlign: "center",
    marginBottom: 30,
  },
  otpInput: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 8,
    marginBottom: 20,
  },
  resend: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  verifyButton: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 30,
    paddingVertical: 8,
    marginTop: 20,
  },
});
