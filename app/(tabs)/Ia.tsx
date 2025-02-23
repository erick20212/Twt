import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Para iconos

export default function IA() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Bienvenido", `Correo: ${email}`);
    }, 2000); // Simula una carga de 2s
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO IA</Text>
      <Image 
        source={require("@/assets/images/ia.jpg")} 
        style={styles.image} 
        resizeMode="contain" 
      />

      {/* Input de Correo */}
      <TextInput 
        style={[styles.input, !email && styles.inputError]} 
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input de Contraseña con botón para mostrar/ocultar */}
      <View style={styles.passwordContainer}>
        <TextInput 
          style={[styles.input, styles.passwordInput, !password && styles.inputError]} 
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons name={secureText ? "eye-off" : "eye"} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Botón de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Cargando..." : "Iniciar Sesión"}</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos mejorados
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#222",
    color: "white",
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#555",
  },
  inputError: {
    borderColor: "red",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#555",
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
