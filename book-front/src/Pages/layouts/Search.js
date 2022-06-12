import { useEffect, useState } from "react";
import BooksFactory from "../../Book/BooksFactory";
import { searchBooks } from "../../Infrastructure/BookClient";

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        if (searchKeyword.length > 0) {
          searchBooks(searchKeyword).then((res) => {
            setSearchResults(res);
          });
        } else {
          setSearchKeyword('');
        }
    }, [searchKeyword]);

    
        let results = '';
        
        if (searchKeyword.length > 0) {
          results = (
            <div className='row'>
              <h3>Search Results</h3>
              <BooksFactory books={searchResults} />
            </div>
            );
        }
    
        
    
        return (
          <div>
            <div className="row">
              <h3>
                Which book are you currently reading?
              </h3>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Title</span>
                <input type="text" className="form-control" onChange={evt => setSearchKeyword(evt.target.value)} aria-describedby="basic-addon1"/>
              </div>
            </div>
            {results}
          </div>
        );
    
}

export default Search;