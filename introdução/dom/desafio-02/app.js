new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clique(){
            alert("hello");
        },
        keyd(event){
            this.valor = event.target.value;
        }
    }
})