import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const profiles = [
  { id: 1, name: "Usuario 1", image: require("@/assets/images/gati.jpg") },
  { id: 2, name: "Usuario 2", image: require("@/assets/images/saja.jpeg") },
  { id: 3, name: "Usuario 3", image: require("@/assets/images/saja2.jpeg") },

];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Pantalla de Búsqueda</Text>

      {/* ScrollView para permitir desplazamiento horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {profiles.map((profile) => (
          <View key={profile.id} style={styles.profileContainer}>
            <Image source={profile.image} style={styles.profileImage} />
            <Text style={styles.profileName}>{profile.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  profileImage: {
    width: 80, // Tamaño del círculo
    height: 80, // Tamaño del círculo
    borderRadius: 40, // La mitad del width/height para hacerlo circular
    borderWidth: 2, // Borde opcional
    borderColor: "#fff", // Color del borde
  },
  profileName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});