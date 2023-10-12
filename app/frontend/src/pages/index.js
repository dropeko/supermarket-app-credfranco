import React from 'react';
import { ShoppingBasket} from 'lucide-react';
import Header from "@/components/header";
import Footer from '@/components/footer';
import Link from 'next/link';


export default function Home() {
    return (
      <div className=' flex flex-col w-full h-screen justify-between border p-1'>
        <Header />
        <div className=" w-full  flex items-center justify-center">
          <div className="flex flex-col bg-gray-800 p-8 rounded-xl shadow-md items-center mb-40">
            <h1 className="text-4xl text-center mb-6 text-black bg-white rounded-xl w-full">Bem-vindo</h1>
            <div className="flex text-2xl text-center mb-4 items-center justify-center w-min rounded-xl">
              <ShoppingBasket className='h-10 w-10'/>
            </div>
            <p className="text-center text-white mb-4">
              Desafio Técnico - CREDFRANCO
            </p>
            <Link href="/login" className='flex items-center justify-center'>
              <button className="border border-white text-white px-4 py-2 rounded-xl">
                Ir para o Login
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

