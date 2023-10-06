import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";
import abacate from "../../../assets/abacate.png";
import morango from "../../../assets/morango.png";
import melancia from "../../../assets/melancia.png";
import laranja from "../../../assets/laranja.png";
import cereja from "../../../assets/cereja.png";
import melao from "../../../assets/melao.png";
import abacaxi from "../../../assets/abacaxi.png";
import pitaya from "../../../assets/pitaya.png";
import Topo from "./components/Topo";
import carrinho from "../../mocks/carrinho";
import Detalhe from "./components/Detalhe";
import Item from "./components/Item";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Topo titulo={carrinho.topo.titulo} />

      <View style={estilos.carrinho}>
        <Detalhe
          nome={carrinho.detalhes.nome}
          descricao={carrinho.detalhes.descricao}
        />

        <View style={estilos.divPesquisa}>
          <Entypo
            style={estilos.iconPesquisa}
            name="magnifying-glass"
            size={25}
            color="#900"
          />
          <TextInput style={estilos.inputPesquisa} placeholder="Buscar" />
        </View>

        <Item nomeProduto={""} titulo={""} preco={""} descricao={""} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    left: 1,
    fontSize: 26,
    lineHeight: 42,
    color: "#333333",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  divProduto: {
    backgroundColor: "#F7F7F7",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 15,
  },

  iconPesquisa: {
    top: 4,
    left: 5,
  },

  divPesquisa: {
    backgroundColor: "#dddddd",
    borderRadius: 5,
    height: 35,
    flexDirection: "row",
  },

  inputPesquisa: {
    left: 10,
    fontSize: 18,
  },
});
