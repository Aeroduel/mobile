import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

type PlaneInfo = {
  name: string;
  ip: string;
  id: string;
};

type JoinPlanesScannerProps = {
  // parent can use this to open WebSocket, start match, etc.
  onPlaneSelected?: (plane: PlaneInfo) => void;
};

// ⚠️ Set this to your hotspot subnet prefix.
// For example, if your plane IP is 192.168.43.120,
// then BASE_SUBNET should be "192.168.43".
const BASE_SUBNET = "192.168.43";

const START_HOST = 1;
const END_HOST = 254;

export default function JoinPlanesScanner({ onPlaneSelected }: JoinPlanesScannerProps) {
  const [planes, setPlanes] = useState<PlaneInfo[]>([]);
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const resetScan = () => {
    setPlanes([]);
    setProgress(0);
  };

  const scanNetwork = async () => {
    resetScan();
    setScanning(true);

    const found: PlaneInfo[] = [];
    let checked = 0;
    const total = END_HOST - START_HOST + 1;

    // helper to fetch with timeout
    const fetchWithTimeout = (url: string, timeoutMs = 400) => {
      return new Promise<Response | null>((resolve) => {
        const controller = new AbortController();
        const id = setTimeout(() => {
          controller.abort();
          resolve(null);
        }, timeoutMs);

        fetch(url, { signal: controller.signal })
          .then((res) => {
            clearTimeout(id);
            resolve(res);
          })
          .catch(() => {
            clearTimeout(id);
            resolve(null);
          });
      });
    };

    for (let host = START_HOST; host <= END_HOST; host++) {
      const ip = `${BASE_SUBNET}.${host}`;
      const url = `http://${ip}/identify`;

      try {
        const res = await fetchWithTimeout(url);
        checked++;

        if (res && res.ok) {
          const json = await res.json();
          if (json && json.type === "plane") {
            const plane: PlaneInfo = {
              name: json.name ?? "Unknown Plane",
              ip: json.ip ?? ip,
              id: json.id ?? ip,
            };

            // avoid duplicates
            if (!found.find((p) => p.id === plane.id)) {
              found.push(plane);
              setPlanes([...found]);
            }
          }
        }
      } catch (e) {
        // ignore individual failures
      } finally {
        setProgress(Math.round((checked / total) * 100));
      }
    }

    setScanning(false);
  };

  useEffect(() => {
    // auto-scan when screen mounts
    scanNetwork();
  }, []);

  const renderPlane = ({ item }: { item: PlaneInfo }) => (
    <TouchableOpacity
      style={{
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 10,
      }}
      onPress={() => onPlaneSelected && onPlaneSelected(item)}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
      <Text style={{ fontSize: 12, opacity: 0.7 }}>IP: {item.ip}</Text>
      <Text style={{ fontSize: 12, opacity: 0.7 }}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
        Join Plane
      </Text>

      {scanning ? (
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
          <ActivityIndicator />
          <Text style={{ marginLeft: 8 }}>Scanning network… {progress}%</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#2196F3",
            padding: 10,
            borderRadius: 8,
            marginBottom: 12,
          }}
          onPress={scanNetwork}
        >
          <Text style={{ color: "white", textAlign: "center", fontWeight: "600" }}>
            Rescan for Planes
          </Text>
        </TouchableOpacity>
      )}

      {planes.length === 0 && !scanning && (
        <Text style={{ opacity: 0.7 }}>No planes found yet on {BASE_SUBNET}.x</Text>
      )}

      <FlatList
        data={planes}
        keyExtractor={(item) => item.id + item.ip}
        renderItem={renderPlane}
        style={{ marginTop: 8 }}
      />
    </View>
  );
}
