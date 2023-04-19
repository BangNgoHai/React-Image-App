import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CardPage from './Components/Content/CardPage';
import Header from './Components/Header/Header';
import Searchbar from './Components/Searchbar/Searchbar';

function App() {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(null);
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [error,setError] = useState(null);
  const [searched,setSearched] = useState(false);
  const accessKey = "waI0dYL3uz4j6CyuQOgEYMxW26JY6d33wM1lZJRVA5U";
  const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;

  useEffect(()=>{
    async function getData(){
      const res = await axios.get(apiUrl);
      return res;
    }
    getData().then((res) => {
      setData(res.data);
      setData(prevData => {
        return {
          ...res.data,
          results: [...prevData.results, ...prevData.results]
        };
      });
    });
    getData().catch((err) => setError(err))
  }, [apiUrl]);

  function handleSubmit(event){
    event.preventDefault();
    setInputValue(value);
    setPage((prevPage) => prevPage + 1);
    setSearched(true);
    setData(null);
  }

  return (
    <div className="App">
        <Header/>
        <Searchbar setValue={setValue} handleSubmit={handleSubmit}/>
        {error ? <>
          <h1 style={{textAlign:"center"}}>Something went wrong...</h1>
          <p>{error.toString()}</p>
        </> : null}
        {data ? <div>
          <CardPage data={data} page={page} searched={searched} handleSubmit={handleSubmit} />
        </div> : inputValue ? <h1 style={{textAlign:"center"}}>Loading...</h1> : <h1 style={{textAlign:"center"}}>Enter something in search</h1>}
    </div>
  );
}

export default App;
 