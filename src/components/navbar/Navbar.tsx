import React from 'react'
import {UserCircle, ShoppingCart, GameController } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            
            <div className='flex gap-1 ml-3 text-2xl font-bold uppercase'>
            <GameController size={32} />
            Loja de Games
            </div>

            <div className='flex gap-4'>
              <Link to ='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <UserCircle size={32} />
              <ShoppingCart size={32} />
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar