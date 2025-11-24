import { Text, View, StyleSheet, Pressable } from "react-native";
import { Camera, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from "react";

export default function QrEntry() {
  const [cameraSide, setCameraSide] = useState(CameraType.back);
  const [permissions, requestPermissions] = useCameraPermissions();
  return (
    <View>
      <Text style={{ color: 'white'}}>QR Entry Page (Will open the camera, just a route for now)</Text>
    </View>
  )
}