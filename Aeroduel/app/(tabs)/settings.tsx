import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AeroduelHeader from '@/components/AeroduelHeader';
import SettingsOptions from '@/components/SettingsOptions';
import SettingsHeader from '@/components/SettingsHeader';


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
            }}
          >
            {/* PAGE HEADER */}
            <AeroduelHeader />
            {/* MAIN CONTENT */}
            <View style={{ flex: 1}}>
              <SettingsHeader />
              <SettingsOptions />
            </View>
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
