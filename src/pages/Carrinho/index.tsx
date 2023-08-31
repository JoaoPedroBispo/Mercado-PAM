import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
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

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Image source={logo} style={estilos.topo} />

      <View style={estilos.carrinho}>
        <Text style={estilos.titulocarrinho}>Produtos em Estoque</Text>


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

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={pitaya} />
          <View>
            <Text style={estilos.nomeProduto}>Pitaya</Text>
            <Text style={estilos.preco}>R$ 9,90 kg</Text>
            <Text style={estilos.descricao}>
              Fazenda Pepe Delicinhas
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={melao} />
          <View>
            <Text style={estilos.nomeProduto}>Melão</Text>
            <Text style={estilos.preco}>R$ 9,90 kg</Text>
            <Text style={estilos.descricao}>
              Fazenda Gigantão
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={abacaxi} />
          <View>
            <Text style={estilos.nomeProduto}>Abacaxi</Text>
            <Text style={estilos.preco}>R$ 9,90 kg</Text>
            <Text style={estilos.descricao}>
              Fazenda Bacaxi
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

  titulocarrinho: {
    left: 3,
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  preco: {
    left: 10,
    fontSize: 26,
    lineHeight: 42,
    color: "#FF0000",

  },

  imagemProduto: {
    width: 92,
    height: 92,
    borderRadius: 5,
  },

  nomeProduto: {
    left: 10,
    fontSize: 18,
    lineHeight: 26,
  },

  descricao: {
    left: 10,
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  divProduto: {
    flexDirection: 'row',
    marginTop: 20,
  }
});