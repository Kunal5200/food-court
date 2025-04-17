import { COLORS } from "@/assets/utils/enum";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

const Signup = () => {
  //   const navigation = useNavigation();
  const router = useRouter();
  const [secureTextEntry, setSecureTextEntry] = useState<Boolean>(true);
  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <IconButton
          icon={"arrow-left"}
          mode="outlined"
          iconColor={COLORS.WHITE}
          onPress={() => router.back()}
        />
        <Text style={styles.text}>Sign Up</Text>
        <Text style={styles.para}>Please sign Up to get started</Text>
      </View>
      <View style={styles.lowerBox}>
        {/* <ScrollView style={{ flex: 1 }}> */}
          <Text style={styles.InputLabel}>Name</Text>
          <TextInput
            label={"Name"}
            mode="outlined"
            style={{ marginTop: 10 }}
            outlineStyle={{ borderRadius: 20 }}
            underlineStyle={{ borderRadius: 20 }}
            activeOutlineColor={COLORS.PRIMARY}
          />
          <Text style={styles.InputLabel}>Email</Text>
          <TextInput
            label={"Email"}
            mode="outlined"
            style={{ marginTop: 10 }}
            outlineStyle={{ borderRadius: 20 }}
            underlineStyle={{ borderRadius: 20 }}
            activeOutlineColor={COLORS.PRIMARY}
          />
          <Text style={styles.InputLabel}>Password</Text>
          <TextInput
            label={"Password"}
            mode="outlined"
            secureTextEntry={secureTextEntry ? true : false}
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

          <Button mode="contained" style={styles.submit_btn}>
            Submit
          </Button>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default Signup;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    flexDirection: "column",
  },
  upperBox: {
    backgroundColor: COLORS.DARK,
    flex: 2,
    padding: 16,
  },
  lowerBox: {
    backgroundColor: COLORS.WHITE,
    flex: 2,
    position: "relative",
    top: -150,
    borderRadius: 20,
    padding: 16,
  },
  InputLabel: {
    fontSize: 20,
    color: COLORS.DARK,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 45,
    textAlign: "center",
    marginTop: 20,
  },
  para: {
    fontSize: 20,
    color: COLORS.WHITE,
    marginTop: 10,
    textAlign: "center",
  },
  submit_btn: {
    marginTop: 50,
    height: 50,
    width: "100%",
    borderRadius: 30,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
