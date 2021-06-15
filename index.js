function add_img() {
    var imgh = document.createElement("img");
    imgh.src = "./img/owo.png";
    document.body.appendChild(imgh);
}

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

            add_img()

        
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

    this.existe = function(elem) { 
        var nodo_actual = inicio;

        var indice = -1

        while(nodo_actual) { 
            indice++

            if (nodo_actual.elem === elem) {
                return true;
            }

            nodo_actual = nodo_actual.next
        };
    }
}



lista = new linked_list();



function anadir() {
    var value_to_add = document.getElementById("anadir");



    //chek if is a number 

    var is_number = parseFloat(value_to_add.value);
    
    if (isNaN(is_number)) { 
        alert("Introduzca un valor que sea un número")
    }

    else { 
        var valor = value_to_add.value;
 

        console.log(valor) //

    


        if (lista.existe(is_number)) { 
            alert("Inserte un elemento que no este en la lista")
        }

        else {
	
            if (value_to_add.value.startsWith(".")) {
                
                var OvO = value_to_add.value.split(".");
                console.log("OwO");
                var OwO = `0.${OvO[1]}`;
                var UwU = parseFloat(OwO);
              	 
		var visual_node = document.createElement("p");

		visual_node.innerHTML = OwO;
		visual_node.id = OwO;
		lista.anadir(UwU);
		document.body.appendChild(visual_node);
		lista.inicio();

            }
        

		else {     
                var visual_node = document.createElement("p");
                visual_node.innerHTML = value_to_add.value;
                

                
                visual_node.id = value_to_add.value;
                lista.anadir(is_number)
                document.body.appendChild(visual_node)

                    
            
                lista.inicio()
		}

        //value_to_add.value = ""
        }
    }
}

//this function detect when someone press ENTER OwO



function ordenar() { 
    lista.sort()
    lista.inicio()
}
