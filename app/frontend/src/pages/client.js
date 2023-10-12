import Footer from "@/components/footer";
import Header from "@/components/header";
import axios from '@/lib/axios';
import React, { useState, useEffect } from 'react';

export default function Client() {
  const [pontuacao, setPontuacao] = useState(100); // Inicialmente, definimos a pontuação como 100 (ou qualquer valor inicial desejado)
  const [trocaRealizada, setTrocaRealizada] = useState(false); // Para rastrear se a troca foi realizada
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [products, setProducts] = useState([]);


  const handleProductSelected = (points) => {
    const novaPontuacao = pontuacao - points;
    setPontuacao(novaPontuacao);
    setTrocaRealizada(true)
  }

  const handleProductChange = (event) => {
    console.log(event.target.value);
    setSelectedProduct(event.target.value);
  };

  const handleExchange = () => {
    // Verifica se um produto foi selecionado
    if (selectedProduct) {
      console.log(selectedProduct);
      // Chama a função de troca passando o produto selecionado
      handleProductSelected(selectedProduct);
      // Limpa a seleção
      setSelectedProduct([]);
    }
  };


  useEffect(() => {
    axios.get('/client').then((response) => {
      setProducts(response.data[0]);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className=" flex flex-col border border-white rounded-xl items-center">
      <div className="w-full p-4">
        <div className="flex justify-center items-center">
          <h2 className="text-xl mb-4">Listagem de Produtos em Promoção</h2>
        </div>
        <div className="border border-white rounded-md p-2">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-300">
                <th className="border px-4 py-2">Nome do Produto</th>
                <th className="border px-4 py-2">Valor</th>
                <th className="border px-4 py-2">Valor com Desconto</th>
                <th className="border px-4 py-2">Pontos Necessários</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="text-center">
                  <td className="border px-4 py-2">{product.nome}</td>
                  <td className="border px-4 py-2">R$ {product.valor}</td>
                  <td className="border px-4 py-2">R$ {(product.valor - product.desconto).toFixed(2)}</td>
                  <td className="border px-4 py-2">{product.pontos} pontos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="w-full p-4">
        <h2 className="text-2xl mb-4">Trocar Pontuação por Produtos</h2>
        <div className="flex space-x-4">
          <select
            className="w-1/2 border p-2 rounded-md text-black"
            onChange={handleProductChange}
            value={selectedProduct}
          >
            <option value={selectedProduct} className="text-black">Selecione um produto</option>
            {products.map((product) => (
              <option key={product.id} value={product.pontos} className="text-black">
                {product.nome} - {product.pontos} pontos
              </option>
            ))}
          </select>
          <button
            className="px-4 py-2 bg-white text-black rounded-xl"
            onClick={handleExchange}
            disabled={!selectedProduct}
          >
            Trocar
          </button>
          {trocaRealizada && (
            <div className="flex flex-1 w-full items-center justify-center">
              <p className="border border-gray-500 rounded-xl p-4">
                Troca realizada com sucesso! Retire seu voucher no ato da próxima compra.
              </p>
            </div>
          )}
        </div>
      </div>


        <div className="flex flex-col items-center">
          <h2>Pontuação: {pontuacao}</h2>
          <br />
        </div>
      </div>

      <Footer />

    </div>
  );
}