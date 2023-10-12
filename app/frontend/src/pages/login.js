import React, { useState } from 'react';
import { Github, ShoppingCartIcon, Computer } from 'lucide-react'
import { Separator } from "../components/ui/separator"
import { Button } from "../components/ui/button"
import { useAuth } from '@/hooks/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, user } = useAuth({middleware: "guest"})

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if(isLoading || user) {
    return (
      <>
        Is loading....
      </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do login para o servidor
    login({ email, password })
  };



  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b-2">

        <h1 className="text-xl font-bold flex items-center">
          <Computer 
            className="w-4 h-4 mr-2"
          />
          PHCA.dev
        </h1>

        <h1 className="text-xl font-bold">SuperMarket App</h1>

        <div className="flex items-center gap-3">
          <Separator orientation="vertical" className="h-6" />
          <Button variant="secondary">
            <Github className="w-4 h-4 mr-2" />
            <a href='https://github.com/dropeko' target='_blank'>GitHub</a>
          </Button>
        </div>
      </header>


      <main className="flex-1 p-6 flex gap-6 justify-center mt-40">
        <div className='flex flex-col gap-4 border-white rounded-xl h-56 border justify-center p-4'>
          <h2 className='flex justify-center text-xl'>Login:</h2>
          <form onSubmit={handleSubmit} className=''>
              <label className=''>
                Usuário:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className='mb-1 ml-1 text-black'
                />
              </label>
              <br />
              <label>
                Senha:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className='ml-1 text-black'
                />
              </label>
              <br />
              <div className='flex flex-auto items-center justify-center rounded-xl border border-white mt-2'>
                <button type="submit" className=''>Entrar</button>
              </div>
            </form>
          </div>
        </main>

      <footer className='flex justify-center'>
        <span>
          Desenvolvido com 💛 por PHCA.dev 
        </span>
      </footer>
    </div>
  )
}
