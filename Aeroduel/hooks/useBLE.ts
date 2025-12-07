import { useEffect, useState } from "react";
import * as Bluetooth from "expo-bluetooth"; // Expo BLE library

// Define a TypeScript type for Bluetooth devices
export type BLEDevice = {
  id: string;        // Unique identifier for the device
  name: string | null; // Device name (may be null if not broadcasted)
};

// Custom React hook for handling Bluetooth LE
export default function useBLE() {
  // State to keep track of scanned devices
  const [devices, setDevices] = useState<BLEDevice[]>([]);

  // State to track if a scan is in progress
  const [scanning, setScanning] = useState(false);

  // State to store the device currently connected
  const [connectedDevice, setConnectedDevice] = useState<BLEDevice | null>(null);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Request Bluetooth permissions on device
    Bluetooth.requestPermissionsAsync()
      .then(({ granted }) => {
        if (!granted) console.warn("Bluetooth permission denied");
      })
      .catch((err) => console.error("Permission request error:", err));
  }, []); // empty dependency array means this runs only once

  // Function to start scanning for nearby BLE devices
  const startScan = async () => {
    setDevices([]);     // Clear previous scan results
    setScanning(true);  // Mark scanning as active

    try {
      // Start scanning. The callback is called for every device discovered.
      const subscription = Bluetooth.startDeviceScan(
        null, // null = no specific service UUID filter, scan for all
        null, // null = default scan options
        (error, device) => {
          if (error) {
            console.error("Scan error:", error);
            setScanning(false);
            return;
          }

          // Add device to list if not already added
          if (device && !devices.find(d => d.id === device.id)) {
            setDevices(prev => [...prev, { id: device.id, name: device.name }]);
          }
        }
      );

      // Stop scanning automatically after 10 seconds
      setTimeout(() => {
        Bluetooth.stopDeviceScan();
        setScanning(false);
      }, 10000);

      // Return the subscription so it can be cancelled if needed
      return subscription;
    } catch (err) {
      console.error("Failed to start scan:", err);
      setScanning(false);
    }
  };

  // Function to connect to a specific BLE device
  const connectToDevice = async (deviceId: string) => {
    try {
      const device = await Bluetooth.connectToDeviceAsync(deviceId); // Connect to device
      setConnectedDevice({ id: device.id, name: device.name });       // Save connected device
      console.log("Connected to", device.name);
    } catch (err) {
      console.error("Connection failed:", err);
    }
  };

  // Return all the state and functions so other components can use them
  return { devices, scanning, connectedDevice, startScan, connectToDevice };
}
