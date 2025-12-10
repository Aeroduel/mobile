import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default function PlaneDiscoveryCard({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 20,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#111",
        borderWidth: 1,
        borderColor: "#FF0000",
      }}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        Detect Nearby Planes
      </Text>
      <Text style={{ color: "#ccc", marginTop: 4 }}>
        Scan your network for Foxtrot White / Dark Whiskey
      </Text>
    </TouchableOpacity>
  );
}
