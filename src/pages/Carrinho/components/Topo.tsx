import React from "react";
import {StyleSheet, Image, Text, Dimensions } from "react-native";
import logo from "../../../../assets/logo.png";

const width = Dimensions.get("screen").width;

type Props = {
  titulo: string;
}

export default function Topo({titulo}: Props) {
  return (
    <>
      <Image source={logo} style={estilos.topo} />
      
    </>
  );
}


const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: (578 / 768) * width
    },
  
    titulo: {
      left: 1,
      fontSize: 26,
      fontWeight: "bold",
      lineHeight: 26,
      width: "100%",
      textAlign: "center",
      color: "#333333",
      position: "absolute",
      padding: 16,
    }
  });
  