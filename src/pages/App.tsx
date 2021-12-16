import React, { useState, useEffect } from 'react';
import searchAction from "../actions/AppActions";
import filterActions from "../actions/FilterActions";
import loadingAction from "../actions/LoadingActions";
import Store from "../stores/Store";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Header from '../components/Header';
import List from '../components/List';
import Loading from '../components/Loading';

import '../styles/App.scss';

function App() { 
  const [displayLoading, setDisplayLoading] = useState<boolean>(Store.getDisplayLoading());
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
  const [search, setSearch] = useState(Store.getSearchResult());
  const [list, setList] = useState(Store.getList());
  const [count, setCount] = useState(Store.getCount());
  const [filterBy, setFilterBy] = useState(Store.getFilterBy());
  
  useEffect(() => {
    Store.addChangeListener(onSubmit);
    // setDisplayLoading(Store.getDisplayLoading());
    if(Store.getSearchResult().length === 0) searchAction("");
    return () => Store.removeChangeListener(onSubmit);
  }, [search]);


  useEffect(() => {
    Store.addChangeListener(onFilter);
    if (Store.getFilterBy() == "") filterActions("all");
    return () => Store.removeChangeListener(onFilter);
  }, [filterBy]);


  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  useEffect(() => {
    setDisplayLoading(Store.getDisplayLoading());
  });

  function onSubmit():void {
    setSearch(Store.getSearchResult());
    setList(Store.getList());
    setCount(Store.getCount());
  }

  function onFilter():void {
    setFilterBy(Store.getFilterBy());
  }
  
  function handleWindowSizeChange() {
    setDeviceWidth(window.innerWidth);
  } 

  const isMobile = deviceWidth <= 768;

  return (
    <div className="App App--padding">

      {isMobile ? <NavbarMobile search={search} /> : <Navbar /> }

      {displayLoading && <Loading />}

      {list.length > 0 && <><Header isMobile={isMobile} count={count}/><List videos={list}/></>}

    </div>
  );
}

export default App; 
