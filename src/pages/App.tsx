import React, { useState, useEffect } from 'react';
import searchAction from "../actions/AppActions";
import Store from "../stores/Store";
import Navbar from "../components/Navbar";
import List from '../components/List';
import '../styles/App.scss';

function App() {
 
  const [search, setSearch] = useState(Store.getSearchResult());
  const [list, setList] = useState(Store.getList());
  const [count, setCount] = useState(Store.getCount());

  useEffect(() => {
    Store.addChangeListener(onSubmit);
    if (Store.getSearchResult().length === 0) searchAction("");
    return () => Store.removeChangeListener(onSubmit);
  }, [search]);

  function onSubmit():void {
    setSearch(Store.getSearchResult());
    setList(Store.getList());
    setCount(Store.getCount());
  }

  return (
    <div className="App App--padding">
      <Navbar />
      {list.length == 0 ? <div className="container" style={{textAlign: "center"}}><h1>Try search on Youtube</h1></div> : <List videos={list}/>}
    </div>
  );
}

export default App; 
