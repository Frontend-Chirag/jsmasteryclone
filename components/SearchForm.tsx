"use client"
import React,{ useEffect, useState } from 'react';
import { Input } from './ui/input';

import Image from 'next/image';
import { formUrlQuery } from '@/sanity/utilts';
import { useSearchParams,useRouter,usePathname } from 'next/navigation';



const SearchForm = () => {

    const [ search, setSearch ] = useState('');
    const searchParms = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
      const delaydeBounceFn = setTimeout(() => {
        let newUrl = '';

        if(search){
         newUrl = formUrlQuery({
          params: searchParms.toString(),
          key:'query',
          value:search
         })
        } else {
          newUrl = formUrlQuery({
            params: searchParms.toString(),
            keytoRemove:['query']
          })
        }

        router.push(newUrl,{ scroll: false });
      },1000);

      return () => clearTimeout(delaydeBounceFn)

    },[search])

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-7 sm:px-5 '>
        <label className='relative flex-center w-full max-w-2xl' >
            <Image 
              src='/magnifying-glass.svg'  
              alt='searchIcon' 
              width={26} 
              height={26} 
              className='absolute left-8'
            />
            <Input 
             className='base-regular h-fit border-0 bg-[#1a1919]  py-3 pl-20 pr-8 
             text-white-800 !ring-0 !ring-offset-0 placeholder:text-white'
             type='text'
             placeholder='Search'
             value={search}
             onChange={(e) => setSearch(e.target.value) }
            />
        </label>
    </form>
  )
}

export default SearchForm