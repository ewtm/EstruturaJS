class Fila {

    constructor(){
        this.elementos = [];
    }

    inserir(dado){
        //Inserir no final
        this.elementos.push(dado);
    }

    remover(){
        //remover no inicio
        return this.elementos.shift();
    }

    imprimir(){
        console.log(this.elementos.toString());
    }

    primeiro(){
        return this.elementos[0];
    }

    ultimo(){
        return this.elementos[this.elementos.length-1];
    }

    estaVazia(){
        return  this.elementos.length == 0 ;
    }

}

var filaDeCliente = new Fila();
filaDeCliente.inserir("Du");
filaDeCliente.inserir("Dudu");
filaDeCliente.inserir("Edu");
filaDeCliente.inserir("Durradinho");
filaDeCliente.imprimir();

filaDeCliente.remover();
filaDeCliente.imprimir();