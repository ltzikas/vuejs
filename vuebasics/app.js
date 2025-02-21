const app = Vue.createApp({
    data(){
        return {
            title: "El imperio contraataca",
            author: "Mark Hamill",
            age: 45
        }
    },
    methods: {
        changeTitle(title){
                this.title = title
        }
    }
})

app.mount('#app')