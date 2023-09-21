import qs from 'query-string';

interface BuildQueryParams{
    type: string,
    query: string,
    category: string,
    page: number,
    perPage?: number
}   

export function buildQuery(params: BuildQueryParams){
  const { type, query, category, page = 1, perPage = 20 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`title match "*${query}*"`);

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }
  // Calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}

interface UrlQuerParams {
 params: string;
 key?: string;
 value?: string | null;
 keytoRemove?: string[];
}

export function formUrlQuery({ params, key, value, keytoRemove }: UrlQuerParams){
 
  const currentUrl = qs.parse(params);

  if(keytoRemove){
    keytoRemove.forEach((keytoRemove) => {
      delete currentUrl[keytoRemove];
     })
  } else if( key && value) {  
    currentUrl[key] = value;
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl},
    { skipNull: true }
  )
}