import React, { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Header from "@/components/header";
import Footer from '@/components/footer';

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
      <Header />

      <main className="flex-1 p-6 flex gap-6 justify-center mt-40">
        <div className='flex flex-col gap-4 border-white rounded-xl h-56 border justify-center p-4 bg-gray-800'>
          <h2 className='flex justify-center text-xl'>Login:</h2>
          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
              <label className=''>
                Email:
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
              <div className='flex flex-auto items-center justify-center rounded-xl border border-white mt-2 w-full'>
                <button type="submit" className=''>Entrar</button>
              </div>
            </form>
          </div>
        </main>

        <Footer />
    </div>
  )
}
