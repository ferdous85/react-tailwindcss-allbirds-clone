import React from 'react';


function App() {
  const categories=[
      `Women's Running Shoes`,
        `Everyday Sneakers`,
        `Slio-Ons`,
        `High Tops`,
        `Boat Shoes`,
        `Flats`,
        `Weather Repellent Shoes`
  ]

  return (
    <div >
     <div className="px-4 py-1 bg-red-500 text-white" >
    <p className="text-xs font-medium text-center">
      We're raising prices on all products by 1$ today in support of the planet. {' '}
      <a href="/" className="underline">Learn More</a>
    </p>
     </div>
     <header className="relative flex px-5 py-3 items-center justify-between bg-white shadow-lg">
       <div className='absolute inset-0 shadow-lg opacity-50'></div>
       <div className='flex'>
         <button className='h-8 w-8'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
         </button>
       </div>
       <div className='flex'>
         <img className='h-8'
         src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg" alt="Allbirds" srcset="" />
       </div>
       <div className='flex'>
         <button className='h-8 w-8'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
         </button>
       </div>
     </header>
     <main>
       <div className='flex justify-between item-center px-8 py-4 pt-4 pb-3'>
        <div>
        <div className='text-xs font-medium text-gray-900 space-x-1'>
          <a href="/" className='underline' >Home</a>
          <span>/</span>
        </div>
        <div className='text-lg font-bold text-gray-900'>
          Women's Shoes
        </div>
        </div>
        <div className='flex'>
          <button className='h-6 w-6'>
          <svg xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          </button>
        </div>
       </div>
       <div>
       <div className='bg-gray-100 pt-6' >
        {categories.map((category)=>(
          <a href="/"> {category} </a>
        ))}
       </div>
       </div>
     </main>

    </div>
  );
}

export default App;
