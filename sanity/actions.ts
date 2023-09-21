
import { groq } from 'next-sanity';
import { readclient } from './lib/client';
import { buildQuery } from './utilts';

interface GetResourcesParams {
 query:string;
 category: string;
 page: string;
}

export const getResources = async (params: GetResourcesParams ) => {

  const {query , category, page } = params;

  try {
    const resources = await readclient.fetch(
      groq`${buildQuery({
        type:'resource',
        query,
        category,
        page:parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );  
    
    return resources;
  } catch (error) {
    console.log(error);
 }
}

export const getResourcesPlaylist = async () => {

  try {
    const resources = await readclient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        title,
        _id,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );  
    
    return resources;
  } catch (error) {
    console.log(error);
 }
}


