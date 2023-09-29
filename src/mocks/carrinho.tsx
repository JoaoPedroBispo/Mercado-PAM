import abacate from "../../../assets/abacate.png";
import morango from "../../../assets/morango.png";
import melancia from "../../../assets/melancia.png";
import laranja from "../../../assets/laranja.png";
import cereja from "../../../assets/cereja.png";
import melao from "../../../assets/melao.png";
import abacaxi from "../../../assets/abacaxi.png";
import pitaya from "../../../assets/pitaya.png";

const carrinho = {
    topo: {
        titulo: "Detalhes do Carrinho",
    },
    detalhes: {
        nome: "Produtos em Estoque",
        descricao: "Com a qualidade e e preço baixo que voçê precisa.",
    },
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "Cereja",
          imagem: cereja,
          preco: "R$ 12,09 kg"
        },
        {
          nome: "Morango",
          imagem: morango,
          preco: "R$ 3,70 kg"
        },
        {
          nome: "Melancia",
          imagem: melancia,
          preco: "R$ 10,90 kg"
        },
        {
          nome: "Laranja",
          imagem: laranja,
          preco: "R$ 2,50 kg"
        },
        {
          nome: "Abacate",
          imagem: abacate,
          preco: "R$ 9,90 kg"
        },
        {
            nome: "Pitaya",
            imagem: pitaya,
            preco: "R$ 9.90 kg"
        },
        {
            nome: "Melão",
            imagem: melao,
            preco: "R$ 5,70 kg"
        },
        {
            nome: "Abacaxi",
            imagem: abacaxi,
            preco: "R$ 10.00 kg"
        }

      ]
    }
  }

export default carrinho;