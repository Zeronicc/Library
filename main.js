const addBookBtn = document.querySelector("#add-btn");
const addNewBook = document.querySelector(".add-btn")
const titleInput = document.querySelector("#title-box");
const authorInput = document.querySelector("#author-box");
const pagesInput = document.querySelector("#pages-box");
const readInput = document.querySelector("#checkbox");
const form = document.querySelector(".add-book-form")

let myLibrary = [];

addBookBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let newBook = new addBook().addToLibrary();
    new addBook().createBookCard(newBook);
    })

addNewBook.addEventListener('click', () => {
    form.style.display = "flex"
})



class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages =  pages
        this.read = read
    }

    checkDupeBook(title) {return myLibrary.some(book => book.title === title)}

    removeBook(book) {return myLibrary = myLibrary.filter(e => e !== book )}

}

class addBook {
    // Adds book to library
    addToLibrary() {
    const title = titleInput.value
    const author = authorInput.value
    const pages =  pagesInput.value;
    const read = readInput.checked;
    //Checks if inputs are empty
    if(title === "" || author === "" || pages === "") return;
    if(new Book().checkDupeBook(title)) return;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // Clears form info
    form.style.display = "none"
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    return newBook   
    }
    // Makes book cards and add them to grid
    createBookCard(book) {
        if(book === undefined) return 
        const libraryContainer = document.querySelector(".display-books")
        
        const cardContainer = document.createElement('div')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        let readBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        
        cardContainer.classList.add('card-container')
        deleteBtn.classList.add('delete-icon')
        readBtn.classList.add('read-btn')

        title.textContent = `"${book.title}"`
        author.textContent = `${book.author}`
        pages.textContent = `${book.pages} Pages`
        readBtn.textContent = "Read"

        if(book.read){
            readBtn.classList.add('read-green')
        }else{readBtn.classList.add('read-red')}
        
        let book1 = book.title
        // Makes title text smaller depending on length
        if(book1.length > 14){
            title.style.fontSize = '1.3em'
        }else if(book1.length > 11){
            title.style.fontSize = '1.4em'
        }

        readBtn.addEventListener('click', e => {
            if(book.read){
                readBtn.classList.remove('read-green')
                readBtn.classList.add('read-red')
                book.read = false
            }else{
                readBtn.classList.remove('read-red')
                readBtn.classList.add('read-green')
                book.read = true
            }
        })

        deleteBtn.addEventListener('click', e => {
            new Book().removeBook(book)
            cardContainer.remove()
        })

        libraryContainer.appendChild(cardContainer);
        cardContainer.appendChild(title);
        cardContainer.appendChild(author);
        cardContainer.appendChild(pages);
        cardContainer.appendChild(readBtn);
        cardContainer.appendChild(deleteBtn)
    }

}
// Removes form's info and display
function removeForm(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    form.style.display = "none"
}