function anterior(index, inicio) {
    var nodo_actual = inicio;
    var count = 0;

    while (count < index-1) {
        count++;
        nodo_actual = nodo_actual.next;
    };

    

    return nodo_actual.elem;
};

function getUltimo(inicio) {
    if (!inicio) {
        return null
    };

    let nodo_actual = inicio;

    while (nodo_actual) {
        if (!nodo_actual.next) {
            return nodo_actual;
        };

        nodo_actual = nodo_actual.next;
    }


}


function GetIndex(elem, inicio) { 
    var nodo_actual = inicio;
    var index = -1

    while (nodo_actual) {
        index++

        if (nodo_actual.elem === elem) { 
            console.log(index)
            return index;
        }

        nodo_actual = nodo_actual.next;
    };

    return -1
}

function linked_list() { 
    var longitud = 0;
    var inicio = null;



    var Nodo = function(elem) { 
        this.elem = elem;
        this.next = null;

    };

    this.anadir = function(elem) {
        var nodo = new Nodo(elem) //Crea un nodo


        if(inicio === null) { 
            inicio = nodo;

            
        } //Checa si el inicio de la lista esta vacio, en caso de que si el nodo pasa a ser el primer elemento

        else { 
            var nodo_actual = inicio;
                       
            while (nodo_actual.next) {
                nodo_actual = nodo_actual.next;
            };

            nodo_actual.next = nodo;
            
        }

        longitud++ //Se le añade +1 a la longitud de la lista
    };

    this.inicio = function() { 
        console.log(inicio)
        return inicio;
    };


    this.sort = function() {
        
        let last = getUltimo(inicio)
        var nodo_actual = inicio;

        while (nodo_actual != last) { 
            if (nodo_actual.elem) { }


            if (last) {}
            nodo_actual = nodo_actual.next;
        }

        
    };
}

lista = new linked_list();



lista.anadir(3)
lista.anadir(1)
lista.anadir(5)
lista.anadir(6)


lista.inicio()


console.log("=====================================================================================================================================================")

lista.sort()

lista.inicio()


function anadir() {
    var value_to_add = document.getElementById("anadir");

    

}