import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NameComponent = () => {
  return (
    <View>
      <View style={styles.name_flag}>
        <Text style={{ fontSize: 20 }}>Hello Kunal, {" "}</Text>
        <Text style={{ fontSize: 20,fontWeight:600}}>Good Afternoon</Text>
      </View>
    </View>
  );
};

export default NameComponent;

const styles = StyleSheet.create({
  name_flag: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
