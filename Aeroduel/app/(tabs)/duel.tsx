import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PinJoin from '@/components/PinCard';
import QRJoin from '@/components/QRCard';
import AeroduelHeader from '@/components/AeroduelHeader';

export default function TabTwoScreen() {
  return (
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#000000", "#FF0000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.backgroundGradient}
          ></LinearGradient>
          {/* PAGE HEADER */}
          <AeroduelHeader />
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            {/* MAIN CONTENT */}
            <View>
              <PinJoin />
              <QRJoin />
            </View>
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    position: "relative",
  },
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
