// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import SobrasCarregamentoScreen from "../Screens/SobrasCarregamentoScreen";
import SobrasSalaNobreScreen from "../Screens/SobrasSalaNobreScreen";
import FluxoSalaNobreScreen from "../Screens/FluxoSalaNobreScreen";
import SeparacaoCarrinhos from "../Screens/SeparacaoCarrinhosScreen";
import LoginScreen from "../Screens/LoginScreen";
import { AuthProvider } from "../providers/AuthContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="SobrasCarregamento"
            component={SobrasCarregamentoScreen}
            options={{ title: "Sobras do Carregamento" }}
          />
          <Stack.Screen
            name="SobrasSalaNobre"
            component={SobrasSalaNobreScreen}
            options={{ title: "Sobras da Sala Nobre" }}
          />
          <Stack.Screen
            name="FluxoSalaNobre"
            component={FluxoSalaNobreScreen}
            options={{ title: "Fluxo Sala Nobre" }}
          />
          <Stack.Screen
            name="SeparacaoCarrinhos"
            component={SeparacaoCarrinhos}
            options={{ title: "Separação em ruas" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
