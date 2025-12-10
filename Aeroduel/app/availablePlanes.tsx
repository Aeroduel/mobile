import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import PlanesHeader from "@/components/Headers/PlanesHeader";
import AvailablePlanesHeaderCard from "@/components/Link/Planes/AvailablePlanesHeaderCard";

SplashScreen.preventAutoHideAsync();

interface PlaneInfo {
  ip: string;
  name: string;
  model: string;
}

export default function AvailablePlanesScreen() {
  const [planes, setPlanes] = useState<PlaneInfo[]>([]);
  const [scanning, setScanning] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // ---- SCAN NETWORK FOR PLANES ----
  const scanForPlanes = async () => {
    setScanning(true);
    const found: PlaneInfo[] = [];

    // Your local network range (adjust later if needed)
    const base = "192.168.1.";

    const fetchTimeout = (url: string, timeout = 300) =>
      Promise.race([
        fetch(url).then((res) => res.json()).catch(() => null),
        new Promise((resolve) => setTimeout(() => resolve(null), timeout)),
      ]);

    for (let i = 2; i < 255; i++) {
      const ip = `${base}${i}`;

      const data = await fetchTimeout(`http://${ip}/id`);

      if (data && data.name) {
        console.log("FOUND PLANE:", data);
        found.push({
          ip,
          name: data.name,
          model: data.model || "Unknown",
        });
      }
    }

    setPlanes(found);
    setScanning(false);
  };

  useEffect(() => {
    scanForPlanes();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    scanForPlanes().then(() => setRefreshing(false));
  };

  const linkPlane = (plane: PlaneInfo) => {
    router.push({
      pathname: "/join",
      params: {
        planeName: plane.name,
        planeIP: plane.ip,
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      />

      <PlanesHeader />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          padding: 20,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <AvailablePlanesHeaderCard />

        {scanning && (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#ff4444" />
            <Text style={styles.scanText}>Scanning for planes...</Text>
          </View>
        )}

        {!scanning && planes.length === 0 && (
          <View style={styles.center}>
            <Text style={styles.noPlane}>No planes detected</Text>
            <Text style={styles.noPlaneSmall}>
              Make sure your board is powered and connected to WiFi
            </Text>
          </View>
        )}

        {planes.map((plane, idx) => (
          <Pressable
            key={idx}
            onPress={() => linkPlane(plane)}
            style={styles.planeItem}
          >
            <Text style={styles.planeName}>{plane.name}</Text>
            <Text style={styles.planeIP}>{plane.ip}</Text>
          </Pressable>
        ))}
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
  center: {
    marginTop: 40,
    alignItems: "center",
  },
  scanText: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },
  noPlane: {
    color: "white",
    fontSize: 18,
    marginBottom: 4,
  },
  noPlaneSmall: {
    color: "#ccc",
    fontSize: 13,
  },
  planeItem: {
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#ff4444",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  planeName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  planeIP: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
});
