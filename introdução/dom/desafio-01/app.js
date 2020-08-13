new Vue({
    el: "#desafio",
    data: {
        nome: "Fernando Melim Hottum",
        idade: "23",
        linkimg: "download.jpg"
    },
    methods: {
        idadeMult(){
            return this.idade * 3;
        },
        random(){
            return Math.random();
        }
    }
});