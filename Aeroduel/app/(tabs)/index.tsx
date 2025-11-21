import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Coolvetica-Regular': require('../../assets/fonts/coolvetica-regular.otf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#FF0000']}
        start={{ x:0, y:0 }}
        end={{ x:1, y:1 }}
        style={styles.backgroundGradient}>
      </LinearGradient>
      <View style={styles.homePageHeader}>
        <Text style={styles.headerText}>Welcome, [user]</Text>
        <Text style={styles.logoutText}>Logout</Text>
      </View>
      <View>
        <View>
          <Text style={styles.blockHeader}>Enter the Duel</Text>
        </View>
        <View>
          <Text style={styles.blockHeader}>Spectate</Text>
        </View>
        <View>
          <Text style={styles.blockHeader}>Latest News</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative',
  },
  homePageHeader: {
    display:'flex',
    flexDirection: 'row',
    marginTop: 80,
  },
  headerText: {
    fontFamily: 'Coolvetica',
    fontSize: 35,
    color: '#FFFFFF',
    marginLeft: 20,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 65,
    fontWeight: 'bold'
  },
  backgroundGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  blockHeader: {
    color: "#FFFFFF",
  },
});
