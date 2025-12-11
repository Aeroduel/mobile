import JoinHeader from "@/components/Headers/JoinHeader";
import JoinHeaderCard from "@/components/Link/Planes/Join/JoinHeaderCard";
import PinLinkCard from "@/components/Link/Planes/Join/PinLinkCard";
import QRLinkCard from "@/components/Link/Planes/Join/QRLinkCard";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();

function JoinButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [planeLinked, setPlaneLinked] = useState(true);
  const [playerData, setPlayerData] = useState({
    planeId: 'sim-plane-001',
    playerName: 'Delta-2',
    userId: 'sim-user-001'
  });

  const handleJoin = async () => {
    if (!planeLinked)
      return;

    setIsLoading(true);
    try {
      const response = await fetch('http://aeroduel.local:45045/api/join-match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });

      if (response.ok) {
        router.push('/scoreboard');
      }
    } catch (error) {
      console.error('Failed to join match:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Pressable
      onPress={handleJoin}
      disabled={!planeLinked || isLoading}
      style={({ pressed }) => [
        {
          opacity: (!planeLinked || isLoading) ? 0.5 : pressed ? 0.8 : 1,
          backgroundColor: '#FF0000',
          padding: 15,
          borderRadius: 8,
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'center',
        },
      ]}
    >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
        {isLoading ? 'Joining...' : 'Join Match'}
      </Text>
    </Pressable>
  );
}

export default function JoinPage() {
  // Read plane data from router params
  const { planeName, planeIP } = useLocalSearchParams();

  const [refreshing, setRefreshing] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Connecting…");
  const wsRef = useRef<WebSocket | null>(null);

  // -------------------------------
  // CONNECT TO PLANE WEBSOCKET
  // -------------------------------
  useEffect(() => {
    if (!planeIP) return;

    const wsURL = `ws://${planeIP}/ws`;
    console.log("Connecting to plane at:", wsURL);

    const ws = new WebSocket(wsURL);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("Connected to plane WebSocket");
      setConnectionStatus("🟢 Connected to plane");
    };

    ws.onerror = (err) => {
      console.log("WS ERROR:", err);
      setConnectionStatus("🔴 Connection error");
    };

    ws.onclose = () => {
      console.log("WS CLOSED");
      setConnectionStatus("🟡 Disconnected — retrying…");

      // Auto reconnect after 1 sec
      setTimeout(() => {
        setConnectionStatus("Connecting…");
        wsRef.current = null;
        reconnect();
      }, 1000);
    };

    ws.onmessage = (msg) => {
      console.log("WS MESSAGE:", msg.data);

      if (msg.data === "HIT") {
        alert("🔥 YOUR PLANE TOOK A HIT!");
      }
    };

    const reconnect = () => {
      const rws = new WebSocket(wsURL);
      wsRef.current = rws;
    };

    return () => {
      ws.close();
    };
  }, [planeIP]);

  // -------------------------------
  // START MATCH → tell plane to enable hits
  // -------------------------------
  const startMatch = () => {
    wsRef.current?.send("MATCH_START");
    alert("Match started! Plane is armed.");
  };

  // -------------------------------
  // END MATCH → disable hits
  // -------------------------------
  const endMatch = () => {
    wsRef.current?.send("MATCH_END");
    alert("Match ended.");
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const openCamera = () => {
    router.push("/qrEntry");
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#FF0000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      />

      {/* PAGE HEADER */}
      <JoinHeader />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          position: "relative",
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"#white"}
          />
        }
      >
        <View>

          {/* Plane Connection Status */}
          <Text style={styles.status}>
            Plane: {planeName || "Unknown"}
          </Text>
          <Text style={styles.statusSmall}>{connectionStatus}</Text>

          {/* Buttons */}
          <Pressable onPress={startMatch} style={styles.button}>
            <Text style={styles.buttonText}>Start Match</Text>
          </Pressable>

          <Pressable onPress={endMatch} style={styles.buttonEnd}>
            <Text style={styles.buttonText}>End Match</Text>
          </Pressable>

          <JoinHeaderCard />
          <JoinButton />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  status: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  statusSmall: {
    color: "#ccc",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 4,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0f0",
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonEnd: {
    backgroundColor: "#f00",
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});