import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import logo from "../../../../assets/logo.png";

type Props = {
  nome: string;
  descricao: string;
};

export default function Detalhe({ nome, descricao }: Props) {
  return (
    <>
      <Text style={estilos.titulo}>{nome}</Text>
      <Text style={estilos.subtitulo}>{descricao}</Text>
    </>
  );
}

const estilos = StyleSheet.create({
  titulocarrinho: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
  },

  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2a9f85",
    marginTop: 8,
  },

  titulo: {
    left: 1,
    fontSize: 26,
    lineHeight: 42,
    color: "#333333",
    fontFamily: "MontserratBold",
  },

  subtitulo: {
    left: 1,
    color: "#4A4A4A",
    fontStyle: "italic",
  },
});
