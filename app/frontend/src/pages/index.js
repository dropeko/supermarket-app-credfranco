import React from 'react';
import { ShoppingBasket} from 'lucide-react';
import Link from 'next/link';


export default function Home() {
    return (
      <div className=" h-screen flex items-center justify-center">
        <div className="flex flex-col bg-blue-100 p-8 rounded-xl shadow-md">
          <h1 className="text-4xl text-center mb-6 text-black">Bem-vindo à Minha Aplicação</h1>
          <div className="flex text-2xl text-center mb-6 items-center justify-center">
            <ShoppingBasket />
          </div>
          <p className="text-center text-gray-600">
            O lugar onde grandes coisas acontecem.
          </p>
          <Link href="/login" className='flex items-center justify-center'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Ir para o Login
            </button>
          </Link>
        </div>
      </div>
    );
  }

