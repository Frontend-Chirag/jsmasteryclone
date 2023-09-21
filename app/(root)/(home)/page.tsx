

import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourcesCard from '@/components/ResourcesCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import React from 'react'


interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {

  const resources = await getResources({
    query: searchParams?.query || '', 
    category: searchParams?.category || '',
    page:'1',
  });

  const resoucesPlaylist = await getResourcesPlaylist();
 
  return (
    <main className="flex-center paddings mx-auto relative w-full max-w-screen-2xl flex-col">
      <div className='z-[-1] w-[100px] h-[100px] linear absolute sm:left-[15px]  left-[0px] top-[5%] '></div>
      <div className='z-[-1] w-[100px] h-[100px] linear absolute sm:left-[35px]  left-[18px]  top-[7%]'></div>
      <div className='z-[-1] w-[100px] h-[100px] linear absolute sm:left-[15px]  left-[0px] top-[9%]'></div>
      <div className='z-[-1] w-[100px] h-[100px] linear absolute right-[20px] top-[10%] rounded-full'></div>
      <div className='z-[-1] w-[100px] h-[100px] linear absolute right-[-15px] top-[13%] rounded-full'></div>
      <div className='z-[-1] w-[100px] h-[100px] linear absolute right-[5px] top-[16%] rounded-full'></div>
    
    <section className="nav-padding w-full">
      <div className='flex-center relative  min-h-[264px] w-full flex-col rounded-xl 
        border-solid bg-banner bg-cover  bg-center text-center'>
          <h1 className='text-white heading2 sm:heading1 text-center mb-6'>
            JavaScript Mastery Resources
          </h1>
      </div>
      <SearchForm />
    </section>

    <Filters/>
    
    {(searchParams?.query || searchParams?.category ) && (

    <section className='flex-center mt-6 w-full flex-col sm:mt-20 '>
      <Header 
       query={searchParams?.query || ''}
       category={searchParams?.category || ''}
      />
      <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        {resources?.length > 0 ? (
          resources.map((resource: any) => (
            <ResourcesCard
             key={resource._id}
             title={resource.title}
             id={resource._id}
             image={resource.image}
             downloadNumber={resource.views}
             downloadLink={resource.downloadLink}
            />
          ))
        ) : (
          <p className='body-regular text-white'>
            No Resources Found
          </p>
        )
        }
      </div>
    </section>
    )}

    {(!searchParams?.query || !searchParams?.category ) && 

     resoucesPlaylist.map((item : any ) => (
      <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading3 self-start text-white'>
            {item.title}
          </h1>
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
             {item.resources.map((resource: any) => (
                <ResourcesCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
            />
          ))}
          </div>
      </section>
     ))
     }
    </main>
  )
}

export default Page