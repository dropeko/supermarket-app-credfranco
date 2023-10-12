import React from 'react';
import { ShoppingBasket} from 'lucide-react';
import Header from "@/components/header";
import Footer from '@/components/footer';
import Link from 'next/link';


export default function Home() {
    return (
      <div className=' flex flex-col w-full h-screen justify-between border p-1'>
        <Header />
        <div className=" w-full flex items-center justify-center">
          <div className="flex flex-col bg-blue-100 p-8 rounded-xl shadow-md items-center">
            <h1 className="text-4xl text-center mb-6 text-black bg-white rounded-xl w-full">Bem-vindo</h1>
            <div className="flex text-2xl text-center mb-4 items-center justify-center bg-black w-min rounded-xl">
              <ShoppingBasket />
            </div>
            <p className="text-center text-gray-800 mb-4">
              Desafio Técnico - CREDFRANCO
            </p>
            <Link href="/login" className='flex items-center justify-center'>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-xl">
                Ir para o Login
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

