import { useEffect, useState } from "react";
import BooksFactory from "../../Book/BooksFactory";
import { createBook, searchNewBook } from "../../Infrastructure/BookClient";

function AddBook() {

    const [selectedBook, setSelectedBook] = useState(null);
    const [newBookKeyword, setNewBookKeyword] = useState('');
  
    useEffect(() => {
        if (newBookKeyword.length > 3) {
            searchNewBook(newBookKeyword).then((res) => {
                setSelectedBook(res);
            });
        }
    },[newBookKeyword]);

    return (
        <div className="modal fade" id="addBookModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add new book</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <BooksFactory newBook={selectedBook} />

                    <label htmlFor="newBookTitle" className="form-label">Book title</label>
                    <input type="text" value={selectedBook?.title} />
                    <input className="form-control" onChange={evt => setNewBookKeyword(evt.target.value)} list="bookList" id="newBookTitle" placeholder="New book title..." />
                    {/* <datalist id="bookList">
                        {[{"id": 1222,"title": "The power of habbit", "author": "Some author"}].map((item, k) =>
                            <option value={item.title} />
                        )}
                    </datalist> */}
                    <label htmlFor="newBookTitle" className="form-label">Authors</label>
                    <input className="form-control" id="newBookAuthors" placeholder="separated by comma ," value={selectedBook?.authors} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={() => createBook(selectedBook)}>Create and join</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AddBook;