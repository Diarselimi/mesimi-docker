import axios from 'axios';
import BooksFactory from '../Book/BooksFactory';


const http = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: {
      'X-api-key': '$2b$10$5wdrQnV/70RP3pgrNZ3yZ.dNWQstLrwiNNF7528COqWtx4I5OFTcS'
    }
  });

export function getPopularBooks() {
    
    return http.get('/books').then(function (res){
        return res.data.books;
    }).catch(function(res){
        console.log(res);
    });
}

export function getTopicsForBook() {
    
    return http.get('/books').then(function (res){
        return res.data.books;
    }).catch(function(res){
        console.log(res);
    });
}

export function searchBooks(searchQuery) {
    return http.get('/book/search?q='+searchQuery).then((res) => {
        return res.data.books;
    });
}

export function createBook(bookData) {
    return http.post('/books', bookData).then((res) => {
        return res.data.books;
    });
}

export function searchNewBook(keyword) {
    return http.get('/book/lookup?keyword='+keyword, {
        'keyword': keyword
    }).catch((e) => {
        // console.log(e);
        return [];
    })
    .then((res) => {
        if ('books' in res.data) {
            return res.data.books[0];
        }
        return [];
    });
}