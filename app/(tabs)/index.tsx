import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // URL del video embebido (por ejemplo, un video de YouTube)
  const videoUrl = 'https://www.youtube.com/watch?v=lVGyb-AlfGA'; // Cambia esta URL por la que desees

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: videoUrl }} // Puedes usar una URL o un archivo HTML
        style={styles.webview}
        allowsFullscreenVideo // Permite que el video se reproduzca en pantalla completa
        javaScriptEnabled // Habilita JavaScript (necesario para muchos reproductores de video)
        domStorageEnabled // Habilita el almacenamiento DOM (necesario para algunos reproductores)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});