import React, { useState } from "react";
import { View } from "react-native";
import JoinPlanesScanner from "@/components/Link/Planes/Join/JoinPlanesScanner";
import PlaneLinkCard from "@/components/Link/PlaneLinkCard";

export default function JoinPlanesScreen() {
  const [selectedPlane, setSelectedPlane] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      {!selectedPlane ? (
        <JoinPlanesScanner onPlaneSelected={setSelectedPlane} />
      ) : (
        <PlaneLinkCard plane={selectedPlane} />
      )}
    </View>
  );
}
