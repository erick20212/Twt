import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Pantalla de Perfil</Text>

      {/* WebView para reproducir el video local */}
      <WebView
        source={require("@/assets/fonts/levano.mp4")} // Carga el archivo HTML local
        style={styles.webview}
        allowsFullscreenVideo // Permite que el video se reproduzca en pantalla completa
        javaScriptEnabled // Habilita JavaScript (necesario para el reproductor de video)
        domStorageEnabled // Habilita el almacenamiento DOM
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  webview: {
    width: 300, // Ancho del WebView
    height: 200, // Alto del WebView
    borderRadius: 10, // Bordes redondeados
  },
});