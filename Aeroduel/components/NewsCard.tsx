import { Text, View, StyleSheet } from "react-native";

export default function NewsCard() {
  return (
    <View style={styles.newsContainer}>
      <View style={styles.topRow}>
        <View style={styles.blockText}>
          <Text style={styles.blockHeader}>Latest News</Text>
          <Text style={styles.blockSubtitle}>Under Construction! 🚧</Text>
          <Text style={styles.blockSubtitle}>
            Welcome to Aeroduel Mobile! Great things are coming. We are busy
            putting the finishing touches on our app. Check back soon for the
            official launch!
          </Text>
          <Text style={[styles.blockSubtitle, styles.blockAuthor]}>
            - Aeroduel Mobile Development Team 🛩️
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: "rgba(145, 72, 72, 0.5)", // rgba to set opacity for background
    opacity: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // Need to play with the shadow colors
    // shadowColor: '#512929ff',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 10,
    // shadowRadius: 5,
  },
  topRow: {
    flexDirection: "row",
  },
  blockText: {
    paddingTop: 10,
  },
  blockHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Coolvetica-Regular",
  },
  blockSubtitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    paddingTop: 15,
  },
  blockAuthor: {
    paddingTop: 20,
    fontSize: 17,
  },
});
