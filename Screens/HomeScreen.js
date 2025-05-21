import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../providers/AuthContext"; // ajuste o caminho se necessário

export default function SeparaçaodeCarrinhos({ navigation }) {
  const { user, logout } = useAuth(); // Pega o usuário do contexto

  const handleOpenForm = () => {
    Linking.openURL("https://forms.gle/gC6cSvuYmwMBm1eW8");
  };

  const handleOpenAnalytics = () => {
    Linking.openURL("https://dimex-nu.vercel.app");
  };

  const handleLogout = () => {
    logout(); // Limpa o usuário e AsyncStorage
    navigation.replace("Login"); // Redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Controle de Operações Logísticas</Text>
      </View>

      <View style={styles.cardsContainer}>
        {/* Se ADMIN: exibe todos os cards */}
        {user?.role === "ADMIN" && (
          <>
            <Card
              icon="local-shipping"
              title="Sobras de Carregamento"
              subtitle="Registrar no app"
              onPress={() => navigation.navigate("SobrasCarregamento")}
            />

            <Card
              icon="meeting-room"
              title="Sobras da Sala Nobre"
              subtitle="Registrar no app"
              onPress={() => navigation.navigate("SobrasSalaNobre")}
            />

            <Card
              icon="swap-vert"
              title="Fluxo da sala nobre"
              subtitle="Registrar código da caixa"
              onPress={() => navigation.navigate("FluxoSalaNobre")}
            />

            <Card
              icon="shopping-cart"
              title="Separação de carrinhos (FormGoogle)"
              subtitle="Acessar formulário google"
              onPress={handleOpenForm}
            />

            <Card
              icon="shopping-cart"
              title="Separação de carrinhos (nativo)"
              subtitle="Registros de separação"
              onPress={() => navigation.navigate("SeparacaoCarrinhos")}
            />
          </>
        )}

        {/* Se USER: exibe apenas o card "Fluxo da sala nobre" */}
        {user?.role === "USER" && (
          <Card
            icon="swap-vert"
            title="Fluxo da sala nobre"
            subtitle="Registrar código da caixa"
            onPress={() => navigation.navigate("FluxoSalaNobre")}
          />
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color="#FFFFFF" />
        <Text style={styles.logoutButtonText}>SAIR</Text>
      </TouchableOpacity>

      {/* Botão Fixo de Analytics (visível para todos) */}
      <TouchableOpacity
        style={styles.analyticsButton}
        onPress={handleOpenAnalytics}
      >
        <MaterialIcons name="analytics" size={24} color="#FFFFFF" />
        <Text style={styles.analyticsButtonText}>WEB PAGE ANALYTICS</Text>
      </TouchableOpacity>
    </View>
  );
}

// Componente de Card reutilizável
function Card({ icon, title, subtitle, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={28} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{title}</Text>
        <Text style={styles.cardSubtext}>{subtitle}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#E8F5E9" />
    </TouchableOpacity>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2E7D32",
    textAlign: "center",
  },
  cardsContainer: {
    width: "100%",
    flex: 1,
    marginBottom: 70,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "100%",
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#1B5E2040",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
  },
  iconContainer: {
    backgroundColor: "#4CAF50",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "600",
  },
  cardSubtext: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },
  analyticsButton: {
    position: "absolute",
    left: 24,
    bottom: 24,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#1B5E20",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  analyticsButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 17,
    marginLeft: 8,
  },

  logoutButton: {
    position: "absolute",
    right: 24,
    bottom: 24,
    backgroundColor: "#E53935",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#B71C1C",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 17,
    marginLeft: 8,
  },
});
