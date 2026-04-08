import {createContext, useState} from 'react'

const SearchBarContext = createContext({
    searchTerm:"",
    setSearchTerm:()=>{}

})

export function SearchBarContextProvider({children}) {
    const [searchTerm,setSearchTerm]=useState('')


//     function handleSearchTerms(term){
//         setSearchTerm(term)
//     }
// const searchBarContext ={
//     searchTerm:searchTerm,
//     setSearchTerm:handleSearchTerms

  return (
    <SearchBarContext.Provider value={{searchTerm,setSearchTerm}}>
      {children}
    </SearchBarContext.Provider>
  )
}

export default SearchBarContext;
