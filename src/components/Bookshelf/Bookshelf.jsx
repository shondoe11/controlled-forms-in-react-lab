import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })
    const handleInputChange = (e) => {
        console.log('handleInputChange called.');
        const {name, value} = e.target;
        setNewBook((prevNewBook) => ({...prevNewBook, [name]: value}));
    }
    const handleSubmit = (e) => {
        console.log('handleSubmit called.');
        e.preventDefault();
        setBooks((prevBooks) => [...prevBooks, newBook]);
        setNewBook({title: '', author: ''});
    }
    
    const newBookHasMissingData = !newBook.title.trim() || !newBook.author.trim();
    // tried to include some validation
    return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <section>
                    Title: <input type='text' name='title' placeholder='Enter title' value={newBook.title} onChange={handleInputChange} />
                </section>
                <br />
                <section>
                    Author: <input type='text' name='author' placeholder='Enter author name' value={newBook.author} onChange={handleInputChange} />
                </section>
                <br />
                <button type='submit' disabled={newBookHasMissingData}>Add Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
            <h2>Book List</h2>
            {books.length > 0 ? (books.map((book, i) => (
                <div key={i} className='bookCard'>
                    <h4>{book.title}</h4> by {book.author}
                </div>
            ))
            ) : (<p>No books added yet!</p>)
            }
        </div>
    </div>
    );
};

export default Bookshelf;