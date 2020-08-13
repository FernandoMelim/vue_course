new Vue({
    el: '#desafio',
    data: {
        valor: 35,
        //result: ""
    },
    computed: {
        result(){
            return this.valor == 37 ? "Igual a 37" : "Diferente de 37" ;
        }    
    },
    watch: {
        result(){ // pode monitorar variavel computada
            const vueInstance = this;
            setTimeout(function(){
                vueInstance.valor = 0;
            },5000);
        }
    }
});