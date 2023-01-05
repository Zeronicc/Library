const body = document.querySelector("body")
const addBtn = document.querySelector("#add-btn");
const addBook = document.querySelector(".add-btn")
const titleInput = document.querySelector("#title-box");
const authorInput = document.querySelector("#author-box");
const pagesInput = document.querySelector("#pages-box");
const readInput = document.querySelector("#checkbox");
const libraryContainer = document.querySelector(".display-books")
const form = document.querySelector(".add-book-form")


addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    addBookToLibrary();
    })

addBook.addEventListener('click', () => {
    form.style.display = "flex"
})

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages =  pages
  this.read = read
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages =  pagesInput.value;
    const read = readInput.checked;
    if(title == "" || author == "" || pages == "") return;
    if(myLibrary.some(book => book.title === title)) return;
    let newBook = new Book(title, author, pages, read);
    createBookCard(newBook);
    myLibrary.push(newBook);
    form.style.display = "none"
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;    
}

function createBookCard(book) {
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
    
    book1 = book.title

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
        myLibrary = myLibrary.filter(e => e !== book )
        cardContainer.remove()
    })

    libraryContainer.appendChild(cardContainer);
    cardContainer.appendChild(title);
    cardContainer.appendChild(author);
    cardContainer.appendChild(pages);
    cardContainer.appendChild(readBtn);
    cardContainer.appendChild(deleteBtn)
}


function removeForm(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    form.style.display = "none"
}



