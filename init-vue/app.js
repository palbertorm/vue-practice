const app = Vue.createApp({
    // data and functions inside here
    //template: '<p> hello Vue</p>'
    data() {
        return{
            url: 'www.google.com',
            showProfile: true,
            showBooks: true,
            name: 'Moura',
            profesion: 'developer',
            age: 20,
            x: 0,
            y: 0,
            books:[
                { title: 'the final empire', author: 'Brandon Sanderson',image: 'assets/1.jpg', isFav: true },
                { title: 'El Alquimista', author: 'Paulo Coelho', image: 'assets/2.jpg', isFav: false },
                { title: "Why i dont' talk about racism with white people", author: 'Reni Eddo-Lodge', image: 'assets/3.jpg', isFav: true },
                { title: 'How facism Works', author: 'Jason Stanley', isFav: false },
            ]
        }
    },
    methods: {
        changeName(name){
            this.name = name
        },
        changeProfesionandAge(){
            this.profesion = 'Singer',
            this.age = 85
        },
        toggleProfile(){
            this.showProfile = !this.showProfile
        },
        toggleBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data) {
                console.log(data, 'number')
            }
        },handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav(book){
            console.log('entra')
            book.isFav = !book.isFav
        }

    },
    computed: {
        // filter objects from data
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')