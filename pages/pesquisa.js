import React from 'react';
import Link from 'next/link';

const Pesquisa =() =>{
  return(
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2x1'>Criticas e sugestoes</h1>
      <p className='text-center'>O condominio MRV busca sempre ouvir seus codominos</p>
      <div className='w-1/5 mx-auto mb-6'>
        <label className='font-bold'>Seu nome</label>
        <input className='p-4 block shadow bg-blue-100 my-2 rounded' type='text'/>
      </div>
    </div>
  )
}

export default Pesquisa;