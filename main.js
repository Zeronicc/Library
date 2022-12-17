const addBtn = document.querySelector("#add-btn");
const titleInput = document.querySelector("#title-box");
const authorInput = document.querySelector("#author-box");
const pagesInput = document.querySelector("#pages-box");
const readInput = document.querySelector("#checkbox");
const libraryContainer = document.querySelector(".display-books")

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    addBookToLibrary();
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
    console.log(myLibrary);
    
}

function createBookCard(book) {
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const checkbox = document.createElement('input')

    checkbox.type = "checkbox"
    checkbox.classList.add("library-checkbox")


    title.textContent = `"${book.title}"`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages}`

    if(book.read){
        checkbox.checked = true
    }else{checkbox.checked = false}

    libraryContainer.appendChild(title);
    libraryContainer.appendChild(title);
    libraryContainer.appendChild(author);
    libraryContainer.appendChild(pages);
    libraryContainer.appendChild(checkbox);
}



