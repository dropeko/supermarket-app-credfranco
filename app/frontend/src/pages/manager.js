import Header from '@/components/header';
import React, { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import Footer from '@/components/footer';

export default function Manager() {
  const [products, setProducts] = useState([]);

  // Dados simulados (você deve substituir isso por seus próprios dados ou lógica)
  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Cliente 1', pontos: 50 },
    { id: 2, nome: 'Cliente 2', pontos: 80  },
    { id: 3, nome: 'Cliente 3', pontos: 100  },
  ]);

  const [produtosEmPromocao, setProdutosEmPromocao] = useState([
    { id: 1, nome: 'Produto A', valor: 50, desconto: 10, pontos: 100 },
    { id: 2, nome: 'Produto B', valor: 30, desconto: 5, pontos: 50 },
    { id: 3, nome: 'Produto C', valor: 25, desconto: 8, pontos: 80 },
  ]);

  const [novoProduto, setNovoProduto] = useState({
    id: 6,
    nome: '',
    valor: 0,
    desconto: 0,
    pontos: 0,
  });

  const handleProdutoChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({
      ...novoProduto,
      [name]: value,
    });
  };

  const handleSubmitNovoProduto = (e) => {
    e.preventDefault();

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
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-2">
      <Header />
      <div className='border border-white  flex flex-col items-center p-3'>

        <h2 className="text-2xl mb-4">Página do Gerente</h2>

        <section className="mb-6 border border-white  flex flex-col items-center p-2 w-full">
          <h3 className="text-xl mb-2">Clientes Cadastrados:</h3>
          <ul>
            {clientes.map((cliente) => (
              <li key={cliente.id}>{cliente.nome} - {cliente.pontos} pontos</li>
            ))}
          </ul>
        </section>

        <section className="mb-6 border border-white  flex flex-col items-center p-2 w-full">
          <h3 className="text-xl mb-2">Produtos em Promoção:</h3>
          <ul>
            {products.map((produto) => (
              <li key={produto.id}>
                {produto.nome} - R$ {produto.valor}
              </li>
            ))}
          </ul>
        </section>

        <section className='border border-white  flex flex-col items-center p-2 w-full'>

          <h3 className="text-xl mb-2">Cadastrar Novo Produto em Promoção:</h3>

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
                className="border rounded-xl p-1 text-black"
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
                className="border rounded-xl p-1 text-black"
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
                className="border rounded-xl p-1 text-black"
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
                className="border rounded-xl p-1 text-black"
              />
            </div>
            
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black font-bold rounded-xl"
            >
              Cadastrar Produto
            </button>
          </form>
        </section>
      </div>

      <Footer />
  
    </div>
  );
}
