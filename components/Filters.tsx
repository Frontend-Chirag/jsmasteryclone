"use client"
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { formUrlQuery } from '@/sanity/utilts';


const links = ["All" , "Next 13", "Frontend", "Backend", "FullStack"  ];

const Filters = () => {

    const [ active, setActive ] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilters = (Link: string) => {
      let newUrl = '';
      
      if(active === Link ){
        setActive('');
        newUrl = formUrlQuery({
          params: searchParams.toString(),
         keytoRemove:['category']
        })

      } else {
         setActive(Link);
         newUrl = formUrlQuery({
           params: searchParams.toString(),
           key: 'category',
           value:Link.toLocaleLowerCase(),
         });  
   }

    router.push(newUrl,{scroll: false})
    }

  return (
    
   <ul className='text-white 
    body-text flex w-full max-w-full gap-3 py-8 overflow-auto no-scrollbar sm:max-w-2xl '>
     {links.map((link) => (
      <button 
        key={link}
        onClick={() => handleFilters(link)}
        className={`whitespace-nowrap px-8 py-2.5 capitalize`} 
      >
       {link}
      </button>
     ))}
    </ul>    
  )
}

export default Filters