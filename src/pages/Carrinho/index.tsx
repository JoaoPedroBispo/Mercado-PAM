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
import Entypo from 'react-native-vector-icons/Entypo';
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
        <Text style={estilos.titulo}>Produtos em Estoque</Text>

        <Text style={estilos.subtitulo}>
          Com a qualidade e e preço baixo que voçê precisa.
        </Text>

        <View style={estilos.divPesquisa}>
        <Entypo name="magnifying-glass" size={30} color="#900" />
          <TextInput style={estilos.inputPesquisa} placeholder="Buscar" />
        </View>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={cereja} />
            <View>
              <Text style={estilos.nomeProduto}>Cereja</Text>
              <Text style={estilos.preco}>R$ 12,90 kg</Text>
              <Text style={estilos.descricao}>Loja Casa do Santana</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={morango} />
            <View>
              <Text style={estilos.nomeProduto}>Morango</Text>
              <Text style={estilos.preco}>R$ 3,70 kg</Text>
              <Text style={estilos.descricao}>Loja Pepe Delicinhas</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={melancia} />
            <View>
              <Text style={estilos.nomeProduto}>Melancia</Text>
              <Text style={estilos.preco}>R$ 10,99 kg</Text>
              <Text style={estilos.descricao}>Fazenda Hortifruti</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
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
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={abacate} />
            <View>
              <Text style={estilos.nomeProduto}>Abacate</Text>
              <Text style={estilos.preco}>R$ 9,90 kg</Text>
              <Text style={estilos.descricao}>Fazenda Bacate</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={pitaya} />
            <View>
              <Text style={estilos.nomeProduto}>Pitaya</Text>
              <Text style={estilos.preco}>R$ 9,90 kg</Text>
              <Text style={estilos.descricao}>Loja Pepe Delicinhas</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={melao} />
            <View>
              <Text style={estilos.nomeProduto}>Melão</Text>
              <Text style={estilos.preco}>R$ 9,90 kg</Text>
              <Text style={estilos.descricao}>Fazenda Gigantão</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={abacaxi} />
            <View>
              <Text style={estilos.nomeProduto}>Abacaxi</Text>
              <Text style={estilos.preco}>R$ 9,90 kg</Text>
              <Text style={estilos.descricao}>Fazenda Bacaxi</Text>
            </View>
          </View>
        </TouchableOpacity>
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

  preco: {
    left: 10,
    fontSize: 21,
    lineHeight: 42,
    color: "#E00029",
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

  subtitulo: {
    left: 1,
    color: "#4A4A4A",
    fontStyle: "italic",
  },

  descricao: {
    left: 10,
    color: "#4A4A4A",
    fontStyle: "italic",
  },

  divProduto: {
    backgroundColor: "#F7F7F7",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 15,
  },

  divPesquisa: {
    backgroundColor: "#dddddd",
    borderRadius: 5,
    height: 35,
    justifyContent: "center"
  },

  inputPesquisa: {
    left: 10,
    fontSize: 18
  }
});
