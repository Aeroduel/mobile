import { Text, View, StyleSheet, Pressable, TouchableOpacity, Button } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from "react";
import { router } from "expo-router";

export default function QrEntry() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />
  }

  if (permission.granted) {
    return (
      <View style={styles.permissionsContainer}>
        <Text style={styles.permissionsText}>To scan a QR code, we need access to your camera. This allows you to quickly connect to a duel.</Text>
        <Text style={[styles.permissionsText, styles.privacyPolicy]}> View our privacy policy <Text style={styles.policyLink}>here</Text></Text>
        <Button onPress={requestPermission} title="Grant Permissions"></Button>
      </View>
    )
  }

  const toggleCameraDirection = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  const goBack = () => {
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Pressable>
        
      </Pressable>
      <CameraView style={styles.camera} facing={facing} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCameraDirection}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  permissionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'tranparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  permissionsText: {
    fontFamily: 'Coolvetica-Regular',
    fontSize: 24,
    width: 350,
    textAlign: 'center',
    marginBottom: 20,
  },
  privacyPolicy: {
    fontSize: 16,
  },
  policyLink: {
    color: '#007AFF',
  }
})