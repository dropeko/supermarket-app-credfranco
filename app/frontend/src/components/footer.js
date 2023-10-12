import { Computer } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='flex justify-center items-center border border-gray-500 mt-3'>
      <h3>
        Desenvolvido por PHCA.dev
      </h3>
      <Computer 
          className="w-4 h-4 ml-1"
        /> 
  </footer>
  )
}