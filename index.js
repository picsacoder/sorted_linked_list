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
    };


    this.sort = function() { 
        let last = cola;

        while (last) { 
            let nodo_actual = inicio;

            while (nodo_actual != last) {
                let sig = nodo_actual.next;
                if (nodo_actual.elem > sig.elem) {
                    var x = document.getElementById(nodo_actual.elem);
                    var y = document.getElementById(sig.elem);

                    [x.id, y.id] = [y.id, x.id];
                    [x.innerHTML, y.innerHTML] = [y.innerHTML, x.innerHTML];
                    [nodo_actual.elem, sig.elem] = [sig.elem, nodo_actual.elem];
                }

                nodo_actual = sig
            };

            last = last.prev
        }
    };

}

lista = new linked_list();



function anadir() {
    var value_to_add = document.getElementById("anadir");



    //chek if is a number 

    var is_number = parseFloat(value_to_add.value);
    
    if (!is_number) { 
        alert("Introduzca un valor que sea un número")
    }

    else { 
        var visual_node = document.createElement("p");
        visual_node.innerHTML = value_to_add.value;
        visual_node.id = value_to_add.value;
        document.body.appendChild(visual_node)

        lista.anadir(is_number)

        lista.inicio()

        value_to_add.value = ""
    }

    

}

function ordenar() { 
    lista.sort()
    lista.inicio()
}