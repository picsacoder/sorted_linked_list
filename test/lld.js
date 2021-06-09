function linked_list() { 
    var inicio = null;
    var cola = null



    var Nodo = function(elem) { 
        this.elem = elem;
        this.next = null;
        this.prev = null

    };

    this.anadir = function(elem) {
        var nodo = new Nodo(elem) //Crea un nodo


        if(cola === null) { 
            inicio = nodo;
            cola = nodo;

            
        } //Checa si el inicio de la lista esta vacio, en caso de que si el nodo pasa a ser el primer elemento

        else { 
            cola.next = nodo;
            nodo.prev = cola;
            cola = nodo;
            
        }

    };

    this.inicio = function() { 
        console.log(inicio)
        return inicio;
    };//sj 




    this.sort = function() { 
        let last = cola;

        while (last) { 
            let nodo_actual = inicio;

            while (nodo_actual != last) {
                let sig = nodo_actual.next;
                if (nodo_actual.elem > sig.elem) {
                    [nodo_actual.elem, sig.elem] = [sig.elem, nodo_actual.elem]
                }

                nodo_actual = sig
            };

            last = last.prev
        }
    };

}

var l = new linked_list()

l.anadir(2)
l.anadir(3)
l.anadir(1)

l.inicio()

l.sort()
console.log("=================================================================================================================")

l.inicio()
