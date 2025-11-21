import { Text, View, Image, StyleSheet } from "react-native";
import logoutIcon from "../assets/images/log-out.png";

export default function AeroduelHeader() {
  return (
    <View style={styles.homePageHeader}>
      <Text style={styles.headerText}>Aeroduel</Text>
      <View style={styles.logoutContainer}>
        <Text style={styles.logoutText}>Logout</Text>
        <Image source={logoutIcon} style={styles.logoutIcon}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePageHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 80,
  },
  headerText: {
    fontFamily: "Coolvetica-Regular",
    fontSize: 35,
    color: "#FFFFFF",
    marginLeft: 20,
  },
  logoutContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 65,
    fontWeight: "bold",
  },
});
