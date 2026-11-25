import SearchBar from "./components/SearchBar"


function App() {

  const handleSearch = (city:string) => {
    console.log(city);
  }
  return (
    <>

    <SearchBar onSearch={handleSearch}/>
    
    </>
  )
}

export default App
