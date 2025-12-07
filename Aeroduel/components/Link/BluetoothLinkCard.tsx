import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import useBLE from "../../hooks/useBLE";

export default function BluetoothLinkCard() {
  const { devices, scanning, startScan, connectToDevice, connectedDevice } = useBLE();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bluetooth</Text>
      <Text style={styles.subtitle}>
        Connect to the plane&apos;s integrated ESP32 microcontroller via Bluetooth
      </Text>

      <Button title={scanning ? "Scanning..." : "Scan for planes"} onPress={startScan} />

      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => connectToDevice(item.id)}
            style={styles.deviceItem}
          >
            <Text style={styles.deviceName}>{item.name || "Unnamed device"}</Text>
          </TouchableOpacity>
        )}
      />

      {connectedDevice && (
        <Text style={styles.connectedText}>Connected to: {connectedDevice.name}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10, padding: 10, borderRadius: 10, backgroundColor: "#91484880" },
  header: { fontSize: 24, color: "#fff", fontFamily: "Coolvetica-Regular" },
  subtitle: { fontSize: 16, color: "#fff", marginBottom: 10 },
  deviceItem: { padding: 10, borderBottomWidth: 1, borderColor: "#fff" },
  deviceName: { color: "#fff" },
  connectedText: { marginTop: 10, color: "#0f0" },
});
