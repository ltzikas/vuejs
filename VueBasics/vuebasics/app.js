const app = Vue.createApp({
    data(){
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            title: "El imperio contraataca",
            author: "Mark Hamill",
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: "El señor de los anillos", author: "J.R.R. Tolkien", img: "assets/1.jpg", isFav: true},
                {title: "Harry Potter", author: "J.K. Rowling", img: "assets/2.jpg", isFav: false},
                {title: "Cien años de soledad", author: "Gabriel García Márquez", img: "assets/3.jpg", isFav: true}
            ]
        }
    },
    methods: {
        changeTitle(title){
                this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            console.log(book)
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')