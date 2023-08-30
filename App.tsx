import React from "react";
import {StatusBar, ScrollView } from "react-native";
import Carrinho from "./src/pages/Carrinho";

export default function App() {

  return (
    <ScrollView>
      <StatusBar />
      <Carrinho />
    </ScrollView>
  );
}