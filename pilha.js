class Pilha {
    constructor(){
        this.elementos = [];
    }

    empilhar(dado){
        //Unshift vai adicionar elementos no topo da pilha
        this.elementos.unshift(dado);
    }

    desempilhar(){
        //Remove do topo
        return this.elementos.shift();
    }

    imprimir(){
        this.estaVazia ?
            console.log("Pilha vazia") :
                console.log(this.elementos.toString());

    }

    topo(){
        return this.elementos[0];
    }

    estaVazia(){
        return this.elementos.length == 0;
    }

    

}

var pilhaDeClientes = new Pilha();

pilhaDeClientes.imprimir();