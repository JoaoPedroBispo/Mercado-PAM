import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";
import abacate from "../../../assets/abacate.png";
import morango from "../../../assets/morango.png";
import melancia from "../../../assets/melancia.png";
import laranja from "../../../assets/laranja.png";
import cereja from "../../../assets/cereja.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />

      <View style={estilos.carrinho}>
        <Text style={estilos.titulocarrinho}>Produtos em Estoque</Text>

        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Text style={estilos.nomefazenda}>Jaú Serve Supermercado</Text>
        </View>

        <Text style={estilos.descricao}>
          Com a qualidade e e preço baixo que voçê precisa.
        </Text>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={cereja} />
          <View>
           <Text style={estilos.nomeProduto}>Cereja</Text>
           <Text style={estilos.preco}>R$ 12,90 kg</Text>
           <Text style={estilos.descricao}>
            Fazenda Etec Cidade do Livro
           </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={morango} />
          <View>
           <Text style={estilos.nomeProduto}>Morango</Text>
           <Text style={estilos.preco}>R$ 3,70 kg</Text>
           <Text style={estilos.descricao}>
            Fazenda Pepe Delicinhas
           </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={melancia} />
          <View>
            <Text style={estilos.nomeProduto}>Melancia</Text>
            <Text style={estilos.preco}>R$ 10,99 kg</Text>
            <Text style={estilos.descricao}>
              Fazenda Hortifruti
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={laranja} />
          <View>
            <Text style={estilos.nomeProduto}>Laranja</Text>
            <Text style={estilos.preco}>R$ 2,50 kg</Text>
            <Text style={estilos.descricao}>
              Fazenda Etec Cidade do Livro
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={abacate} />
          <View>
            <Text style={estilos.nomeProduto}>Abacate</Text>
            <Text style={estilos.preco}>R$ 9,90 kg</Text>
            <Text style={estilos.descricao}>
              Fazenda Bacate
            </Text>
          </View>
        </View>
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
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16,
  },

  titulocarrinho: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratBold",
  },

  imagemFazenda: {
    width: 82,
    height: 52,
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

  imagemProduto: {
    width: 92,
    height: 92,
  },

  nomeProduto: {
    fontSize: 18,
    lineHeight: 26,
  },

  divProduto: {
    flexDirection: 'row',
    marginTop: 25
  }
});