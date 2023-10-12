import Header from '@/components/header';
import React, { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import Footer from '@/components/footer';
import { Separator } from "../components/ui/separator"
import { MenuIcon } from 'lucide-react'

export default function Manager() {
  const [products, setProducts] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    id: 0,
    nome: '',
    valor: 0,
    desconto: 0,
    pontos: 0,
  });

  const handleProdutoChange = (event) => {
    const { name, value } = event.target;

    setNovoProduto({
      ...novoProduto,
      [name]: value,
    });
  };

  const handleSubmitNovoProduto = (event) => {
    event.preventDefault();

    axios.post('/manager', novoProduto).then((response) => {
      console.log('Produto cadastrado com sucesso', response.data);
    });

    // Limpa o formulário
    setNovoProduto({
      nome: '',
      valor: 0,
      desconto: 0,
      pontos: 0,
    });

    window.location.reload();
  };


  useEffect(() => {
    axios.get('/manager').then((response) => {
      setProducts(response.data[0]);
      setClientes(response.data[1]);
    });
  }, []);

  return (
    <div className="h-screen flex flex-col p-2 justify-between">
      <Header />
      <div className='border border-white  flex flex-col items-center p-3'>

        <div className='flex items-center justify-center mb-4'>
          <h3 className="text-2xl mr-1">Area do Gerente</h3>
          <MenuIcon className='h-6 w-6' />
        </div>
        <Separator className="h-1 mb-4" />

        <div className='flex justify-around w-full'>
          <section className="mb-6 border border-white  flex flex-col items-center p-4 rounded-xl">
            <h3 className="text-xl mb-2">Clientes Cadastrados:</h3>
            <Separator className="h-1 mb-1" />
            <ul className='flex flex-col items-center justify-center'>
              {clientes.map((cliente) => (
                <li key={cliente.id}>{cliente.name} - {cliente.points} pontos</li>
              ))}
            </ul>
          </section>

          <Separator orientation="vertical" className="h-100 w-1 mb-1" />

          <section className="mb-6 border border-white  flex flex-col items-center p-4 rounded-xl">
            <h3 className="text-xl mb-2 leadi">Produtos em Promoção:</h3>
            <Separator className="h-1 mb-1" />
            <ul>
              {products.map((produto) => (
                <li key={produto.id}>
                  {produto.nome} - R$ {produto.valor}
                </li>
              ))}
            </ul>
          </section>

          <Separator orientation="vertical" className="h-100 w-1 mb-1" />

          <section className='border border-white  flex flex-col items-center p-4 rounded-xl'>

            <h3 className="text-xl mb-2">Cadastrar Novo Produto em Promoção:</h3>
            <Separator className="h-1 mb-1" />
            <form onSubmit={handleSubmitNovoProduto}>
              <div className="mb-4">
                <label htmlFor="nome" className="block">Nome Produto:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={novoProduto.nome}
                  onChange={handleProdutoChange}
                  required
                  className="border rounded-xl text-black p-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="valor" className="block">Valor:</label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  value={novoProduto.valor}
                  onChange={handleProdutoChange}
                  required
                  className="border rounded-xl p-2 text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="desconto" className="block">Desconto:</label>
                <input
                  type="number"
                  id="desconto"
                  name="desconto"
                  value={novoProduto.desconto}
                  onChange={handleProdutoChange}
                  required
                  className="border rounded-xl p-2 text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="pontos" className="block">Pontos Necessários:</label>
                <input
                  type="number"
                  id="pontos"
                  name="pontos"
                  value={novoProduto.pontos}
                  onChange={handleProdutoChange}
                  required
                  className="border rounded-xl p-2 text-black"
                />
              </div>
              <div className='flex items-center justify-center'>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black font-bold rounded-xl"
                >
                  Cadastrar Produto
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Footer />
  
    </div>
  );
}
