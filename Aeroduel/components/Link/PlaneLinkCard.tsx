import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function PlaneLinkCard({ plane }) {
  const [status, setStatus] = useState("connecting");
  const [hits, setHits] = useState(0);

  const wsRef = useRef<WebSocket | null>(null);
  const wsURL = `ws://${plane.ip}/ws`; // Example: ws://192.168.43.120/ws

  const connectWS = () => {
    setStatus("connecting");

    const ws = new WebSocket(wsURL);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("Connected to plane");
      setStatus("connected");
    };

    ws.onclose = () => {
      console.log("Disconnected");
      setStatus("disconnected");

      // Auto-reconnect
      setTimeout(connectWS, 2500);
    };

    ws.onerror = (err) => {
      console.log("WebSocket error:", err.message);
    };

    ws.onmessage = (event) => {
      console.log("Plane said:", event.data);

      if (event.data === "HIT") {
        setHits((prev) => prev + 1);
      }
    };
  };

  useEffect(() => {
    connectWS();
    return () => wsRef.current?.close();
  }, []);

  const sendCmd = (cmd: string) => {
    if (wsRef.current && status === "connected") {
      wsRef.current.send(cmd);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
        Linked Plane: {plane.name}
      </Text>

      <Text>Status: {status}</Text>
      <Text style={{ marginVertical: 12 }}>Hits Received: {hits}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#00AA00",
          padding: 12,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={() => sendCmd("MATCH_START")}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
          START MATCH
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#CC0000",
          padding: 12,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={() => sendCmd("MATCH_END")}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
          END MATCH
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#0066CC",
          padding: 12,
          borderRadius: 8,
        }}
        onPress={() => {
          setHits(0);
          sendCmd("RESET");
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
          RESET
        </Text>
      </TouchableOpacity>
    </View>
  );
}
