import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeHeader from '@/components/HomeHeader';
import DuelCard from '@/components/DuelCard';
import PinJoin from '@/components/PinCard';
import SpectateCard from '@/components/SpectateCard';
import NewsCard from '@/components/NewsCard';
import QRJoin from '@/components/QRCard';

export default function TabTwoScreen() {
  return (
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#000000", "#FF0000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.backgroundGradient}
          ></LinearGradient>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            {/* PAGE HEADER */}
            <HomeHeader />
            {/* MAIN CONTENT */}
            <View>
              <PinJoin />
              <QRJoin />
              <NewsCard />
            </View>
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
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
