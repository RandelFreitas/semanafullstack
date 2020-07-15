import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <p className='mt-6 text-center'>
        Olá Semana Fullstack Master
      </p>
      <div className='text-center mt-12 my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>
      <p className='mt-6 text-center'>
        Olá Semana Fullstack Master
      </p>
    </div>
  )
}

export default Index;
    