import React, { Component, useEffect, useState } from 'react';
import BooksFactory from '../Book/BooksFactory';
import { getPopularBooks } from '../Infrastructure/BookClient';
import AddBook from './layouts/AddBook';
import Search from './layouts/Search';


function Home() {  
  const [popularBooks, setPopularBooks] = useState([]);
  
  useEffect(() => {
    getPopularBooks().then((res) => {
      setPopularBooks(res);
    })
  },[]);

  return (
    <>
    <AddBook />
    <div className="container">
        <Search />
      <hr />
      <div className='clearfix'></div>
      <div className='row'>
        <div>
          <h3>Books that you read</h3>
        </div>
      </div>
      <div className="row">
      <BooksFactory books={popularBooks} />
      </div>
      <hr />
      <div className='row'>
        <div>
          <h3>Books being read in your area</h3>
        </div>
      </div>
      <div className="row">
      </div>
    </div>
    </>
  );
}

export default Home;