interface Props {
  query: string,
  category: string,
}

const Header = ({ query, category }: Props) => {
 
  if(query && category){
    return (
      <h1 className="self-start text-white heading3">
        Search results for "{query}" in 
        <span className="capitalize"> {category} </span>
      </h1>
    )
  }

  if(query ){
    return (
      <h1 className="self-start text-white heading3">
        Search results for "{query}"     
      </h1>
    )
  }

  if(category ){
    return (
      <h1 className="self-start text-white heading3">
         <span className="capitalize"> {category} </span>    
      </h1>
    )
  }

  return (
    <h1 className="self-start text-white heading3">No Results </h1>
  )
}

export default Header